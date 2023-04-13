// Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500.

use('class');

db.xmen.updateMany(
    {class: {$in: ['omega', 'gama']}},
    { 
        $max: {power: 500},
        $currentDate: { lastUpdate: { $type: "timestamp" } },
    }

);
