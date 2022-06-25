<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Detainee\StoreDetainee;
use App\Http\Requests\Detainee\UpdateDetainee;
use App\Http\Requests\Detainee\DestroyDetainee;
use App\Models\Detainee;
use App\Repositories\Detainees;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Validator;


class DetaineeController  extends Controller
{
    private Detainees $repo;
    public function __construct(Detainees $repo)
    {
        $this->repo = $repo;
    }

    /**
    * Display a listing of the resource.
    *
    * @param  Request $request
    * @return    \Inertia\Response
    * @throws  \Illuminate\Auth\Access\AuthorizationException
    */
    public function index(Request $request): \Inertia\Response
    {
        $this->authorize('viewAny', Detainee::class);
        return Inertia::render('Detainees/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Detainee::class),
                "create" => \Auth::user()->can('create', Detainee::class),
            ],
            "columns" => $this->repo::dtColumns(),
        ]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return  \Inertia\Response
    */
    public function create()
    {
        $this->authorize('create', Detainee::class);
        return Inertia::render("Detainees/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Detainee::class),
            "create" => \Auth::user()->can('create', Detainee::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreDetainee $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreDetainee $request)
    {
        try {
            $data = $request->sanitizedObject();
            Validator::make($request->toArray(), [
                'photo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:1024'],
            ])->validateWithBag('addDetaineePhoto');
            $data->photo = $request['photo'];
            $detainee = $this->repo::store($data);
            return back()->with(['success' => "The Detainee was created succesfully."]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Display the specified resource.
    *
    * @param Request $request
    * @param Detainee $detainee
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Detainee $detainee)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($detainee->esta_id , \Auth::user()->establishments->pluck('id')) ){
                throw new AuthorizationException();
            }
            $this->authorize('view', $detainee);
            $model = $this->repo::init($detainee)->show($request);
            return Inertia::render("Detainees/Show", ["model" => $model]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Show Edit Form for the specified resource.
    *
    * @param Request $request
    * @param Detainee $detainee
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Detainee $detainee)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($detainee->esta_id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException();
            }
            $this->authorize('update', $detainee);
            //Fetch relationships  
            $detainee->load([
                'establishment',
            ]);

            return Inertia::render("Detainees/Edit", ["model" => $detainee]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Update the specified resource in storage.
    *
    * @param UpdateDetainee $request
    * @param {$modelBaseName} $detainee
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateDetainee $request, Detainee $detainee)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($detainee->esta_id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException();
            }
            $data = $request->sanitizedObject();
            $res = $this->repo::init($detainee)->update($data);
            return back()->with(['success' => "The Detainee was updated succesfully."]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }




    /**
    * Remove the specified resource from storage.
    *
    * @param Detainee $detainee
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyDetainee $request, Detainee $detainee)
    {
        if(!\Auth::user()->hasRole("administrator") && !in_array($detainee->esta_id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
            return back()->with(['error' => "AuthorizationException : The Detainee could not be deleted."]);
        }
        $res = $this->repo::init($detainee)->destroy();
        if ($res) {
            return back()->with(['success' => "The Detainee was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Detainee could not be deleted."]);
        }
    }
}
