// Remova o campo class dos documentos que possuem esse campo com o valor unknown.

use('class');

db.xmen.updateMany(
    {class: 'unknown'},
    {
        $unset: {class: ''},
        $currentDate: {lastUpdate: {$type: 'timestamp'}}
    }
)

