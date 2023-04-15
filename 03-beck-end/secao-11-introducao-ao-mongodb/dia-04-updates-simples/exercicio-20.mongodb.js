// Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.


use('class');

db.xmen.updateMany(
    { 
        occupation: 'Junior Staff',
        areas: {$exists: false}
    },
    {
        $set: {areas: ["Outside"]},
        $currentDate: { lastUpdate: { $type: "timestamp" } },
    }
);