<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Medicament\IndexMedicament;
use App\Http\Requests\Medicament\StoreMedicament;
use App\Http\Requests\Medicament\UpdateMedicament;
use App\Http\Requests\Medicament\DestroyMedicament;
use App\Models\Medicament;
use App\Repositories\Medicaments;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class MedicamentController  extends Controller
{
    private ApiResponse $api;
    private Medicaments $repo;
    public function __construct(ApiResponse $apiResponse, Medicaments $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexMedicament $request)
    {
        $query = Medicament::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('dosage')->title('Dosage')->sort()->searchable(),
            Column::name('nom_commercial')->title('Nom Commercial')->sort()->searchable(),
            Column::name('presentation')->title('Presentation')->sort()->searchable(),
            Column::name('ref')->title('Ref')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Medicaments")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Medicament::query()->select(Medicament::getModel()->getTable().'.*'); // You can extend this however you want.
        $query = $this->repo::applayFiltters($query , $request);
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreMedicament $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreMedicament $request)
    {
        try {
            $data = $request->sanitizedObject();
            $medicament = $this->repo::store($data);
            return $this->api->success()->message('Medicament Created')->payload($medicament)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Medicament $medicament
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Medicament $medicament)
    {
        try {
            $payload = $this->repo::init($medicament)->show($request);
            return $this->api->success()
                        ->message("Medicament $medicament->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateMedicament $request
     * @param {$modelBaseName} $medicament
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateMedicament $request, Medicament $medicament)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($medicament)->update($data);
            return $this->api->success()->message("Medicament has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Medicament $medicament
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyMedicament $request, Medicament $medicament)
    {
        $res = $this->repo::init($medicament)->destroy();
        return $this->api->success()->message("Medicament has been deleted")->payload($res)->code(200)->send();
    }

}
