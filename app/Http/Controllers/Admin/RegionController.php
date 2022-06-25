<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Region\IndexRegion;
use App\Http\Requests\Region\StoreRegion;
use App\Http\Requests\Region\UpdateRegion;
use App\Http\Requests\Region\DestroyRegion;
use App\Models\Region;
use App\Repositories\Regions;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class RegionController  extends Controller
{
    private Regions $repo;
    public function __construct(Regions $repo)
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
        $this->authorize('viewAny', Region::class);
        return Inertia::render('Regions/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Region::class),
                "create" => \Auth::user()->can('create', Region::class),
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
        $this->authorize('create', Region::class);
        return Inertia::render("Regions/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Region::class),
            "create" => \Auth::user()->can('create', Region::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreRegion $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreRegion $request)
    {
        try {
            $data = $request->sanitizedObject();
            $region = $this->repo::store($data);
            return back()->with(['success' => "The Region was created succesfully."]);
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
    * @param Region $region
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Region $region)
    {
        try {
            $this->authorize('view', $region);
            $model = $this->repo::init($region)->show($request);
            return Inertia::render("Regions/Show", ["model" => $model]);
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
    * @param Region $region
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Region $region)
    {
        try {
            $this->authorize('update', $region);
            //Fetch relationships
            

                        return Inertia::render("Regions/Edit", ["model" => $region]);
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
    * @param UpdateRegion $request
    * @param {$modelBaseName} $region
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateRegion $request, Region $region)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($region)->update($data);
            return back()->with(['success' => "The Region was updated succesfully."]);
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
    * @param Region $region
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyRegion $request, Region $region)
    {
        $res = $this->repo::init($region)->destroy();
        if ($res) {
            return back()->with(['success' => "The Region was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Region could not be deleted."]);
        }
    }
}
