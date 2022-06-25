<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Establishment\IndexEstablishment;
use App\Http\Requests\Establishment\StoreEstablishment;
use App\Http\Requests\Establishment\UpdateEstablishment;
use App\Http\Requests\Establishment\DestroyEstablishment;
use App\Models\Establishment;
use App\Repositories\Establishments;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class EstablishmentController  extends Controller
{
    private Establishments $repo;
    public function __construct(Establishments $repo)
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
        $this->authorize('viewAny', Establishment::class);
        return Inertia::render('Establishments/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Establishment::class),
                "create" => \Auth::user()->can('create', Establishment::class),
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
        $this->authorize('create', Establishment::class);
        return Inertia::render("Establishments/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Establishment::class),
            "create" => \Auth::user()->can('create', Establishment::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreEstablishment $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreEstablishment $request)
    {
        try {
            $data = $request->sanitizedObject();
            $establishment = $this->repo::store($data);
            return back()->with(['success' => "The Establishment was created succesfully."]);
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
    * @param Establishment $establishment
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Establishment $establishment)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($establishment->id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException();
            }
            $this->authorize('view', $establishment);
            $model = $this->repo::init($establishment)->show($request);
            return Inertia::render("Establishments/Show", ["model" => $model]);
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
    * @param Establishment $establishment
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Establishment $establishment)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($establishment->id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException();
            }
            $this->authorize('update', $establishment);
            //Fetch relationships
            $establishment->load([
                'region',
            ]);
            return Inertia::render("Establishments/Edit", ["model" => $establishment]);
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
    * @param UpdateEstablishment $request
    * @param {$modelBaseName} $establishment
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateEstablishment $request, Establishment $establishment)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($establishment->id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException();
            }
            $data = $request->sanitizedObject();
            $res = $this->repo::init($establishment)->update($data);
            return back()->with(['success' => "The Establishment was updated succesfully."]);
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
    * @param Establishment $establishment
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyEstablishment $request, Establishment $establishment)
    {
        if(!\Auth::user()->hasRole("administrator") && !in_array($establishment->id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
            return back()->with(['error' => "AuthorizationException : The Establishment could not be deleted."]);
        }
        $res = $this->repo::init($establishment)->destroy();
        if ($res) {
            return back()->with(['success' => "The Establishment was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Establishment could not be deleted."]);
        }
    }
}
