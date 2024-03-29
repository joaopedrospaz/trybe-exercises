// Em apenas uma query adicione o campo areas com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.

use('class');

db.xmen.updateMany(
    { 
        $or: [
            {occupation: 'Senior Staff', power: {$gt: 100}},
            {occupation: 'Junior Staff' ,power: {$gt: 200}}
        ]
    },
    {
        $set: {areas: ["Students Room"]},
        $currentDate: { lastUpdate: { $type: "timestamp" } },
    }
);