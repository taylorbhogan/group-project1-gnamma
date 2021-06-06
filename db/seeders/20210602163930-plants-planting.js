'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Plants', [
      { name: 'Aloe Vera', scientificName: 'Aloe vera', imgUrl: 'aloe-vera' },
      { name: 'Jade Plant', scientificName: 'Crassula ovata', imgUrl: 'jade-plant' },
      { name: 'Spider Plant', scientificName: 'Chlorophytum comosum', imgUrl: 'spider-plant' },
      { name: 'Desert Rose', scientificName: 'Adenium obesum', imgUrl: 'desert-rose' },
      { name: 'Christmas Cactus', scientificName: 'Schlumbergera truncata', imgUrl: 'christmas-cactus' },
      { name: 'Moth Orchid', scientificName: 'Phalaenopsis', imgUrl: 'moth-orchid' },
      { name: 'ZZ Plant', scientificName: 'Zamioculcas zamiifolia', imgUrl: 'zz-plant' },
      { name: 'Ceriman', scientificName: 'Monstera deliciosa', imgUrl: 'ceriman' },
      { name: 'Ponytail Palm', scientificName: 'Beaucarnea recurvata', imgUrl: 'ponytail-palm' },
      { name: 'Inch Plant', scientificName: 'Callisia repens', imgUrl: '../../public/images/plants/plant-img010' },
      { name: 'String of Pearls', scientificName: 'Curio rowleyanus', imgUrl: '../../public/images/plants/plant-img011' },
      { name: 'Snake Plant', scientificName: 'Sansevieria cylindrica', imgUrl: '../../public/images/plants/plant-img012' },
      { name: 'Purple Shamrock', scientificName: 'Oxalis triangularis', imgUrl: '../../public/images/plants/plant-img013' },
      { name: 'Florist Kalanchoe', scientificName: 'Kalanchoe blossfeldiana', imgUrl: '../../public/images/plants/plant-img014' },
      { name: 'Fiddle Leaf Fig', scientificName: 'Ficus lyrata', imgUrl: '../../public/images/plants/plant-img015' },
      { name: 'Parlor Palm', scientificName: 'Chamaedorea elegans', imgUrl: '../../public/images/plants/plant-img016' },
      { name: 'Golden Barrel Cactus', scientificName: 'Echinocactus grusonii', imgUrl: '../../public/images/plants/plant-img017' },
      { name: 'English Ivy', scientificName: 'Hedera helix', imgUrl: '../../public/images/plants/plant-img018' },
      { name: 'Flapjacks', scientificName: 'Kalanchoe luciae', imgUrl: '../../public/images/plants/plant-img019' },
      { name: 'Panda Plant', scientificName: 'Kalanchoe tomentosa', imgUrl: '../../public/images/plants/plant-img020' },
      { name: 'Haworthia', scientificName: 'Haworthiopsis reinwardtii', imgUrl: '../../public/images/plants/plant-img021' },
      { name: 'Silver Squill', scientificName: 'Ledebouria socialis', imgUrl: '../../public/images/plants/plant-img022' },
      { name: 'Shrimp Plant', scientificName: 'Justicia brandegeeana', imgUrl: '../../public/images/plants/plant-img023' },
      { name: 'Coleus', scientificName: 'Coleus scutellarioides', imgUrl: '../../public/images/plants/plant-img024' },
      { name: 'Rubber Plant', scientificName: 'Ficus elastica', imgUrl: '../../public/images/plants/plant-img025' },
      { name: 'Queen of the Night', scientificName: 'Epiphyllum oxypetalum', imgUrl: '../../public/images/plants/plant-img026' },
      { name: 'Wax Plant', scientificName: 'Hoya carnosa', imgUrl: '../../public/images/plants/plant-img027' },
      { name: 'Chinese Money Plant', scientificName: 'Pilea peperomioides', imgUrl: '../../public/images/plants/plant-img028' },
      { name: 'Prayer Plant', scientificName: 'Maranta leuconeura', imgUrl: '../../public/images/plants/plant-img029' },
      { name: 'Strawberry Begonia', scientificName: 'Saxifraga stolonifera', imgUrl: '../../public/images/plants/plant-img030' },
      { name: 'Arrowhead Plant', scientificName: 'Syngonium podophyllum', imgUrl: '../../public/images/plants/plant-img031' },
      { name: 'Polka Dot Plant', scientificName: 'Hypoestes phyllostachya', imgUrl: '../../public/images/plants/plant-img032' },
      { name: 'Elephant Bush', scientificName: 'Portulacaria afra', imgUrl: '../../public/images/plants/plant-img033' },
      { name: 'Bay Laurel', scientificName: 'Laurus nobilis', imgUrl: '../../public/images/plants/plant-img034' },
      { name: 'String of Buttons', scientificName: 'Crassula perforata', imgUrl: '../../public/images/plants/plant-img035' },
      { name: 'Lucky Bamboo', scientificName: 'Dracaena sanderiana', imgUrl: '../../public/images/plants/plant-img036' },
      { name: 'Zebra Haworthia', scientificName: 'Haworthiopsis fasciata', imgUrl: '../../public/images/plants/plant-img037' },
      { name: 'Money Tree', scientificName: 'Pachira aquatica', imgUrl: '../../public/images/plants/plant-img038' },
      { name: 'Gardenia', scientificName: 'Gardenia jasminoides', imgUrl: '../../public/images/plants/plant-img039' },
      { name: 'Tree Philodendron', scientificName: 'Thaumatophyllum bipinnatifidum', imgUrl: '../../public/images/plants/plant-img040' },
      { name: 'Watch Chain Plant', scientificName: 'Crassula muscosa', imgUrl: '../../public/images/plants/plant-img041' },
      { name: 'Pencil Tree', scientificName: 'Euphorbia tirucalli', imgUrl: '../../public/images/plants/plant-img042' },
      { name: 'Boston Fern', scientificName: 'Nephrolepis exaltata', imgUrl: '../../public/images/plants/plant-img043' },
      { name: 'Sensitive Plant', scientificName: 'Mimosa pudica', imgUrl: '../../public/images/plants/plant-img044' },
      { name: 'Rattlesnake Plant', scientificName: 'Goeppertia lancifolia', imgUrl: '../../public/images/plants/plant-img045' },
      { name: 'Easter Cactus', scientificName: 'Hatiora gaertneri', imgUrl: '../../public/images/plants/plant-img046' },
      { name: 'Dwarf Umbrella Tree', scientificName: 'Schefflera arboricola', imgUrl: '../../public/images/plants/plant-img047' },
      { name: 'Spineless Yucca', scientificName: 'Yucca gigantea', imgUrl: '../../public/images/plants/plant-img048' },
      { name: 'Lavender Scallops', scientificName: 'Kalanchoe fedtschenkoi', imgUrl: '../../public/images/plants/plant-img049' },
      { name: 'Weeping Fig', scientificName: 'Ficus benjamina', imgUrl: '../../public/images/plants/plant-img050' },
      { name: 'Hardy Begonia', scientificName: 'Begonia grandis', imgUrl: '../../public/images/plants/plant-img051' },
      { name: 'Jewel Orchid', scientificName: 'Ludisia discolor', imgUrl: '../../public/images/plants/plant-img052' },
      { name: 'Oyster Plant', scientificName: 'Tradescantia spathacea', imgUrl: '../../public/images/plants/plant-img053' },
      { name: 'Bat Flower', scientificName: 'Tacca chantrieri', imgUrl: '../../public/images/plants/plant-img054' },
      { name: 'Peace Lily', scientificName: 'Spathiphyllum wallisii', imgUrl: '../../public/images/plants/plant-img055' },
      { name: 'Lace Aloe', scientificName: 'Aristaloe aristata', imgUrl: '../../public/images/plants/plant-img056' },
      { name: 'Golden Shrimp Plant', scientificName: 'Pachystachys lutea', imgUrl: '../../public/images/plants/plant-img057' },
      { name: 'Corkscrew Vine', scientificName: 'Vigna caracalla', imgUrl: '../../public/images/plants/plant-img058' },
      { name: 'Butterfly Amaryllis', scientificName: 'Hippeastrum papilio', imgUrl: '../../public/images/plants/plant-img059' },
      { name: 'Corn Plant', scientificName: 'Dracaena fragrans', imgUrl: '../../public/images/plants/plant-img060' },
      { name: 'Pink Lantern', scientificName: 'Medinilla magnifica', imgUrl: '../../public/images/plants/plant-img061' },
      { name: 'Pin Stripe Plant', scientificName: 'Goeppertia ornata', imgUrl: '../../public/images/plants/plant-img062' },
      { name: 'Sweetheart Hoya', scientificName: 'Hoya kerrii', imgUrl: '../../public/images/plants/plant-img063' },
      { name: 'Swiss Cheese Philodendron', scientificName: 'Monstera adansonii', imgUrl: '../../public/images/plants/plant-img064' },
      { name: 'Mother of Thousands', scientificName: 'Kalanchoe delagoensis', imgUrl: '../../public/images/plants/plant-img065' },
      { name: 'Pineapple', scientificName: 'Ananas comosus', imgUrl: '../../public/images/plants/plant-img066' },
      { name: 'Croton', scientificName: 'Codiaeum variegatum', imgUrl: '../../public/images/plants/plant-img067' },
      { name: 'Arabian Jasmine', scientificName: 'Jasminum sambac', imgUrl: '../../public/images/plants/plant-img068' },
      { name: 'Basket Plant', scientificName: 'Callisia fragrans', imgUrl: '../../public/images/plants/plant-img069' },
      { name: 'Watermelon Peperomia', scientificName: 'Peperomia argyreia', imgUrl: '../../public/images/plants/plant-img070' },
      { name: 'Pink Quill', scientificName: 'Wallisia cyanea', imgUrl: '../../public/images/plants/plant-img071' },
      { name: 'Buddha Belly Plant', scientificName: 'Jatropha podagrica', imgUrl: '../../public/images/plants/plant-img072' },
      { name: 'Gardenias', scientificName: 'Gardenia', imgUrl: '../../public/images/plants/plant-img073' },
      { name: 'Japanese Aralia', scientificName: 'Fatsia japonica', imgUrl: '../../public/images/plants/plant-img074' },
      { name: 'Rattail Cactus', scientificName: 'Disocactus flagelliformis', imgUrl: '../../public/images/plants/plant-img075' },
      { name: 'Orchid', scientificName: 'Cattleya', imgUrl: '../../public/images/plants/plant-img076' },
      { name: 'Dragonfruit', scientificName: 'Hylocereus polyrhizus', imgUrl: '../../public/images/plants/plant-img077' },
      { name: 'Brazilian Plume', scientificName: 'Justicia carnea', imgUrl: '../../public/images/plants/plant-img078' },
      { name: 'Cardboard Palm', scientificName: 'Zamia furfuracea', imgUrl: '../../public/images/plants/plant-img079' },
      { name: 'Aluminum Plant', scientificName: 'Pilea cadierei', imgUrl: '../../public/images/plants/plant-img080' },
      { name: 'Purple Heart', scientificName: 'Tradescantia pallida', imgUrl: '../../public/images/plants/plant-img081' },
      { name: 'Soap Aloe', scientificName: 'Aloe maculata', imgUrl: '../../public/images/plants/plant-img082' },
      { name: 'Orchid Cactus', scientificName: 'Disocactus ackermannii', imgUrl: '../../public/images/plants/plant-img083' },
      { name: 'Coconut Orchid', scientificName: 'Maxillaria tenuifolia', imgUrl: '../../public/images/plants/plant-img084' },
      { name: 'African Milk Tree', scientificName: 'Euphorbia trigona', imgUrl: '../../public/images/plants/plant-img085' },
      { name: 'Senecio', scientificName: 'Curio talinoides', imgUrl: '../../public/images/plants/plant-img086' },
      { name: 'Bengal Clock Vine', scientificName: 'Thunbergia grandiflora', imgUrl: '../../public/images/plants/plant-img087' },
      { name: 'Hoya', scientificName: 'Hoya curtisii', imgUrl: '../../public/images/plants/plant-img088' },
      { name: 'Viejita', scientificName: 'Mammillaria hahniana', imgUrl: '../../public/images/plants/plant-img089' },
      { name: 'Ghost Plant', scientificName: 'Graptopetalum paraguayense', imgUrl: '../../public/images/plants/plant-img090' },
      { name: 'Japanese Holly Fern', scientificName: 'Cyrtomium falcatum', imgUrl: '../../public/images/plants/plant-img091' },
      { name: 'Ming Aralia', scientificName: 'Polyscias fruticosa', imgUrl: '../../public/images/plants/plant-img092' },
      { name: 'Trailing Jade', scientificName: 'Kleinia petraea', imgUrl: '../../public/images/plants/plant-img093' },
      { name: 'Cane Begonia', scientificName: 'Begonia coccinea', imgUrl: '../../public/images/plants/plant-img094' },
      { name: 'Red Edge Peperomia', scientificName: 'Peperomia tricolor', imgUrl: '../../public/images/plants/plant-img095' },
      { name: 'Slipper Orchid', scientificName: 'Paphiopedilum', imgUrl: '../../public/images/plants/plant-img096' },
      { name: 'Dancing Bones Cactus', scientificName: 'Hatiora salicornioides', imgUrl: '../../public/images/plants/plant-img097' },
      { name: 'Miniature Pine Tree', scientificName: 'Crassula tetragona', imgUrl: '../../public/images/plants/plant-img098' },
      { name: 'Zebra Plant', scientificName: 'Aphelandra squarrosa', imgUrl: '../../public/images/plants/plant-img099' },
      { name: 'Bleeding Heart', scientificName: 'Clerodendrum thomsoniae', imgUrl: '../../public/images/plants/plant-img100' },
      { name: 'Peanut Cactus', scientificName: 'Echinopsis chamaecereus', imgUrl: '../../public/images/plants/plant-img101' },
      { name: 'Blue Ginger', scientificName: 'Dichorisandra thyrsiflora', imgUrl: '../../public/images/plants/plant-img102' },
      { name: 'Crinkle Leaf Plant', scientificName: 'Adromischus cristatus', imgUrl: '../../public/images/plants/plant-img103' },
      { name: 'Lipstick Plant', scientificName: 'Aeschynanthus radicans', imgUrl: '../../public/images/plants/plant-img104' },
      { name: 'Peacock Plant', scientificName: 'Goeppertia makoyana', imgUrl: '../../public/images/plants/plant-img105' },
      { name: 'String of Turtles', scientificName: 'Peperomia rotundifolia', imgUrl: '../../public/images/plants/plant-img106' },
      { name: 'Rhipsalis', scientificName: 'Rhipsalis pilocarpa', imgUrl: '../../public/images/plants/plant-img107' },
      { name: 'Swedish Ivy', scientificName: 'Plectranthus verticillatus', imgUrl: '../../public/images/plants/plant-img108' },
      { name: 'Velvet Leaf Philodendron', scientificName: 'Philodendron hederaceum', imgUrl: '../../public/images/plants/plant-img109' },
      { name: 'White Velvet', scientificName: 'Tradescantia sillamontana', imgUrl: '../../public/images/plants/plant-img110' },
      { name: 'Sand Rose', scientificName: 'Anacampseros rufescens', imgUrl: '../../public/images/plants/plant-img111' },
      { name: 'Ball Moss', scientificName: 'Tillandsia recurvata', imgUrl: '../../public/images/plants/plant-img112' },
      { name: 'Creeping Fig', scientificName: 'Ficus pumila', imgUrl: '../../public/images/plants/plant-img113' },
      { name: 'Bromeliad', scientificName: 'Guzmania', imgUrl: '../../public/images/plants/plant-img114' },
      { name: 'Blue Chalksticks', scientificName: 'Curio repens', imgUrl: '../../public/images/plants/plant-img115' },
      { name: 'Butterfly Pea', scientificName: 'Clitoria ternatea', imgUrl: '../../public/images/plants/plant-img116' },
      { name: 'Firecracker Plant', scientificName: 'Cuphea ignea', imgUrl: '../../public/images/plants/plant-img117' },
      { name: 'Canambaia', scientificName: 'Rhipsalis teres', imgUrl: '../../public/images/plants/plant-img118' },
      { name: 'Chinese Evergreen', scientificName: 'Aglaonema commutatum', imgUrl: '../../public/images/plants/plant-img119' },
      { name: 'Flower Dust Plant', scientificName: 'Kalanchoe pumila', imgUrl: '../../public/images/plants/plant-img120' },
      { name: 'Cape Sundew', scientificName: 'Drosera capensis', imgUrl: '../../public/images/plants/plant-img121' },
      { name: 'Spiny Pennywort', scientificName: 'Orostachys spinosa', imgUrl: '../../public/images/plants/plant-img122' },
      { name: 'Hanging Lobster Claw', scientificName: 'Heliconia rostrata', imgUrl: '../../public/images/plants/plant-img123' },
      { name: 'Rex Begonia Vine', scientificName: 'Cissus javana', imgUrl: '../../public/images/plants/plant-img124' },
      { name: 'Furry Kittens', scientificName: 'Cyanotis somaliensis', imgUrl: '../../public/images/plants/plant-img125' },
      { name: 'Carrion Plant', scientificName: 'Ceropegia grandiflora', imgUrl: '../../public/images/plants/plant-img126' },
      { name: 'Pink Ice Plant', scientificName: 'Oscularia deltoides', imgUrl: '../../public/images/plants/plant-img127' },
      { name: 'Kalanchoe', scientificName: 'Kalanchoe millotii', imgUrl: '../../public/images/plants/plant-img128' },
      { name: 'Purple Bell Vine', scientificName: 'Rhodochiton atrosanguineum', imgUrl: '../../public/images/plants/plant-img129' },
      { name: 'Pincushion Peperomia', scientificName: 'Peperomia ferreyrae', imgUrl: '../../public/images/plants/plant-img130' },
      { name: 'Fishtail Palm', scientificName: 'Caryota mitis', imgUrl: '../../public/images/plants/plant-img131' },
      { name: 'Rieger Begonia', scientificName: 'Begonia x hiemalis', imgUrl: '../../public/images/plants/plant-img132' },
      { name: 'Douglas Meadowfoam', scientificName: 'Limnanthes douglasii', imgUrl: '../../public/images/plants/plant-img133' },
      { name: 'Rosary Vine', scientificName: 'Crassula rupestris', imgUrl: '../../public/images/plants/plant-img134' },
      { name: 'Michoga', scientificName: 'Echinopsis huascha', imgUrl: '../../public/images/plants/plant-img135' },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Plants', null, {});
  }
};
