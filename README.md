# MSM APP : medical stock management 
# (Laravel + Vite.js + Tailwindcss + node.js/ Vue3 + SSR ) sail / Docker
## Intro
 
###Stock status , ( 1 , 2 , 2.5) , status , color , period

medic  : name_com, dosage , presentation, code / code bar, category_id , 

###Category ; 
###Region -> ###Etablissement 

stock :  id_medic ,id_etab , date_exp, date_prod , quantity , (getStatus depanding on date_exp)
Historique of sotckes (Axtions / log) :  id stock , action , quantity , date , desc , user_id
Ordonnance  -
Transfier        + / -  id etab 

transfere (provenance de la DR , provenance d'un établissement , envoyé à un établissment ): stock_id , quantity -/+ , etab_id , user_id , date , comment
consommation : stock_id ,  quantity + , detune_id , ordonnance_id , user_id, date,  comment

stock_history : stock_id , type ( transfere / consommation /  ) , quantity -/+ , etab_id , user_id , date , comment,[ detune_id , ordonnance_id ] nullable if it type == transfere 

tyeps : [
    'dr_provenance' => 'provenance de la DR ',
    'etab_provenance' => 'provenance d'un établissement ',
    'etab_transfere' => 'envoyé à un établissment',

    'consommation' => 'consommation',

    'detruit' => 'détruit'
]

## if dr_provenance or etab_provenance or Achats check date_dexpiration if stock any stock found merge quantities 
## if etab_transfere or consommation or detruit : show only medicament with quantity in stock 

Trasfier request 

### roles ; admin , manager ( etabs )  , user show stoke of assigned etabs, 

### detune name , cin , date ne , photo , code  etablisment
### assigned etabs to users / managers by regions

## Steps to Setup for Dev:
* Clone your repo to your local machine
* Setup your database
* `composer install --ignore-platform-reqs`
* `./vendors/bin/sail composer install`
* `cp .env.example .env`
* `./vendors/bin/sail up`
* `./vendors/bin/sail php artisan key:generate`
* `./vendors/bin/sail php artisan migrate --seed`
* `./vendors/bin/sail php artisan storage:link`

###  TODO ####

[ ] Edit create edit user forms 
[ ] PRINT PDF & EXPORT EXCEL FILE 
[ ]
[ ]
[ ]
[ ]
