<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Medicament\IndexMedicament;
use App\Http\Requests\Medicament\StoreMedicament;
use App\Http\Requests\Medicament\UpdateMedicament;
use App\Http\Requests\Medicament\DestroyMedicament;
use App\Models\Medicament;
use App\Repositories\Medicaments;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class MedicamentController  extends Controller
{
    private Medicaments $repo;
    public function __construct(Medicaments $repo)
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
        $this->authorize('viewAny', Medicament::class);
        return Inertia::render('Medicaments/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Medicament::class),
                "create" => \Auth::user()->can('create', Medicament::class),
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
        $this->authorize('create', Medicament::class);
        return Inertia::render("Medicaments/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Medicament::class),
            "create" => \Auth::user()->can('create', Medicament::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreMedicament $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreMedicament $request)
    {
        try {
            $data = $request->sanitizedObject();
            $medicament = $this->repo::store($data);
            return back()->with(['success' => "The Medicament was created succesfully."]);
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
    * @param Medicament $medicament
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Medicament $medicament)
    {
        try {
            $this->authorize('view', $medicament);
            $model = $this->repo::init($medicament)->show($request);
            return Inertia::render("Medicaments/Show", ["model" => $model]);
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
    * @param Medicament $medicament
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Medicament $medicament)
    {
        try {
            $this->authorize('update', $medicament);
            //Fetch relationships
            



        $medicament->load([
            'category',
        ]);
                        return Inertia::render("Medicaments/Edit", ["model" => $medicament]);
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
    * @param UpdateMedicament $request
    * @param {$modelBaseName} $medicament
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateMedicament $request, Medicament $medicament)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($medicament)->update($data);
            return back()->with(['success' => "The Medicament was updated succesfully."]);
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
    * @param Medicament $medicament
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyMedicament $request, Medicament $medicament)
    {
        $res = $this->repo::init($medicament)->destroy();
        if ($res) {
            return back()->with(['success' => "The Medicament was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Medicament could not be deleted."]);
        }
    }
}
