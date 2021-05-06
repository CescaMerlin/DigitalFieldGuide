exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("bird")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("bird").insert([
        {
          commonNameEnglish: "Japanese Scops-Owl",
          commonNameJapanese: "オオコノハズク",
          commonNameRomaji: "ookonohazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Otus semitorques",
          range: "S Kuril Islands and Hokkaido south to Yakushima I.",
          profilePic:
            "https://www.linkpicture.com/q/LPic605aa8f1c3e361637733283.jpg",
        },
        {
          commonNameEnglish: "Elegant Scops-Owl",
          commonNameJapanese: "リュウキュウコノハズク",
          commonNameRomaji: "ryuukyuukonohazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Otus elegans",
          range: "Ryukyu Islands",
        },
        {
          commonNameEnglish: "Oriental Scops-Owl",
          commonNameJapanese: "コノハズク",
          commonNameRomaji: "konohazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Otus sunia japonicus",
          range:
            "breeds Japan; at least partially migratory, but winter range not well documented",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d0/Oriental_Scops_Owl.jpg",
        },
        {
          commonNameEnglish: "Blakiston's Fish-Owl",
          commonNameJapanese: "シマフクロウ",
          commonNameRomaji: "shima fukurou",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Bubo blakistoni",
          range: "N Japan (s Kuril Islands and Hokkaido)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/BuboBlakistoniIUCN2019-2.png/220px-BuboBlakistoniIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bubo_blakistoni.jpg/800px-Bubo_blakistoni.jpg",
        },
        {
          commonNameEnglish: "Ural Owl",
          commonNameJapanese: "フクロウ",
          commonNameRomaji: "fukurou",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Strix uralensis japonica",
          range: "Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Strix_uralensis_distr..png/220px-Strix_uralensis_distr..png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Strix_uralensis_0a1.JPG/1024px-Strix_uralensis_0a1.JPG",
        },
        {
          commonNameEnglish: "Long-eared Owl",
          commonNameJapanese: "トラフズク",
          commonNameRomaji: "torafuzuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Asio otus",
          range: "Europe, Asia and North Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Asio_otus_distribution_map.png/220px-Asio_otus_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/97/Waldohreule_in_freier_Wildbahn.jpg",
        },
        {
          commonNameEnglish: "Short-eared Owl",
          commonNameJapanese: "コミミズク",
          commonNameRomaji: "komimizuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Asio flammeus",
          range: "North America, Europe, n Asia and North Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Sumpfohreule-Asio_flammeus-World.png/220px-Sumpfohreule-Asio_flammeus-World.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Short_Eared_Owl_on_the_Ground.jpg/1024px-Short_Eared_Owl_on_the_Ground.jpg",
        },
        {
          commonNameEnglish: "Northern Boobook",
          commonNameJapanese: "アオバズク",
          commonNameRomaji: "aobazuku",
          order: "Strigiformes",
          family: "Strigidae",
          species: "Ninox japonica",
          range:
            "SE Siberia to se Manchuria, e China, Korea, Japan, Ryukyu Islands and Taiwan; winters S Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/2/29/Ninox_japonica%2C_Japan.jpg",
        },
        {
          commonNameEnglish: "Eastern or Australian Osprey",
          commonNameJapanese: "ミサゴ",
          commonNameRomaji: "misago",
          order: "Accipitriformes",
          family: "Pandionidae",
          species: "Pandion haliaetus",
          range: "Palearctic; winters to South Africa, India and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wild_Pandion.jpg/1280px-Wild_Pandion.jpg",
        },
        {
          commonNameEnglish: "Oriental Honey-buzzard",
          commonNameJapanese: "ハチクマ",
          commonNameRomaji: "hachikuma",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Pernis ptilorhynchus orientalis",
          range: "S Siberia to Manchuria and Japan; winters to Greater Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0f/Oriental_Honey_Buzzard_%28Pernis_ptilorhynchus%29_Photograph_By_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Crested or Small Serpent-Eagle",
          commonNameJapanese: "カンムリワシ",
          commonNameRomaji: "hachikuma",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Spilornis perplexus",
          range: "S Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/37/Spilornis_cheela_%28Bandipur%2C_2008%29.jpg",
        },
        {
          commonNameEnglish: "Mountain Hawk-Eagle",
          commonNameJapanese: "クマタカ",
          commonNameRomaji: "kumataka",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Nisaetus nipalensis orientalis",
          range: "Japan",
          profilePic:
            "https://en.wikipedia.org/wiki/Mountain_hawk-eagle#/media/File:Mountain_Hawk_Eagle_Mahananda_WLS_West_Bengal_India_07.12.2015.jpg",
        },
        {
          commonNameEnglish: "Grey-faced Buzzard",
          commonNameJapanese: "サシバ",
          commonNameRomaji: "sashiba",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Butastur indicus",
          range: "NE Asia; winters SE Asia to Philippines and Indonesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/32/Butastur_indicus.jpg",
        },
        {
          commonNameEnglish: "Eastern Marsh-Harrier",
          commonNameJapanese: "チュウヒ",
          commonNameRomaji: "chuuhi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Circus spilonotus",
          range: "E Asia; winters to SE Asia, Philippines and Indonesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/Circus_spilotonus.jpg",
        },
        {
          commonNameEnglish: "Hen Harrier",
          commonNameJapanese: "ハイイロチュウヒ",
          commonNameRomaji: "haiirochuuhi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Circus cyaneus",
          range: "Widespread Eurasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Circus_cyaneus_distribution_map.png/220px-Circus_cyaneus_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/bf/Circus_cyaneus%2C_Ballaugh_Curragh%2C_Isle_of_Man_1.jpg",
        },
        {
          commonNameEnglish: "Japanese Sparrowhawk",
          commonNameJapanese: "ツミ",
          commonNameRomaji: "tsumi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Accipiter gularis",
          range:
            "Sakhalin, Kuril Is. and Japan; winters to Philippines and Indonesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/20100710_tumi_nagoya_03.jpg",
        },
        {
          commonNameEnglish: "Northern Goshawk",
          commonNameJapanese: "オオタカ",
          commonNameRomaji: "ootaka",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Accipiter gentilis fujiyamae",
          range: "Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/AccipiterGentilis.png/220px-AccipiterGentilis.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/81/Northern_Goshawk_ad_M2.jpg",
        },
        {
          commonNameEnglish: "Steller's Sea-Eagle",
          commonNameJapanese: "オオワシ",
          commonNameRomaji: "oowashi",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Haliaeetus pelagicus",
          range:
            "Coastal e Siberia; winters to China, Korea, Japan and Ryukyu Is.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Haliaeetus_pelagicus_distr.png/220px-Haliaeetus_pelagicus_distr.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Adult_Steller%27s_sea_eagle_fishing.jpg/1920px-Adult_Steller%27s_sea_eagle_fishing.jpg",
        },
        {
          commonNameEnglish: "Rough-legged Hawk",
          commonNameJapanese: "ケアシノスリ",
          commonNameRomaji: "keashinosuri",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Buteo lagopus menzbieri",
          range: "NE Asia; winters to central Asia, n China and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Buteo_lagopus_distribution_map.png/220px-Buteo_lagopus_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Buteo_lagopus_29283.JPG/800px-Buteo_lagopus_29283.JPG",
        },
        {
          commonNameEnglish: "Eastern Buzzard",
          commonNameJapanese: "ノスリ",
          commonNameRomaji: "nosuri",
          order: "Accipitriformes",
          family: "Accipitridae",
          species: "Buteo japonicus",
          range:
            "breeds from central Siberia east to Japan, northern Korea, and perhaps northeastern China; winters Japan and Korea south to southeast Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Buteo_japonicus1.jpg/1024px-Buteo_japonicus1.jpg",
        },
        {
          commonNameEnglish: "Eurasian Jay",
          commonNameJapanese: "カケス",
          commonNameRomaji: "kakesu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Garrulus glandarius japonicus",
          range: "Japan (Honshu, Shikoku, northern Kyushu, and Tsushima)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Garrulus_glandarius_distribution.jpg/220px-Garrulus_glandarius_distribution.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Eurasian_jay_YerevanBotanic2020.jpg/1280px-Eurasian_jay_YerevanBotanic2020.jpg",
        },
        {
          commonNameEnglish: "Lidth's Jay",
          commonNameJapanese: "ルリカケス",
          commonNameRomaji: "rurikakesu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Garrulus lidthi",
          range: "Ryukyu Islands (Amami-O-Shima and Tokuno-Shima)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Garrulus_lidthi_Ueno_2013-10-06.jpg/1280px-Garrulus_lidthi_Ueno_2013-10-06.jpg",
        },
        {
          commonNameEnglish: "Azure-winged Magpie",
          commonNameJapanese: "オナガ",
          commonNameRomaji: "onaga",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Cyanopica cyanus japonica",
          range: "Japan (Honshu and Kyushu)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cyanopica_cyanus_distribution.png/220px-Cyanopica_cyanus_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/30/2011_Blauelster_in_Shanghai.jpg",
        },
        {
          commonNameEnglish: "Spotted Nutcracker",
          commonNameJapanese: "ホシガラス",
          commonNameRomaji: "hoshigarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Nucifraga caryocatactes japonica",
          range: "Central and s Kuril Islands, Hokkaido and Honshu",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Map_of_distribution_of_Nucifraga_caryocatactes.png/220px-Map_of_distribution_of_Nucifraga_caryocatactes.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Orzech%C3%B3wka_zwyczajna_nad_Morskim_Okiem.jpg/1024px-Orzech%C3%B3wka_zwyczajna_nad_Morskim_Okiem.jpg",
        },
        {
          commonNameEnglish: "Rook",
          commonNameJapanese: "ミヤマガラス",
          commonNameRomaji: "miyamagarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Corvus frugilegus pastinator",
          range: "E Asia; > to Korea, Japan and se China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rook_range_map.PNG/220px-Rook_range_map.PNG",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0f/Corvus_frugilegus-profile.jpg",
        },
        {
          commonNameEnglish: "Carrion Crow",
          commonNameJapanese: "ハシボソガラス",
          commonNameRomaji: "hashibosogarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Corvus corone orientalis",
          range: "Iran to n China, Korea and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Carrion_Crow_Range.png/240px-Carrion_Crow_Range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg",
        },
        {
          commonNameEnglish: "Common Raven",
          commonNameJapanese: "ワタリガラス",
          commonNameRomaji: "watarigarasu",
          order: "Passeriformes",
          family: "Corvidae",
          species: "Corvus corax kamtschaticus",
          range:
            "Siberia to Sea of Okhotsk, Sakhalin, Kuril Islands and n Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Corvus_corax_map.jpg/220px-Corvus_corax_map.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Corvus_corax_kamtschaticus%2C_nortern_Mongolia.JPG/1280px-Corvus_corax_kamtschaticus%2C_nortern_Mongolia.JPG",
        },
        {
          commonNameEnglish: "Greater White-fronted Goose",
          commonNameJapanese: "マガン",
          commonNameRomaji: "magan",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anser albifrons",
          range:
            "breeds in northern Russia, east to northeastern Siberia; winters in Europe east to southern Asia, south to northern India, southern China, and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Anser_albifrons_map.png/1280px-Anser_albifrons_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Greater_white-fronted_goose_%28cropped%29.jpg/1280px-Greater_white-fronted_goose_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Taiga Bean Goose",
          commonNameJapanese: "ニシヒシクイ",
          commonNameRomaji: "nishihishikui",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anser fabalis",
          range: "Taiga of e Siberia (east of Lake Baikal)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/AnserFabalisIUCNver2019_1.png/1280px-AnserFabalisIUCNver2019_1.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Bean.goose.600pix.jpg",
        },
        {
          commonNameEnglish: "Tundra Bean Goose",
          commonNameJapanese: "ヒシクイ",
          commonNameRomaji: "hishikui",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anser serrirostris",
          range: "Tundra of ne Siberia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Tundra_Bean_Goose.jpg",
        },
        {
          commonNameEnglish: "Black Brant",
          commonNameJapanese: "コクガン",
          commonNameRomaji: "kokugan",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Branta nigricans",
          range:
            "breeds northeastern Siberia, western and northern Alaska, and northwestern Canada; winters from from Japan to Korea and northeastern China, and from Alaska to northwestern Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Brant_Goose_Range.png/1280px-Brant_Goose_Range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brent_Goose.jpg/1280px-Brent_Goose.jpg",
        },
        {
          commonNameEnglish: "Cackling Goose",
          commonNameJapanese: "シジュウガラガン",
          commonNameRomaji: "shijuu karagan",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Branta hutchinsii asiatica",
          range:
            "Locally in Aleutians and Semdi Is., Alaska (formerly bred from Kuril Is. and Commander Is. east to near Kodiak I.); winters Oregon, California",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Branta_hutchinsii_map.svg/1280px-Branta_hutchinsii_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/AleutianCanadaGoose2.jpg",
        },
        {
          commonNameEnglish: "Tundra Swan",
          commonNameJapanese: "コハクチョウ",
          commonNameRomaji: "kohakuchou",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Cygnus bewickii",
          range:
            "Kola Peninsula to arctic n Siberia; winters w Europe to s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Cygnus_columbianus_map.svg/1280px-Cygnus_columbianus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cygnus_bewickii_01.jpg/1280px-Cygnus_bewickii_01.jpg",
        },
        {
          commonNameEnglish: "Whooper Swan",
          commonNameJapanese: "オオハクチョウ",
          commonNameRomaji: "oohakuchou",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Cygnus cygnus",
          range: "Palearctic; winters to India and se China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/Cygnus-cygnus.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cygnus_cygnus_Singschwan.jpg/1024px-Cygnus_cygnus_Singschwan.jpg",
        },
        {
          commonNameEnglish: "Common Shelduck",
          commonNameJapanese: "ツクシガモ",
          commonNameRomaji: "tsukushigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Tadorna tadorna",
          range: "Palearctic region; winters to Near East, India and Myanmar",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/TadornaTadornaIUCN.png/1280px-TadornaTadornaIUCN.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Common_Shelduck_%28Tadorna_tadorna%29_at_Sylvan_Heights.jpg/1280px-Common_Shelduck_%28Tadorna_tadorna%29_at_Sylvan_Heights.jpg",
        },
        {
          commonNameEnglish: "Baikal Teal",
          commonNameJapanese: "トモエガモ",
          commonNameRomaji: "tomoegamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Sibirionetta formosa",
          range:
            "breeds in northern and eastern Siberia; winters Japan, Korea, and eastern China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/SibirionettaFormosaIUCN2019-2.png/1280px-SibirionettaFormosaIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Anas.formosa.4.jpg",
        },
        {
          commonNameEnglish: "Garganey",
          commonNameJapanese: "シマアジ",
          commonNameRomaji: "shimaaji",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Spatula querquedula",
          range: "Palearctic; winters to s Africa and Australasian region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spatula_querquedula_map.svg/1280px-Spatula_querquedula_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Garganey_%28Anas_querquedula%29_RWD3.jpg/1280px-Garganey_%28Anas_querquedula%29_RWD3.jpg",
        },
        {
          commonNameEnglish: "Northern Shoveler",
          commonNameJapanese: "ハシビロガモ",
          commonNameRomaji: "hashibirogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Spatula clypeata",
          range:
            "Holarctic; winters to Africa, n South America and Malay Arch.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/SpatulaClypeata.png/1280px-SpatulaClypeata.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Northern_shoveler_Steve_Sinclair_outreach_use_only_%2819838806616%29.jpg/1280px-Northern_shoveler_Steve_Sinclair_outreach_use_only_%2819838806616%29.jpg",
        },
        {
          commonNameEnglish: "Gadwall",
          commonNameJapanese: "オカヨシガモ",
          commonNameRomaji: "okayoshigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mareca strepera",
          range: "Widespread Palearctic and Nearctic regions",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mareca_strepera_map.svg/1280px-Mareca_strepera_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gadwall-Anas-strepera.jpg/1280px-Gadwall-Anas-strepera.jpg",
        },
        {
          commonNameEnglish: "Falcated Duck",
          commonNameJapanese: "ヨシガモ",
          commonNameRomaji: "yoshigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mareca falcata",
          range: "E Siberia and Mongolia to n Japan; winters to India",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Falcated_duck_1.jpg/1280px-Falcated_duck_1.jpg",
        },
        {
          commonNameEnglish: "Eurasian Wigeon",
          commonNameJapanese: "ヒドリガモ",
          commonNameRomaji: "hidorigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mareca penelope",
          range: "N and central Eurasia; winters to Africa and s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mareca_penelope_map.svg/1280px-Mareca_penelope_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Mareca_penelope_kuribo_cropped.jpg",
        },
        {
          commonNameEnglish: "Eastern Spot-billed Duck",
          commonNameJapanese: "カルガモ",
          commonNameRomaji: "karugamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas zonorhyncha",
          range: "Breeds ne Asia; winters to s China, Taiwan and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Anas_zonorhyncha_swimming.jpg/1280px-Anas_zonorhyncha_swimming.jpg",
        },
        {
          commonNameEnglish: "Mallard",
          commonNameJapanese: "マガモ",
          commonNameRomaji: "magamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas platyrhynchos",
          range: "Holarctic; winters to Mexico, North Africa, India and Borneo",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/AnasPlatyrhynchosIUCN2019_2.png/1280px-AnasPlatyrhynchosIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/1024px-Anas_platyrhynchos_male_female_quadrat.jpg",
        },
        {
          commonNameEnglish: "Northern Pintail",
          commonNameJapanese: "オナガガモ",
          commonNameRomaji: "onagagamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas acuta",
          range:
            "Palearctic and N America; winters to s Eurasia and n S America",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/AnasAcutaIUCN2019_2.png/1280px-AnasAcutaIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Northern_Pintails_%28Male_%26_Female%29_I_IMG_0911.jpg",
        },
        {
          commonNameEnglish: "Eurasian Teal",
          commonNameJapanese: "コガモ",
          commonNameRomaji: "kogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Anas crecca",
          range:
            "breeds in Palearctic and the Aleutian Islands; winters from southern and central Europe east to Japan, south to Africa, south Asia, and southeast Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/e/e2/Anas_crecca_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Eurasian_teal_%28Anas_crecca%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Common Pochard",
          commonNameJapanese: "ホシハジロ",
          commonNameRomaji: "hoshihajiro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya ferina",
          range: "Palearctic; winters to tropical Africa, India and SE Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AythyaFerinaIUCNver2018_2.png/1280px-AythyaFerinaIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Aythya_ferina_Sandwell_2.jpg/1280px-Aythya_ferina_Sandwell_2.jpg",
        },
        {
          commonNameEnglish: "Baer's Pochard",
          commonNameJapanese: "アカハジロ",
          commonNameRomaji: "akahajiro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya baeri",
          range: "NE Eurasia; winters to India, SE Asia and se China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Aythya_baeri_map_BirdLife.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b7/Baer%27s_Pochard_RWD4.jpg",
        },
        {
          commonNameEnglish: "Tufted Duck",
          commonNameJapanese: "キンクロハジロ",
          commonNameRomaji: "kinkurohajiro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya fuligula",
          range: "N Palearctic region; winters to n Africa and s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tufted_Duck_Range.png/1280px-Tufted_Duck_Range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tufted-Duck-male-female.jpg/800px-Tufted-Duck-male-female.jpg",
        },
        {
          commonNameEnglish: "Greater Scaup",
          commonNameJapanese: "スズガモ",
          commonNameRomaji: "suzugamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Aythya marila",
          range:
            "breeds in northern Eurasia; winters to the Mediterranean region, India, Japan, Korea, and China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/d/df/The_GS_range_map.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Greater-scaup-male2.jpg/1280px-Greater-scaup-male2.jpg",
        },
        {
          commonNameEnglish: "Steller's Eider",
          commonNameJapanese: "コケワタガモ",
          commonNameRomaji: "kokewatagamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Polysticta stelleri",
          range: "Arctic Siberia (Taymyr Peninsula) east to n Alaska",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Polysticta_stelleri_range_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Steller%27s_Eider_%28Polysticta_stelleri%29_%2813667966664%29.jpg/1280px-Steller%27s_Eider_%28Polysticta_stelleri%29_%2813667966664%29.jpg",
        },
        {
          commonNameEnglish: "Harlequin Duck",
          commonNameJapanese: "シノリガモ",
          commonNameRomaji: "shinorigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Histrionicus histrionicus",
          range:
            "breeds E Siberia northern Japan, Alaska south to Oregon and Wyoming, E Canada, Greenland, and Iceland; winters coastally from Siberia to Japan and Korea, Alaska to central California, NE United States, S Greenland, and Iceland",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Histrionicus_histrionicus_map.svg/1280px-Histrionicus_histrionicus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Histrionicus_histrionicus_drake_Barnegat.jpg/1280px-Histrionicus_histrionicus_drake_Barnegat.jpg",
        },
        {
          commonNameEnglish: "Siberian Scoter",
          commonNameJapanese: "ヨーロッパビロードキンクロ",
          commonNameRomaji: "yooroppa biroodokinkuro",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Melanitta stejnegeri",
          range: "Breeds ne Asia; winters coastal e Asia to Japan and China",
        },
        {
          commonNameEnglish: "Black Scoter",
          commonNameJapanese: "クロガモ",
          commonNameRomaji: "kurogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Melanitta americana",
          range: "Breeds n Siberia to Alaska; winters to n US",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Melanitta_americana_map.svg/1280px-Melanitta_americana_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Melanitta_americana_Barnegat_NJ.jpg/1280px-Melanitta_americana_Barnegat_NJ.jpg",
        },
        {
          commonNameEnglish: "Long-tailed Duck",
          commonNameJapanese: "コオリガモ",
          commonNameRomaji: "koorigamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Clangula hyemalis",
          range: "Coasts of Holarctic region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Clangula_hyemalis_map.svg/1280px-Clangula_hyemalis_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/8e/Long-tailed-duck.jpg",
        },
        {
          commonNameEnglish: "Common Goldeneye",
          commonNameJapanese: "ホオジロガモ",
          commonNameRomaji: "hoojirogamo",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Bucephala clangula",
          range:
            "N Eurasia; winters to Mediterranean, Persian Gulf and s China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bucephala_clangula_map.svg/1280px-Bucephala_clangula_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Common_Goldeneye_%28Bucephala_clangula%29.jpg",
        },
        {
          commonNameEnglish: "Smew",
          commonNameJapanese: "ミコアイサ",
          commonNameRomaji: "mikoaisa",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mergellus albellus",
          range: "N Eurasia; winters to North Africa, India and e China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MergellusAlbellusIUCNver2018_2.png/1280px-MergellusAlbellusIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Zwergsaeger_maenchen_weibchen.jpg/800px-Zwergsaeger_maenchen_weibchen.jpg",
        },
        {
          commonNameEnglish: "Common Merganser",
          commonNameJapanese: "カワアイサ",
          commonNameRomaji: "kawaaisa",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mergus merganser",
          range:
            "Palearctic region; winters Mediterranean to n India and China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/MergusMerganserIUCNver2019-2.png/1280px-MergusMerganserIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mergus_merganser_-Sandwell_-England_-male-8.jpg/1280px-Mergus_merganser_-Sandwell_-England_-male-8.jpg",
        },
        {
          commonNameEnglish: "Red-breasted Merganser",
          commonNameJapanese: "ウミアイサ",
          commonNameRomaji: "umiaisa",
          order: "Anseriformes",
          family: "Anatidae",
          species: "Mergus serrator",
          range:
            "N Palearctic and n N America; winters s Palearctic and Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/MergusSerratorIUCN2018_2.png/1280px-MergusSerratorIUCN2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mergus_serrator_-New_Jersey_-USA_-winter-8.jpg/1280px-Mergus_serrator_-New_Jersey_-USA_-winter-8.jpg",
        },
        {
          commonNameEnglish: "Japanese Quail",
          commonNameJapanese: "ウズラ",
          commonNameRomaji: "uzura",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Coturnix japonica",
          range: "E Palearctic; winters to SE Asia and e China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Japanese_Quail.jpg/800px-Japanese_Quail.jpg",
        },
        {
          commonNameEnglish: "Copper Pheasant",
          commonNameJapanese: "コウライキジ",
          commonNameRomaji: "kouraikiji",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Phasianus versicolor tanensis",
          range: "Japan (central Honshu) and Izu Islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Phasianus_colchicus_map.svg/1280px-Phasianus_colchicus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/7/79/Male_and_female_pheasant.jpg",
        },
        {
          commonNameEnglish: "Hazel Grouse",
          commonNameJapanese: "エゾライチョウ",
          commonNameRomaji: "ezoraichou",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Tetrastes bonasia vicinitas",
          range: "Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/c/c4/Tetrastes_bonasia_distribution_revise_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Tetrastes_bonasia.jpg",
        },
        {
          commonNameEnglish: "Rock Ptarmigan",
          commonNameJapanese: "ライチョウ",
          commonNameRomaji: "raichou",
          order: "Galliformes",
          family: "Phasianidae",
          species: "Lagopus muta japonica",
          range: "Honshu",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/1/12/Rock_Ptarmigan_Lagopus_muta_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rock_Ptarmigan_%28Lagopus_Muta%29.jpg/1280px-Rock_Ptarmigan_%28Lagopus_Muta%29.jpg",
        },
        {
          commonNameEnglish: "Little Grebe",
          commonNameJapanese: "カイツブリ",
          commonNameRomaji: "kaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Tachybaptus ruficollis poggei",
          range: "SE to ne Asia, Hainan, Taiwan, Japan and s Kuril Islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/TachybaptusRuficollisIUCN2019-2.png/1280px-TachybaptusRuficollisIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Little_grebe_Zwergtaucher.jpg/1280px-Little_grebe_Zwergtaucher.jpg",
        },
        {
          commonNameEnglish: "Horned Grebe",
          commonNameJapanese: "ミミカイツブリ",
          commonNameRomaji: "mimikaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps auritus",
          range: "Locally in Palearctic region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Slavonian_Grebe-location-map-en.svg/1280px-Slavonian_Grebe-location-map-en.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Horned_grebe_%282%29_-_%28Podiceps_auritus%29.JPG/1280px-Horned_grebe_%282%29_-_%28Podiceps_auritus%29.JPG",
        },
        {
          commonNameEnglish: "Red-necked Grebe",
          commonNameJapanese: "アカエリカイツブリ",
          commonNameRomaji: "akaerikaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps grisegena holbollii",
          range: "North America and ne Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/PodicepsGrisegenaIUCNver2019-2.png/1920px-PodicepsGrisegenaIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Gr%C3%A8bejougrisparade.jpg/800px-Gr%C3%A8bejougrisparade.jpg",
        },
        {
          commonNameEnglish: "Great Crested Grebe",
          commonNameJapanese: "カンムリカイツブリ",
          commonNameRomaji: "kanmurikaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps cristatus",
          range: "Palearctic region and s Oriental region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/PodicepsCristatusIUCN2019-2.png/1280px-PodicepsCristatusIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Great_Crested_Grebe_1_-_Penrith.jpg/1920px-Great_Crested_Grebe_1_-_Penrith.jpg",
        },
        {
          commonNameEnglish: "Black-necked Grebe",
          commonNameJapanese: "ハジロカイツブリ",
          commonNameRomaji: "hajirokaitsuburi",
          order: "Podicipediformes",
          family: "Podicipedidae",
          species: "Podiceps nigricollis",
          range: "Locally in Eurasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/PodicepsNigricollisIUCNver2019-2.png/1920px-PodicepsNigricollisIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Black-necked_Grebe_Schwarzhalstaucher.jpg/1920px-Black-necked_Grebe_Schwarzhalstaucher.jpg",
        },
        {
          commonNameEnglish: "Japanese Wood Pigeon",
          commonNameJapanese: "カラスバト",
          commonNameRomaji: "karasubato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Columba janthina",
          range:
            "Small islands sw of South Korea to Ryukyu Islands; Ogasawara (Bonin Islands) and Iwo (Volcano Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Columba_janthina.JPG/1280px-Columba_janthina.JPG",
        },
        {
          commonNameEnglish: "Oriental Turtle-Dove",
          commonNameJapanese: "キジバト",
          commonNameRomaji: "kijibato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Streptopelia orientalis",
          range:
            "Central Siberia to China, Korea, Japan and Kuril Islands; Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Orientalturtledove.JPG/1920px-Orientalturtledove.JPG",
        },
        {
          commonNameEnglish: "Eurasian Collared-Dove",
          commonNameJapanese: "シラコバト",
          commonNameRomaji: "shirakobato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Streptopelia decaocto",
          range: "Europe to Middle East, India, Sri Lanka, w China and Korea.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Streptopelia_decaocto_range_map.png/1920px-Streptopelia_decaocto_range_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Eurasian_collared-dove_%28Streptopelia_decaocto%29.jpg/800px-Eurasian_collared-dove_%28Streptopelia_decaocto%29.jpg",
        },
        {
          commonNameEnglish: "Emerald Dove",
          commonNameJapanese: "キンバト",
          commonNameRomaji: "kinbato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Chalcophaps indica",
          range:
            "India to southeastern China, south to the Philippines, Indonesia and western Papuan islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Chalcophaps_indica_-a_pair_in_captivity-8a.jpg/1280px-Chalcophaps_indica_-a_pair_in_captivity-8a.jpg",
        },
        {
          commonNameEnglish: "White-bellied Green-Pigeon",
          commonNameJapanese: "アオバト",
          commonNameRomaji: "aobato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Treron sieboldii",
          range: "Japan, mountains of Taiwan and e China (Jiangsu and Fujian)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Treron_Sieboldii.jpg/1280px-Treron_Sieboldii.jpg",
        },
        {
          commonNameEnglish: "Whistling Green-Pigeon",
          commonNameJapanese: "ズアカアオバト",
          commonNameRomaji: "zuakaaobato",
          order: "Columbiformes",
          family: "Columbidae",
          species: "Treron formosae",
          range: "Ryukyu Islands",
          profilePic:
            "https://farm8.staticflickr.com/7343/14158900014_23b46c143e_n.jpg",
        },
        {
          commonNameEnglish: "Northern Hawk-Cuckoo",
          commonNameJapanese: "キタジュウイチ",
          commonNameRomaji: "kitajuuichi",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Hierococcyx hyperythrus",
          range: "NE China to Korea, lower Yangtze Valley and s Japan",
          profilePic:
            "https://live.staticflickr.com/2338/2214115656_616f654144_n.jpg",
        },
        {
          commonNameEnglish: "Lesser Cuckoo",
          commonNameJapanese: "ホトトギス",
          commonNameRomaji: "hototogisu",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Cuculus poliocephalus",
          range:
            "South and east Asia; winters pen. India, Sri Lanka and e Africa",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/48/Cuculus_poliocephalus.jpg",
        },
        {
          commonNameEnglish: "Common Cuckoo",
          commonNameJapanese: "カッコウ",
          commonNameRomaji: "kakkou",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Cuculus canorus",
          range: "Europe, Siberia to Kamchatka and Japan; winters to s Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/CuculusCanorusIUCNver2019_3.png/1280px-CuculusCanorusIUCNver2019_3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/14/Cuculus_canorus_vogelartinfo_chris_romeiks_CHR0791_cropped.jpg",
        },
        {
          commonNameEnglish: "Oriental Cuckoo",
          commonNameJapanese: "ツツドリ",
          commonNameRomaji: "tsutsudori",
          order: "Cuculiformes",
          family: "Cuculidae",
          species: "Cuculus optatus",
          range:
            "Russia to Siberia, n China, Korea, Japan; winters to Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Oriental_Cuckoo_Maiala.JPG",
        },
        {
          commonNameEnglish: "Grey Nightjar",
          commonNameJapanese: "ヨタカ",
          commonNameRomaji: "yotaka",
          order: "Caprimulgiformes",
          family: "Caprimulgidae",
          species: "Caprimulgus jotaka",
          range:
            "SE Siberia to e China, Japan and Korea; winters to Gr. Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Grey_Nightjar.jpg",
        },
        {
          commonNameEnglish: "White-throated Needletail",
          commonNameJapanese: "ハリオアマツバメ",
          commonNameRomaji: "harioamatsubame",
          order: "Apodiformes",
          family: "Apodidae",
          species: "Hirundapus caudacutus",
          range: "Siberia to Japan and Kuril Islands.; winters to Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HirundapusCaudacutusDistribution.png/1024px-HirundapusCaudacutusDistribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/44/White-throated_needletail_Hunting_over_Wolotschajewka_Perwaja_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Pacific Swift",
          commonNameJapanese: "アマツバメ",
          commonNameRomaji: "amatsubame",
          order: "Apodiformes",
          family: "Apodidae",
          species: "Apus pacificus",
          range:
            "Siberia to Kamchatka, n China and n Japan; winters Indonesia, Melanesia, Australia, Tasmania",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Apuspacificuspacificus.png/800px-Apuspacificuspacificus.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pacific_Swift.jpg/1280px-Pacific_Swift.jpg",
        },
        {
          commonNameEnglish: "House Swift",
          commonNameJapanese: "ヒメアマツバメ",
          commonNameRomaji: "himeamatsubame",
          order: "Apodiformes",
          family: "Apodidae",
          species: "Apus nipalensis",
          range: "Nepal to se China, Myanmar, Thailand, Indochina, Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/8d/House_Swift.jpg",
        },
        {
          commonNameEnglish: "Brown-cheeked Rail",
          commonNameJapanese: "クイナ",
          commonNameRomaji: "kuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Rallus indicus",
          range: "E Siberia to Japan; winters to SE Asia and Borneo",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Rallus_indicus_distribution_map.svg/800px-Rallus_indicus_distribution_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/The_brown-cheeked_rail_or_eastern_water_rail.jpg/1280px-The_brown-cheeked_rail_or_eastern_water_rail.jpg",
        },
        {
          commonNameEnglish: "Okinawa Rail",
          commonNameJapanese: "ヤンバルクイナ",
          commonNameRomaji: "yanbarukuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Hypotaenidia okinawae",
          range: "Swamps of n Okinawa I. (s Ryukyu Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Okinawa_Rail.jpg",
        },
        {
          commonNameEnglish: "Common Moorhen",
          commonNameJapanese: "バン",
          commonNameRomaji: "ban",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Gallinula chloropus",
          range: "Palearctic; winters to Arabia and s China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/GallinulaChloropusIUCNver2019-2.png/1280px-GallinulaChloropusIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/Common_moorhen_%28Gallinula_chloropus%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Eurasian Coot",
          commonNameJapanese: "オオバン",
          commonNameRomaji: "ooban",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Fulica atra",
          range: "Palearctic; winters to Africa, Indonesia and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/FulicaAtraIUCN2019_2.png/1280px-FulicaAtraIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Fulica_atra%2C_Bl%C3%A4sshuhn_am_Adenauer-Weiher.jpg/1280px-Fulica_atra%2C_Bl%C3%A4sshuhn_am_Adenauer-Weiher.jpg",
        },
        {
          commonNameEnglish: "Watercock",
          commonNameJapanese: "ツルクイナ",
          commonNameRomaji: "tsurukuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Gallicrex cinerea",
          range: "Lowlands of s and e Asia and Malay Archipelago",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gallicrex_cinerea_-Basai_Wetlands%2C_near_Gurgaon%2C_Haryana%2C_India-8.jpg",
        },
        {
          commonNameEnglish: "Slaty-legged Crake",
          commonNameJapanese: "オオクイナ",
          commonNameRomaji: "ookuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Rallina eurizonoides sepiaria",
          range: "Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Slaty-legged_crake_%28Rallina_eurizonoides%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Ruddy-breasted Crake",
          commonNameJapanese: "ヒクイナ",
          commonNameRomaji: "hikuina",
          order: "Gruiformes",
          family: "Rallidae",
          species: "Zapornia fusca",
          range:
            "Ryukyu Islands, Japan, e China, Manchuria, Indochina and Taiwan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Ruddy-breasted_Crake_%28Porzana_fusca%29_in_Kolkata_I_IMG_2675.jpg",
        },
        {
          commonNameEnglish: "White-naped Crane",
          commonNameJapanese: "マナヅル",
          commonNameRomaji: "manazuru",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Antigone vipio",
          range: "Siberia and Manchuria; winters to s China, Korea and Japan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/White-naped_Crane_at_Saijyo_Ehime2.jpg/800px-White-naped_Crane_at_Saijyo_Ehime2.jpg",
        },
        {
          commonNameEnglish: "Common Crane",
          commonNameJapanese: "クロヅル",
          commonNameRomaji: "kurozuru",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Grus grus",
          range: "Breeds n Eurasia; winters to n Africa, s India and SE Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/6/60/Distribuci%C3%B3n_grullas.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Common_crane_grus_grus.jpg/1024px-Common_crane_grus_grus.jpg",
        },
        {
          commonNameEnglish: "Hooded Crane",
          commonNameJapanese: "ナベヅル",
          commonNameRomaji: "nabezuru",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Grus monacha",
          range:
            "Siberia and nw Manchuria; winters to e China, Korea, and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Grus_monacha_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg/1280px-Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg",
        },
        {
          commonNameEnglish: "Red-crowned Crane",
          commonNameJapanese: "タンチョウ",
          commonNameRomaji: "tanchou",
          order: "Gruiformes",
          family: "Gruidae",
          species: "Grus japonensis",
          range: "Siberia, Hokkaido and Mongolia; winters e China and Korea",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg/1280px-Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg",
        },
        {
          commonNameEnglish: "Black-winged Stilt",
          commonNameJapanese: "セイタカシギ",
          commonNameRomaji: "seitakashigi",
          order: "Charadriiformes",
          family: "Recurvirostridae",
          species: "Himantopus himantopus",
          range: "Mediterranean and sub-Saharan Africa to SE Asia and Taiwan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/HimantopusHimantopusIUCN2019-3.png/1280px-HimantopusHimantopusIUCN2019-3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Black-winged_stilt_%28Himantopus_himantopus%29.jpg/1280px-Black-winged_stilt_%28Himantopus_himantopus%29.jpg",
        },
        {
          commonNameEnglish: "Eurasian Oystercatcher",
          commonNameJapanese: "ミヤコドリ",
          commonNameRomaji: "miyakodori",
          order: "Charadriiformes",
          family: "Haematopodidae",
          species: "Haematopus ostralegus osculans",
          range: "Kamchatka Peninsula and North Korea; winters e China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/d/dd/Haematopus_ostralegus_distr.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Haematopus_ostralegus_Norway.jpg/699px-Haematopus_ostralegus_Norway.jpg",
        },
        {
          commonNameEnglish: "Grey Plover",
          commonNameJapanese: "ダイゼン",
          commonNameRomaji: "daizen",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Pluvialis squatarola",
          range: "Holarctic; almost cosmopolitan post-breeding dispersal",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Pluvialis_squatarola_map.svg/1280px-Pluvialis_squatarola_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pluvialis_squatarola_%28summer_plumage%29.jpg/1280px-Pluvialis_squatarola_%28summer_plumage%29.jpg",
        },
        {
          commonNameEnglish: "Pacific Golden-Plover",
          commonNameJapanese: "ムナグロ",
          commonNameRomaji: "munaguro",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Pluvialis fulva",
          range:
            "breeds Siberia and W Alaska; winters from E Africa to S Asia (E to S China) and the Hawaiian Islands, S through Asia and the tropical Paficic to Australia and New Zealand",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/PluvialisFulvaIUCNver2018_2.png/1280px-PluvialisFulvaIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pluvialis_fulva_-Bering_Land_Bridge_National_Preserve%2C_Alaska%2C_USA-8.jpg",
        },
        {
          commonNameEnglish: "Northern Lapwing",
          commonNameJapanese: "タゲリ",
          commonNameRomaji: "tageri",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Vanellus vanellus",
          range: "Palearctic; winters to n Africa, India, Myanmar and s China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Northern_Lapwing.png/1280px-Northern_Lapwing.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Northern-Lapwing-Vanellus-vanellus.jpg/1280px-Northern-Lapwing-Vanellus-vanellus.jpg",
        },
        {
          commonNameEnglish: "Grey-headed Lapwing",
          commonNameJapanese: "ケリ",
          commonNameRomaji: "keri",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Vanellus cinereus",
          range: "Breeds ne China and Japan; winters to India and SE Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Vanellus_cinereus.JPG/1024px-Vanellus_cinereus.JPG",
        },
        {
          commonNameEnglish: "Lesser Sand-Plover",
          commonNameJapanese: "メダイチドリ",
          commonNameRomaji: "medaichidori",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Charadrius mongolus",
          range: "E Siberia and Russian Far East; winters Taiwan to Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Charadrius_mongolus_-_Laem_Phak_Bia.jpg/1280px-Charadrius_mongolus_-_Laem_Phak_Bia.jpg",
        },
        {
          commonNameEnglish: "Greater Sand Plover",
          commonNameJapanese: "オオメダイチドリ",
          commonNameRomaji: "oomedaichidori",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Charadrius leschenaultii",
          range: "W China to s Mongolia and s Siberia; winters Australasia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Greater_Sand_Plover_1_-_Lee_Point.jpg/1280px-Greater_Sand_Plover_1_-_Lee_Point.jpg",
        },
        {
          commonNameEnglish: "Kentish Plover",
          commonNameJapanese: "シロチドリ",
          commonNameRomaji: "shirochidori",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Charadrius alexandrinus",
          range:
            "breeds W Palearctic to E China, S Japan, and Ryukyu Islands; winters to Africa, S Asia, the Philippines, Indonesia, and Borneo",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/CharadriusAlexandrinusIUCNver2018_2.png/1280px-CharadriusAlexandrinusIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Kentish_plover_%28Charadrius_alexandrinus%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Common Ringed Plover",
          commonNameJapanese: "ハジロコチドリ",
          commonNameRomaji: "hajirokochidori",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Charadrius hiaticula",
          range:
            "breeds NE arctic Canada, Greenland, Iceland, Spitsbergen, and S Scandanavia south to France; primarily winters W Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Charadrius_hiaticula_map.svg/1280px-Charadrius_hiaticula_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Charadrius_hiaticula_tundrae_Varanger.jpg/800px-Charadrius_hiaticula_tundrae_Varanger.jpg",
        },
        {
          commonNameEnglish: "Long-billed Plover",
          commonNameJapanese: "イカルチドリ",
          commonNameRomaji: "ikaruchidori",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Charadrius placidus",
          range: "Breeds e Asia; winters to India and Indochina",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/9d/Charadrius_placidus_japonicus.JPG",
        },
        {
          commonNameEnglish: "Little Ringed Plover",
          commonNameJapanese: "コチドリ",
          commonNameRomaji: "kochidori",
          order: "Charadriiformes",
          family: "Charadriidae",
          species: "Charadrius dubius",
          range: "Palearctic; winters to Africa, Arabia, e China and Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/CharadriusDubiusIUCN2019-3.png/1280px-CharadriusDubiusIUCN2019-3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/16/Little_ringed_plover_%28Charadrius_dubius%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Greater Painted-snipe",
          commonNameJapanese: "タマシギ",
          commonNameRomaji: "tamashigi",
          order: "Charadriiformes",
          family: "Rostratulidae",
          species: "Rostratula benghalensis",
          range: "Locally in Africa, Madagascar and Oriental region",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Rostratula_benghalensis_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/Greater_Painted-snipe_%28Female%29_I2_IMG_9477.jpg",
        },
        {
          commonNameEnglish: "Eurasian Whimbrel",
          commonNameJapanese: "チュウシャクシギ",
          commonNameRomaji: "chuushakushigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Numenius phaeopus variegatus",
          range:
            "Siberia; winters to India, Philippines, Indonesia and Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Whimbrel_-_Lee_Point_Reserve.jpg/1280px-Whimbrel_-_Lee_Point_Reserve.jpg",
        },
        {
          commonNameEnglish: "Far Eastern Curlew",
          commonNameJapanese: "ホウロクシギ",
          commonNameRomaji: "hourokushigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Numenius madagascariensis",
          range:
            "Breeds ne Asia; winters to Philippines, Indonesia and Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Numenius_madagascariensis_1_-_Stockton_Sandspit.jpg/1280px-Numenius_madagascariensis_1_-_Stockton_Sandspit.jpg",
        },
        {
          commonNameEnglish: "Eurasian Curlew",
          commonNameJapanese: "ダイシャクシギ",
          commonNameRomaji: "daishakushigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Numenius arquata orientalis",
          range:
            "E Russia, Manchuria; winters to Africa, SE Asia and Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Eurasian_Curlew_Range.png/1280px-Eurasian_Curlew_Range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Eurasian_Curlew.jpg/1024px-Eurasian_Curlew.jpg",
        },
        {
          commonNameEnglish: "Bar-tailed Godwit",
          commonNameJapanese: "オオソリハシシギ",
          commonNameRomaji: "oosorihashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Limosa lapponica",
          range: "NE Siberia to w Alaska; winters China to New Zealand",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bar-tailed_Godwit.jpg/1280px-Bar-tailed_Godwit.jpg",
        },
        {
          commonNameEnglish: "Black-tailed Godwit",
          commonNameJapanese: "オグロシギ",
          commonNameRomaji: "oguroshigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Limosa limosa",
          range: "Palearctic; winters to sub-Saharan Africa and India",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/LimosalimosaWorldDistribution.jpg/1280px-LimosalimosaWorldDistribution.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Black-tailed_Godwit_Uferschnepfe.jpg/1024px-Black-tailed_Godwit_Uferschnepfe.jpg",
        },
        {
          commonNameEnglish: "Ruddy Turnstone",
          commonNameJapanese: "キョウジョシギ",
          commonNameRomaji: "oguroshigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Arenaria interpres",
          range:
            "Alaska, n N Am. and n Eurasia, winters to Africa, Australasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arenaria_interpres_map.svg/1280px-Arenaria_interpres_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Arenaria_interpres_%28habitus%29.jpg/1280px-Arenaria_interpres_%28habitus%29.jpg",
        },
        {
          commonNameEnglish: "Great Knot",
          commonNameJapanese: "オバシギ",
          commonNameRomaji: "obashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris tenuirostris",
          range:
            "NE Siberia; winters to India, SE Asia, Philippines and Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Calidris_tenuirostris_-_Laem_Phak_Bia.jpg/1280px-Calidris_tenuirostris_-_Laem_Phak_Bia.jpg",
        },
        {
          commonNameEnglish: "Ruff",
          commonNameJapanese: "エリマキシギ",
          commonNameRomaji: "erimakishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris pugnax",
          range:
            "Breeds n Palearctic; winters to s Africa, s Asia and Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/d/d2/Philomachuspugnaxmap.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Philomachus_pugnax_-Diergaarde_Blijdorp-8c.jpg/1280px-Philomachus_pugnax_-Diergaarde_Blijdorp-8c.jpg",
        },
        {
          commonNameEnglish: "Broad-billed Sandpiper",
          commonNameJapanese: "キリアイ",
          commonNameRomaji: "kiriai",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris falcinellus sibirica",
          range:
            "N Russia; winters to India, SE Asia, Philippines and Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Broad_billed_sandpiper_by_Sreedev_Puthur.jpg/1280px-Broad_billed_sandpiper_by_Sreedev_Puthur.jpg",
        },
        {
          commonNameEnglish: "Sharp-tailed Sandpiper",
          commonNameJapanese: "ウズラシギ",
          commonNameRomaji: "kiriai",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris acuminata",
          range: "Breeds ne Siberia; winters in Australasia and Polynesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Calidris_acuminata_map.svg/1280px-Calidris_acuminata_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Calidris_acuminata_-_Hexham_Swamp.jpg/1280px-Calidris_acuminata_-_Hexham_Swamp.jpg",
        },
        {
          commonNameEnglish: "Curlew Sandpiper",
          commonNameJapanese: "サルハマシギ",
          commonNameRomaji: "saruhamashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris ferruginea",
          range: "Arctic Siberia; winters to s Africa, SE Asia and Australasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Calidris_ferruginea_map.svg/1280px-Calidris_ferruginea_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Calidris_ferruginea%2C_winter_adult%2C_Pak_Thale.jpg/1280px-Calidris_ferruginea%2C_winter_adult%2C_Pak_Thale.jpg",
        },
        {
          commonNameEnglish: "Temminck's Stint",
          commonNameJapanese: "オジロトウネン",
          commonNameRomaji: "ojirotounen",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris temminckii",
          range: "N Palearctic; winters to Africa, Indonesia and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/1/14/CalidrisTemminckiiIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Temmincks_Stint.jpg/1280px-Temmincks_Stint.jpg",
        },
        {
          commonNameEnglish: "Long-toed Stint",
          commonNameJapanese: "ヒバリシギ",
          commonNameRomaji: "hibarishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris subminuta",
          range: "NE Palearctic; winters SE Asia to Philippines and Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/c/cf/Calidris_subminuta_-_Pak_Thale.jpg",
        },
        {
          commonNameEnglish: "Red-necked Stint",
          commonNameJapanese: "トウネン",
          commonNameRomaji: "tounen",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris ruficollis",
          range:
            "Breeds Siberia and Alaska; disperses to s Asia and Australasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Red-necked_Stint.jpg/800px-Red-necked_Stint.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Red-necked_Stint_-_Boat_Harbour.jpg/1280px-Red-necked_Stint_-_Boat_Harbour.jpg",
        },
        {
          commonNameEnglish: "Sanderling",
          commonNameJapanese: "ミユビシギ",
          commonNameRomaji: "miyubishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris alba",
          range: "Breeds Holarctic; worldwide coastal post-breeding dispersal",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/b/b7/Arcticsanderling.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Calidris_alba_-_Laem_Phak_Bia.jpg/1280px-Calidris_alba_-_Laem_Phak_Bia.jpg",
        },
        {
          commonNameEnglish: "Dunlin",
          commonNameJapanese: "ハマシギ",
          commonNameRomaji: "hamashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris alpina arcticola",
          range: "NW Alaska and nw Canada; winters e China, Korea and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/CalidrisAlpinaIUCNver2018_2.png/1280px-CalidrisAlpinaIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dunlin_easton_bavents.jpg/1280px-Dunlin_easton_bavents.jpg",
        },
        {
          commonNameEnglish: "Rock Sandpiper",
          commonNameJapanese: "チシマシギ",
          commonNameRomaji: "chishimashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Calidris ptilocnemis tschuktschorum",
          range: "Chukotsk Pen. to w Alaska; winters nw N Am. and e Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Calidris_ptilocnemis_map.svg/1280px-Calidris_ptilocnemis_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Calidris_ptilocnemis1.jpg/1280px-Calidris_ptilocnemis1.jpg",
        },
        {
          commonNameEnglish: "Eurasian Woodcock",
          commonNameJapanese: "ヤマシギ",
          commonNameRomaji: "yamashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Scolopax rusticola",
          range: "Locally in moist woodlands and bogs of Eurasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/ScolopaxRusticolaIUCNver2019-2.png/1280px-ScolopaxRusticolaIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Woodcock_earthworm.jpg",
        },
        {
          commonNameEnglish: "Amami Woodcock",
          commonNameJapanese: "アマミヤマシギ",
          commonNameRomaji: "amamiyamashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Scolopax mira",
          range: "Amami-O-Shima, Tokuno-Shima, Okinawa, Tokashiki-Shima",
          profilePic:
            "https://live.staticflickr.com/1908/44160527504_13589e48a8_n.jpg",
        },
        {
          commonNameEnglish: "Solitary Snipe",
          commonNameJapanese: "アオシギ",
          commonNameRomaji: "aoshigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Gallinago solitaria japonica",
          range: "Sakhalin and ne China; winters Korea, Japan and e China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Solitary_Snipe_Paro_River_Bhutan.jpg",
        },
        {
          commonNameEnglish: "Latham's Snipe",
          commonNameJapanese: "オオジシギ",
          commonNameRomaji: "oojishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Gallinago hardwickii",
          range:
            "Sakhalin and Japan; winters e Australia, Tasmania, New Guinea",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b9/Latham%27s_snipe.jpg",
        },
        {
          commonNameEnglish: "Common Snipe",
          commonNameJapanese: "タシギ",
          commonNameRomaji: "tashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Gallinago gallinago",
          range:
            "N Palearctic and Aleutians; winters to Africa, India, Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/GallinagoGallinagoIUCNver2019-2.png/1280px-GallinagoGallinagoIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gallinago_gallinago_a1.JPG/1024px-Gallinago_gallinago_a1.JPG",
        },
        {
          commonNameEnglish: "Pintail Snipe",
          commonNameJapanese: "ハリオシギ",
          commonNameRomaji: "harioshigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Gallinago stenura",
          range: "Siberia; winters India to SE Asia, Indonesia and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Gallinago_stenura_-_Laem_Pak_Bia.jpg/1280px-Gallinago_stenura_-_Laem_Pak_Bia.jpg",
        },
        {
          commonNameEnglish: "Swinhoe's Snipe",
          commonNameJapanese: "チュウジシギ",
          commonNameRomaji: "chuujishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Gallinago megala",
          range:
            "Siberia; winters India to SE Asia, Philippines and n Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/2/23/Gallinago_megala.jpg",
        },
        {
          commonNameEnglish: "Terek Sandpiper",
          commonNameJapanese: "ソリハシシギ",
          commonNameRomaji: "sorihashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Xenus cinereus",
          range:
            "N Eurasia; winters to s Africa, s Asia, Philippines, n Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/XenusCinereusIUCN.png/1280px-XenusCinereusIUCN.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/17/Xenus_cinereus_%28Alnus%29.jpg",
        },
        {
          commonNameEnglish: "Red-necked Phalarope",
          commonNameJapanese: "アカエリヒレアシシギ",
          commonNameRomaji: "akaerihireashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Phalaropus lobatus",
          range: "Holarctic circumpolar; winters at sea in southern hemisphere",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Phalaropus_lobatus_distribution.png/1280px-Phalaropus_lobatus_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Red-necked_Phalarope.jpg/1280px-Red-necked_Phalarope.jpg",
        },
        {
          commonNameEnglish: "Red Phalarope",
          commonNameJapanese: "ハイイロヒレアシシギ",
          commonNameRomaji: "haiirohireashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Phalaropus fulicarius",
          range: "Holarctic circumpolar; winters at sea in southern hemisphere",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Phalaropus_fulicarius_distribution.png/800px-Phalaropus_fulicarius_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Phalaropus_fulicarius_10.jpg/1280px-Phalaropus_fulicarius_10.jpg",
        },
        {
          commonNameEnglish: "Common Sandpiper",
          commonNameJapanese: "イソシギ",
          commonNameRomaji: "isoshigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Actitis hypoleucos",
          range:
            "Palearctic; winters to s Africa, c Asia, Philippines and Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/ActitisHypoleucosIUCNver2018_2.png/1280px-ActitisHypoleucosIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Actitis_hypoleucos_-_Laem_Pak_Bia.jpg/1280px-Actitis_hypoleucos_-_Laem_Pak_Bia.jpg",
        },
        {
          commonNameEnglish: "Green Sandpiper",
          commonNameJapanese: "クサシギ",
          commonNameRomaji: "kusashigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Tringa ochropus",
          range:
            "N Eurasia; winters to s Africa, s Asia, Philippines and Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/TringaOchropusIUCNver2019-2.png/1280px-TringaOchropusIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Green_sandpiper_%28Tringa_ochropus%29.jpg/1280px-Green_sandpiper_%28Tringa_ochropus%29.jpg",
        },
        {
          commonNameEnglish: "Grey-tailed Tattler",
          commonNameJapanese: "キアシシギ",
          commonNameRomaji: "kiashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Tringa brevipes",
          range: "Mountains of Siberia; winters to SE Asia and Australasia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/9f/Tringa_brevipes2.jpg",
        },
        {
          commonNameEnglish: "Spotted Redshank",
          commonNameJapanese: "ツルシギ",
          commonNameRomaji: "tsurushigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Tringa erythropus",
          range: "Breeds n Eurasia; winters Mediterranean region to SE Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/TringaErythropusIUCN.png/1280px-TringaErythropusIUCN.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tringa_erythropus_-_Laem_Pak_Bia.jpg/1280px-Tringa_erythropus_-_Laem_Pak_Bia.jpg",
        },
        {
          commonNameEnglish: "Common Greenshank",
          commonNameJapanese: "アオアシシギ",
          commonNameRomaji: "aoashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Tringa nebularia",
          range:
            "Palearctic; winters to s Africa, s Asia, Philippines and Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TringaNebulariaIUCNver2018_2.png/1280px-TringaNebulariaIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Greenshank_%28Tringa_nebularia%29.jpg/1280px-Greenshank_%28Tringa_nebularia%29.jpg",
        },
        {
          commonNameEnglish: "Marsh Sandpiper",
          commonNameJapanese: "コアオアシシギ",
          commonNameRomaji: "koaoashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Tringa stagnatillis",
          range: "Palearctic; winters to s Africa, s Asia and Australasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TringaStagnatilisIUCNver2018_2.png/1280px-TringaStagnatilisIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tringa_stagnatilis_2_-_Laem_Pak_Bia.jpg/1280px-Tringa_stagnatilis_2_-_Laem_Pak_Bia.jpg",
        },
        {
          commonNameEnglish: "Wood Sandpiper",
          commonNameJapanese: "タガブシギ",
          commonNameRomaji: "takabushigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Tringa glareola",
          range: "Breeds n Eurasia; winters to s Africa, s Asia and Australia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wood_Sandpiper_Safari_Park.jpg/800px-Wood_Sandpiper_Safari_Park.jpg",
        },
        {
          commonNameEnglish: "Common Redshank",
          commonNameJapanese: "アカアシシギ",
          commonNameRomaji: "akaashishigi",
          order: "Charadriiformes",
          family: "Scolopacidae",
          species: "Tringa totanus",
          range:
            "Scandinavia to Iberia; winters to Africa, India and Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/TringaTotanusIUCN2019_2.png/1280px-TringaTotanusIUCN2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Common_Redshank_Tringa_totanus.jpg/1280px-Common_Redshank_Tringa_totanus.jpg",
        },
        {
          commonNameEnglish: "Barred Buttonquail",
          commonNameJapanese: "ミフウズラ",
          commonNameRomaji: "mifuuzura",
          order: "Charadriiformes",
          family: "Turnicidae",
          species: "Turnix suscitator okinavensis",
          range: "S Kyushu I. and Makenoshima I. south to Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Barred_Button_quail_or_Common_Bustard-Quail_%28Turnix_suscitatior%29_Photograph_By_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Oriental Pratincole",
          commonNameJapanese: "ツバメチドリ",
          commonNameRomaji: "tsubamechidori",
          order: "Charadriiformes",
          family: "Glareolidae",
          species: "Glareola maldivarum",
          range:
            "E Asia; winters India to SE Asia, Philippines and Australasia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Glareola_maldivarum_-_Beung_Borapet.jpg/1280px-Glareola_maldivarum_-_Beung_Borapet.jpg",
        },
        {
          commonNameEnglish: "South Polar Skua",
          commonNameJapanese: "オンキョクオオトウゾクカモメ",
          commonNameRomaji: "nankyokuootouzokukamome",
          order: "Charadriiformes",
          family: "Stercorariidae",
          species: "Stercorarius maccormicki",
          range:
            "Antarctica; ranges to n Atlantic, n Pacific and Indian oceans",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Stercorarius_maccormicki_map.svg/1280px-Stercorarius_maccormicki_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/South_polar_skua.jpg/1280px-South_polar_skua.jpg",
        },
        {
          commonNameEnglish: "Pomarine Jaeger",
          commonNameJapanese: "トウゾクカモメ",
          commonNameRomaji: "touzokukamome",
          order: "Charadriiformes",
          family: "Stercorariidae",
          species: "Stercorarius pomarinus",
          range: "Circumpolar Arctic tundra; winters at sea in southern oceans",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/StercorariusPomarinusIUCNver2018_2.png/1280px-StercorariusPomarinusIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0d/Stercorarius_pomarinusPCCA20070623-3985B.jpg",
        },
        {
          commonNameEnglish: "Parasitic Jaeger",
          commonNameJapanese: "クロトウゾクカモメ",
          commonNameRomaji: "kurotouzokukamome",
          order: "Charadriiformes",
          family: "Stercorariidae",
          species: "Stercorarius parasiticus",
          range: "Circumpolar Arctic tundra; winters at sea in southern oceans",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Stercorarius_parasiticus_map.svg/1280px-Stercorarius_parasiticus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Arctic_Skua_1.jpg/1280px-Arctic_Skua_1.jpg",
        },
        {
          commonNameEnglish: "Long-tailed Jaeger",
          commonNameJapanese: "シロハラトウゾクカモメ",
          commonNameRomaji: "shiroharatouzokukamome",
          order: "Charadriiformes",
          family: "Stercorariidae",
          species: "Stercorarius longicaudus",
          range:
            "N Scandinavia and Russia; winters to s S America and S Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Stercorarius_longicaudus_map.svg/1280px-Stercorarius_longicaudus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Long-tailed_Skua_%28js%29_26.jpg/1280px-Long-tailed_Skua_%28js%29_26.jpg",
        },
        {
          commonNameEnglish: "Common Murre",
          commonNameJapanese: "ウミガラス",
          commonNameRomaji: "umigarasu",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Uria aalge inornata",
          range: "Korea, Japan and Kamchatka to Bering Sea and Br. Columbia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Uria_aalge_map.svg/1280px-Uria_aalge_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Common_Murre_Uria_aalge.jpg/800px-Common_Murre_Uria_aalge.jpg",
        },
        {
          commonNameEnglish: "Thick-billed Murre",
          commonNameJapanese: "ハシブトウミガラス",
          commonNameRomaji: "hashibutoumigarasu",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Uria lomvia arra",
          range: "N Japan and Aleutian Islands to se Alaska",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Uria_lomvia_map.svg/1280px-Uria_lomvia_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Uria_lomvia1.jpg",
        },
        {
          commonNameEnglish: "Pigeon Guillemot",
          commonNameJapanese: "ウミバト",
          commonNameRomaji: "umibato",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Cepphus columba",
          range: "NE Siberia to Bering Sea and w Alaska",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/6/6b/PIGU_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Pigeon_guillemot.jpg/1280px-Pigeon_guillemot.jpg",
        },
        {
          commonNameEnglish: "Spectacled Guillemot",
          commonNameJapanese: "ケイマフリ",
          commonNameRomaji: "keimafuri",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Cepphus carbo",
          range: "Kamchatka and Sea of Okhotsk to Korea, Kuril Is. and n Japan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SpectacledGuillemot.jpg/1280px-SpectacledGuillemot.jpg",
        },
        {
          commonNameEnglish: "Long-billed Murrelet",
          commonNameJapanese: "ハシナガウミスズメ",
          commonNameRomaji: "hashinagaumisuzume",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Brachyramphus perdix",
          range: "Kamchatka Peninsula and Sea of Okhotsk to Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Brachyramphus_perdix_map.svg/1280px-Brachyramphus_perdix_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Brachyramphus_perdix0.jpg",
        },
        {
          commonNameEnglish: "Ancient Murrelet",
          commonNameJapanese: "ウミスズメ",
          commonNameRomaji: "umisuzume",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Synthliboramphus antiquus microrhynchos",
          range: "Komandorskiye Islands; winters to Ryukyu Islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Synthliboramphus_antiquus_map.svg/1280px-Synthliboramphus_antiquus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ancient_Murrelet_-_Semiahmoo_Spit.jpg/1280px-Ancient_Murrelet_-_Semiahmoo_Spit.jpg",
        },
        {
          commonNameEnglish: "Japanese Murrelet",
          commonNameJapanese: "カンムリウミスズメ",
          commonNameRomaji: "kanmuriumisuzume",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Synthliboramphus wumizusume",
          range: "Coasts and islands off e and s Japan and South Korea",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Synthliboramphus_wumizusume_-Japan-8.jpg/1280px-Synthliboramphus_wumizusume_-Japan-8.jpg",
        },
        {
          commonNameEnglish: "Least Auklet",
          commonNameJapanese: "コウミスズメ",
          commonNameRomaji: "koumisuzume",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Aethia pusilla",
          range: "Breeds e Siberia and w Alaska; winters south to n Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Aethia_pusilla_map.svg/1280px-Aethia_pusilla_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/00/Leastauklet6.jpg",
        },
        {
          commonNameEnglish: "Crested Auklet",
          commonNameJapanese: "エトロフウミスズメ",
          commonNameRomaji: "etorofuumisuzume",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Aethia cristatella",
          range: "Breeds w Alaska and e Siberia; winters south to Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Aethia_cristatella_map.svg/1280px-Aethia_cristatella_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aethia_cristatella.jpg/800px-Aethia_cristatella.jpg",
        },
        {
          commonNameEnglish: "Rhinoceros Auklet",
          commonNameJapanese: "ウトウ",
          commonNameRomaji: "utou",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Cerorhinca monocerata",
          range: "E Asia and w North America; winters to Baja California",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cerorhinca_monocerata_map.svg/1280px-Cerorhinca_monocerata_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wiki-utou2.jpg/1280px-Wiki-utou2.jpg",
        },
        {
          commonNameEnglish: "Tufted Puffin",
          commonNameJapanese: "エトピリカ",
          commonNameRomaji: "etopirika",
          order: "Charadriiformes",
          family: "Alcidae",
          species: "Fratercula cirrhata",
          range: "Coasts and islands of ne Asia to Aleutians and s California",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fratercula_cirrhata_distribution_map.svg/1280px-Fratercula_cirrhata_distribution_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/Tufted_Puffin_Alaska_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Black-legged Kittiwake",
          commonNameJapanese: "ミツユビカモメ",
          commonNameRomaji: "mitsuyubikamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Rissa tridactylus pollicaris",
          range: "Circumpolar n Pacific; winters to e China Sea and nw Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rissa_tridactyla_area_all.PNG/1280px-Rissa_tridactyla_area_all.PNG",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Rissa_tridactyla_%28Vard%C3%B8%2C_2012%29.jpg/1280px-Rissa_tridactyla_%28Vard%C3%B8%2C_2012%29.jpg",
        },
        {
          commonNameEnglish: "Saunders's Gull",
          commonNameJapanese: "ズグロカモメ",
          commonNameRomaji: "zugurokamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Chroicocephalus saundersi",
          range:
            "Coastal e China; winters South Korea and s Japan to n Vietnam",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Saundersilarus_saundersi_2739737.jpg",
        },
        {
          commonNameEnglish: "Black-headed Gull",
          commonNameJapanese: "ユリカモメ",
          commonNameRomaji: "yurikamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Chroicocephalus ridbundus",
          range: "N Palearctic; winters to Africa, s Asia and e North America",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Black-Headed_Gull.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Chroicocephalus_ridibundus_%28summer%29.jpg/1280px-Chroicocephalus_ridibundus_%28summer%29.jpg",
        },
        {
          commonNameEnglish: "Mew Gull",
          commonNameJapanese: "カモメ",
          commonNameRomaji: "kamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Larus canus kamtschatschensis",
          range: "NE Siberia; winters SE Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Larus_canus_map.svg/1280px-Larus_canus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Larus_canus1.jpg/800px-Larus_canus1.jpg",
        },
        {
          commonNameEnglish: "Vega Gull",
          commonNameJapanese: "セグロカモメ",
          commonNameRomaji: "segurokamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Larus argentatus vegae",
          range: "NE Siberia; winters south to China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0d/Larus_vegae.jpg",
        },
        {
          commonNameEnglish: "Slaty-backed Gull",
          commonNameJapanese: "オオセグロカモメ",
          commonNameRomaji: "oosegurokamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Larus schistisagus",
          range: "Breeds ne Siberia to Japan; winters south to Taiwan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Larus_schistisagus_map.svg/1280px-Larus_schistisagus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ooseguro-kamome.jpg",
        },
        {
          commonNameEnglish: "Glaucous-winged Gull",
          commonNameJapanese: "ワシカモメ",
          commonNameRomaji: "washikamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Larus glaucescens",
          range: "Bering Sea to nw Oregon; winters to Japan and nw Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Larus_glaucescens_map.svg/1280px-Larus_glaucescens_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Glaucous-winged_gull.jpg/1280px-Glaucous-winged_gull.jpg",
        },
        {
          commonNameEnglish: "Glaucous Gull",
          commonNameJapanese: "シロカモメ",
          commonNameRomaji: "shirokamome",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Larus hyperboreus",
          range: "Jan Mayen and Spitsbergen east to Taymyr Peninsula",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Larus_hyperboreus_map.svg/1280px-Larus_hyperboreus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Glacous_Gull_on_ice.jpg/1280px-Glacous_Gull_on_ice.jpg",
        },
        {
          commonNameEnglish: "Brown Noddy",
          commonNameJapanese: "クロアジサシ",
          commonNameRomaji: "kuroajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Anous stolidus pileatus",
          range: "Seychelles and Madagascar to Australia, Polynesia and Hawaii",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Anous_stolidus_map.svg/1280px-Anous_stolidus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Common_Noddy_1_-_Michaelmas.jpg/1280px-Common_Noddy_1_-_Michaelmas.jpg",
        },
        {
          commonNameEnglish: "Sooty Tern",
          commonNameJapanese: "セグロアジサシ",
          commonNameRomaji: "seguroajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Onychoprion fuscatus nubilosus",
          range: "S Red Sea and Indian Ocean to Ryukyu Is. and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Onychoprion_fuscatus_map.svg/1280px-Onychoprion_fuscatus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sterna_fuscata.JPG/1280px-Sterna_fuscata.JPG",
        },
        {
          commonNameEnglish: "Bridled Tern",
          commonNameJapanese: "マミジロアジサシ",
          commonNameRomaji: "mamijiroajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Onychoprion anaethetus",
          range: "Ryukyu Is., Taiwan, Philippines, Indonesia and Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Onychoprion_anaethetus_map.svg/1280px-Onychoprion_anaethetus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bridled_Tern_LEI_Nov06.JPG/1280px-Bridled_Tern_LEI_Nov06.JPG",
        },
        {
          commonNameEnglish: "Little Tern",
          commonNameJapanese: "コアジサシ",
          commonNameRomaji: "koajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Sternula albifrons sinensis",
          range: "SE Russia to Japan, SE Asia, Philippines and New Guinea",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/SternulaAlbifronsIUCN.png/1280px-SternulaAlbifronsIUCN.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Sternula_albifrons_2_-_Little_Swanport.jpg/1280px-Sternula_albifrons_2_-_Little_Swanport.jpg",
        },
        {
          commonNameEnglish: "White-winged Tern",
          commonNameJapanese: "ハジロクロハラアジサシ",
          commonNameRomaji: "hajirokuroharaajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Chlidonias leucopterus",
          range: "Palearctic; winters to Africa, s Asia and Australasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chlidonias_leucopterus_map.svg/1280px-Chlidonias_leucopterus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Chlidonias_leucopterus_Mai_Po.jpg",
        },
        {
          commonNameEnglish: "Whiskered Tern",
          commonNameJapanese: "クロハラアジサシ",
          commonNameRomaji: "kuroharaajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Chlidonias hybrida",
          range:
            "breeds nw Africa and central and s Europe to se Siberia, e China and s to Pakistan and n India; winters Africa and s and se Asia to Thai-Malay Peninsula, Sulawesi, and the Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/ChlidoniasHybridaIUCN2019_3.png/1280px-ChlidoniasHybridaIUCN2019_3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Whiskered_tern_%28Chlidonias_hybrida_delalandii%29.jpg/1280px-Whiskered_tern_%28Chlidonias_hybrida_delalandii%29.jpg",
        },
        {
          commonNameEnglish: "Roseate Tern",
          commonNameJapanese: "ベニアジサシ",
          commonNameRomaji: "beniajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Sterna dougallii bangsi",
          range: "Arabian Sea; e China to New Guinea, Solomons and Ryukyus",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sterna_dougallii_map.svg/1280px-Sterna_dougallii_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Roseate_terns_Palometas.jpg/1280px-Roseate_terns_Palometas.jpg",
        },
        {
          commonNameEnglish: "Black-naped Tern",
          commonNameJapanese: "エリグロアジサシ",
          commonNameRomaji: "eriguroajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Sterna sumatrana",
          range:
            "Andaman and Nicobar islands to e China and s Japan, through se Asia to the Philippines, the Sunda Islands, New Guinea and n Australia, Micronesia, Melanesia, and w central Polynesia (e to Samoa)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/a0/Black-naped_Tern_LEI.JPG",
        },
        {
          commonNameEnglish: "Common Tern",
          commonNameJapanese: "アジサシ",
          commonNameRomaji: "ajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Sterna hirundo longipennis",
          range: "NE Siberia to ne China; winters SE Asia to Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/SternaHirundoIUCNver2018_2.png/1280px-SternaHirundoIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/bf/Common_tern_with_fish.jpg",
        },
        {
          commonNameEnglish: "Great Crested-Tern",
          commonNameJapanese: "オオアジサシ",
          commonNameRomaji: "ooajisashi",
          order: "Charadriiformes",
          family: "Laridae",
          species: "Thalasseus bergii cristatus",
          range:
            "Ryukyu Islands and se China to the Philippines, the Sunda Islands, Wallacea, New Guinea, Australia, and the tropical Pacific Ocean (to se Polynesia)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/SternaBergiMap2.svg/1280px-SternaBergiMap2.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Crested_Tern_Tasmania.jpg/1280px-Crested_Tern_Tasmania.jpg",
        },
        {
          commonNameEnglish: "Red-tailed Tropicbird",
          commonNameJapanese: "アカオネッタイチョウ",
          commonNameRomaji: "akaonettaichou",
          order: "Phaethontiformes",
          family: "Phaethontidae",
          species: "Phaethon rubricauda melanorhynchos",
          range: "Breeds and disperses widely in tropical Pacific Ocean",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Redtailedtropicbirdrge.png/1280px-Redtailedtropicbirdrge.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/47/Red-tailed_Tropicbird_RWD2.jpg",
        },
        {
          commonNameEnglish: "Red-throated Loon",
          commonNameJapanese: "アビ",
          commonNameRomaji: "abi",
          order: "Gaviiformes",
          family: "Gaviidae",
          species: "Gavia stellata",
          range:
            "breeds across the n Holarctic region; winters coastally in the n Pacific Ocean from the Kamchatka Peninsula to the Yellow Sea, and from s Alaska to nw Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gavia_stellata_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Gavia_Stellata_%C3%96lfus%C3%A1_20090606.jpg/1280px-Gavia_Stellata_%C3%96lfus%C3%A1_20090606.jpg",
        },
        {
          commonNameEnglish: "Arctic Loon",
          commonNameJapanese: "オオハム",
          commonNameRomaji: "oohamu",
          order: "Gaviiformes",
          family: "Gaviidae",
          species: "Gavia arctica viridigularis",
          range:
            "breeds ne Siberia and extreme w mainland Alaska; winters from the Kuril Islands to the Yellow Sea",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/GaviaArcticaIUCNver2019-2.png/1280px-GaviaArcticaIUCNver2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/3e/Black-throated_Diver%2C_Oulu%2C_Finland_02_%2815195370798%29.jpg",
        },
        {
          commonNameEnglish: "Pacific Loon",
          commonNameJapanese: "シロエリオオハム",
          commonNameRomaji: "shiroerioohamu",
          order: "Gaviiformes",
          family: "Gaviidae",
          species: "Gavia pacifica",
          range: "Coastal e Siberia and n N America; winters to Japan, s Baja",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gavia_pacifica_map.svg/1280px-Gavia_pacifica_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/PacificLoon24.jpg",
        },
        {
          commonNameEnglish: "Yellow-billed Loon",
          commonNameJapanese: "ハシジロアビ",
          commonNameRomaji: "hashijiroabi",
          order: "Gaviiformes",
          family: "Gaviidae",
          species: "Gavia adamsii",
          range: "N Eurasia and n North America; winters to n Baja California",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gavia_adamsii_map.svg/1280px-Gavia_adamsii_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/1280px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg",
        },
        {
          commonNameEnglish: "Laysan Albatross",
          commonNameJapanese: "コアホウドリ",
          commonNameRomaji: "koahoudori",
          order: "Procellariiformes",
          family: "Diomedeidae",
          species: "Phoebastria immutabilis",
          range:
            "Breeds w Hawaiian and Revillagigedo islands; ranges n Pacific",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Phoebastria_immutabilis_map.svg/1280px-Phoebastria_immutabilis_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d0/Laysan_Albatross_RWD2.jpg",
        },
        {
          commonNameEnglish: "Black-footed Albatross",
          commonNameJapanese: "クロアヒアホウドリ",
          commonNameRomaji: "kuroashiahoudori",
          order: "Procellariiformes",
          family: "Diomedeidae",
          species: "Phoebastria nigripes",
          range: "W Hawaiian, Izu, Bonin and s Ryukyu islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Phoebastria_nigripes_map.svg/1280px-Phoebastria_nigripes_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Black_footed_albatross1.jpg",
        },
        {
          commonNameEnglish: "Short-tailed Albatross",
          commonNameJapanese: "アホウドリ",
          commonNameRomaji: "ahoudori",
          order: "Procellariiformes",
          family: "Diomedeidae",
          species: "Phoebastria albatrus",
          range:
            "Breeds Torishima (Izu Islands); ranges at sea through n Pacific",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Phoebastria_albatrus_map.svg/1280px-Phoebastria_albatrus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/7/73/Short_tailed_Albatross1.jpg",
        },
        {
          commonNameEnglish: "Fork-tailed Storm-Petrel",
          commonNameJapanese: "ハイイロウミツバメ",
          commonNameRomaji: "haiiroumitsubame",
          order: "Procellariiformes",
          family: "Hydrobatidae",
          species: "Oceanodroma furcata",
          range: "N Kuril, Komandorskiye and Aleutian islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Oceanodroma_furcata_map.svg/1280px-Oceanodroma_furcata_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Oceanodroma_furcata_1.jpg/1280px-Oceanodroma_furcata_1.jpg",
        },
        {
          commonNameEnglish: "Leach's Storm-Petrel",
          commonNameJapanese: "コシジロウミツバメ",
          commonNameRomaji: "koshijiroumitsubame",
          order: "Procellariiformes",
          family: "Hydrobatidae",
          species: "Oceanodroma leucorhoa",
          range: "N Atlantic; Japan to Aleutians and islands off n Mexico",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Oceanodroma_leucorhoa_map.svg/1280px-Oceanodroma_leucorhoa_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Lesp1.jpg/1280px-Lesp1.jpg",
        },
        {
          commonNameEnglish: "Swinhoe's Storm-Petrel",
          commonNameJapanese: "ヒメクロウミツバメ",
          commonNameRomaji: "himekuroumitsubame",
          order: "Procellariiformes",
          family: "Hydrobatidae",
          species: "Oceanodroma monorhis",
          range: "Breeds islands off Japan; disperses to n Indian Ocean",
          profilePic:
            "https://farm7.staticflickr.com/6066/6059517855_354e63a231_n.jpg",
        },
        {
          commonNameEnglish: "Band-rumped Storm-Petrel",
          commonNameJapanese: "クロコシジロウミツバメ",
          commonNameRomaji: "kurokoshijiroumitsubame",
          order: "Procellariiformes",
          family: "Hydrobatidae",
          species: "Oceanodroma castro",
          range: "Breeds and ranges tropical Atlantic and Pacific Oceans",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Oceanodroma_castro_dist.png/1280px-Oceanodroma_castro_dist.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Band_rumped_storm_petrel_Andre_Raine_KESRP_%2821789178016%29.jpg/1280px-Band_rumped_storm_petrel_Andre_Raine_KESRP_%2821789178016%29.jpg",
        },
        {
          commonNameEnglish: "Matsudaira's Storm-Petrel",
          commonNameJapanese: "クロウミツバメ",
          commonNameRomaji: "kuroumitsubame",
          order: "Procellariiformes",
          family: "Hydrobatidae",
          species: "Oceanodroma matsudairae",
          range: "Breeds Volcano Islands (Japan); disperses to Indian Ocean",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/012016-IMG_5713_Matsudaira%27s_Storm-Petrel_%28Oceanodroma_matsudairae%29_%288005427860%29.jpg",
        },
        {
          commonNameEnglish: "Tristram's Storm-Petrel",
          commonNameJapanese: "オーストンウミツバメ",
          commonNameRomaji: "oosutonumitsubame",
          order: "Procellariiformes",
          family: "Hydrobatidae",
          species: "Oceanodroma tristrami",
          range: "Breeds and ranges Hawaii, Izu and Volcano islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tristram%27s_storm_petrel_on_Nihoa_Island_%2826642384862%29.jpg/1280px-Tristram%27s_storm_petrel_on_Nihoa_Island_%2826642384862%29.jpg",
        },
        {
          commonNameEnglish: "Northern Fulmar",
          commonNameJapanese: "フルマカモメ",
          commonNameRomaji: "furumakamome",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Fulmarus glacialis rodgersii",
          range:
            "Breeds coasts of e Siberia and Alaskan peninsula; ranges widely",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/FULMAR.gif/1280px-FULMAR.gif",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Northern-Fulmar2_cropped.jpg/1280px-Northern-Fulmar2_cropped.jpg",
        },
        {
          commonNameEnglish: "Bonin Petrel",
          commonNameJapanese: "シロハラミズナギドリ",
          commonNameRomaji: "shiroharamizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Pterodroma hypoleuca",
          range: "Volcano, Bonin and w Hawaiian islands; ranges to Polynesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Pterodroma_hypoleuca_-Midway_Atoll%2C_USA-8.jpg",
        },
        {
          commonNameEnglish: "Bulwer's Petrel",
          commonNameJapanese: "アナドリ",
          commonNameRomaji: "anadori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Bulweria bulwerii",
          range: "Azores to Cape Verde, Johnston and nw Hawaiian islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/86/Bulweria_bulwerii_Hawaii_2.jpg",
        },
        {
          commonNameEnglish: "Streaked Shearwater",
          commonNameJapanese: "オオミズナギドリ",
          commonNameRomaji: "oomizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Calonectris leucomelas",
          range:
            "Breeds coastal islands off Japan and China; ranges to s Pacific",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Streaked_shearwater_sitting.jpg/1280px-Streaked_shearwater_sitting.jpg",
        },
        {
          commonNameEnglish: "Flesh-footed Shearwater",
          commonNameJapanese: "アカアシミズナギドリ",
          commonNameRomaji: "akaashimizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Ardenna carneipes",
          range:
            "S Indian and sw Pacific Oceans; winters to Arabian Sea, nw Pacific",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Ardenna_carneipes_map.svg/1280px-Ardenna_carneipes_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Puffinus_carneipes_-New_Zealand_-flying-8b.jpg/1280px-Puffinus_carneipes_-New_Zealand_-flying-8b.jpg",
        },
        {
          commonNameEnglish: "Wedge-tailed Shearwater",
          commonNameJapanese: "オナガミズナギドリ",
          commonNameRomaji: "onagamizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Ardenna pacifica",
          range: "Widespread tropical Pacific and Indian oceans",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ardenna_pacifica_map.svg/1280px-Ardenna_pacifica_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Wedge_tailed_shearwater2.jpg",
        },
        {
          commonNameEnglish: "Sooty Shearwater",
          commonNameJapanese: "ハイイロミズナギドリ",
          commonNameRomaji: "haiiromizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Ardenna grisea",
          range:
            "S S. Am., New Zealand, se Australia; winters to n Pacific, n Atlantic",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sooty_Shearwater-map-localisation-fr.svg/1280px-Sooty_Shearwater-map-localisation-fr.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Puffinus_griseus_in_flight_-_SE_Tasmania.jpg/1280px-Puffinus_griseus_in_flight_-_SE_Tasmania.jpg",
        },
        {
          commonNameEnglish: "Short-tailed Shearwater",
          commonNameJapanese: "ハシボソミズナギドリ",
          commonNameRomaji: "hashibosomizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Ardenna tenuirostris",
          range: "S Australia and Tasmania; winters to n Pacific",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ardenna_tenuirostris_map.svg/1280px-Ardenna_tenuirostris_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Puffinus_tenuirostris_-_SE_Tasmania.jpg/1280px-Puffinus_tenuirostris_-_SE_Tasmania.jpg",
        },
        {
          commonNameEnglish: "Bannerman's Shearwater",
          commonNameJapanese: "オガサワラミズナギドリ",
          commonNameRomaji: "ogasawaramizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Puffinus bannermani",
          range: "Breeds Bonin and Volcano islands (off Japan)",
          profilePic:
            "https://farm5.staticflickr.com/4154/4970722880_3d0be3e328_n.jpg",
        },
        {
          commonNameEnglish: "Bryan's Shearwater",
          commonNameJapanese: "オガサワラヒメミズナギドリ",
          commonNameRomaji: "ogasawarahimemizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Puffinus bryani",
          range:
            "Range poorly known; discovered on Midway Island (Hawaii), but probably breeds Bonin Islands (Japan)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Puffinus_bryani_-_wyst%C4%99powanie.png",
        },
        {
          commonNameEnglish: "Tropical Shearwater",
          commonNameJapanese: "トロピカルミズナギドリ",
          commonNameRomaji: "toropikarumizunagidori",
          order: "Procellariiformes",
          family: "Procellariidae",
          species: "Puffinus bailloni",
          range: "Mascarene Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/P%C3%A9trel_de_Barau_.jpg/800px-P%C3%A9trel_de_Barau_.jpg",
        },
        {
          commonNameEnglish: "Oriental Stork",
          commonNameJapanese: "コウノトリ",
          commonNameRomaji: "kounotori",
          order: "Ciconiiformes",
          family: "Ciconiidae",
          species: "Ciconia boyciana",
          range: "Siberia, Manchuria and Korea; winters to s China and n India",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ciconia_boyciana_distribution_map.svg/1024px-Ciconia_boyciana_distribution_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kounotori_06f4471sv.jpg",
        },
        {
          commonNameEnglish: "Masked Booby",
          commonNameJapanese: "アオツラカツオドリ",
          commonNameRomaji: "aotsurakatsuodori",
          order: "Suliformes",
          family: "Sulidae",
          species: "Sula dactylatra melanops",
          range: "Breeds islands in w Indian Ocean",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Suladactylatrargemap.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Starr_080606-6808_Coronopus_didymus.jpg/800px-Starr_080606-6808_Coronopus_didymus.jpg",
        },
        {
          commonNameEnglish: "Brown Booby",
          commonNameJapanese: "カツオドリ",
          commonNameRomaji: "katsuodori",
          order: "Suliformes",
          family: "Sulidae",
          species: "Sula leucogaster plotus",
          range:
            "breeds on islands in the Red Sea, tropical Indian Ocean, and tropical western and central Pacific Ocean",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sula_leucogaster%2C_verspreidingskaart_met_subspp%2C_a.png/1280px-Sula_leucogaster%2C_verspreidingskaart_met_subspp%2C_a.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/6A5A3225.jpg/1280px-6A5A3225.jpg",
        },
        {
          commonNameEnglish: "Red-footed Booby",
          commonNameJapanese: "アカアシカツオドリ",
          commonNameRomaji: "akaashikatsuodori",
          order: "Suliformes",
          family: "Sulidae",
          species: "Sula sula rubripes",
          range: "Breeds islands in tropical Pacific and Indian oceans",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sula_sula_map.svg/1280px-Sula_sula_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sula_sula_by_Gregg_Yan_01.jpg/800px-Sula_sula_by_Gregg_Yan_01.jpg",
        },
        {
          commonNameEnglish: "Red-faced Cormorant",
          commonNameJapanese: "チシマウガラス",
          commonNameRomaji: "chishimaugarasu",
          order: "Suliformes",
          family: "Phalacrocoracidae",
          species: "Phalacrocorax urile",
          range: "Islands off n Japan to coastal s Alaska",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/c/ca/Phalacrocorax_urile_range_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Red-faced_Cormorant_on_St._Paul_Island_by_Lisa_Hupp_USFWS.jpg/1280px-Red-faced_Cormorant_on_St._Paul_Island_by_Lisa_Hupp_USFWS.jpg",
        },
        {
          commonNameEnglish: "Pelagic Cormorant",
          commonNameJapanese: "ヒメウ",
          commonNameRomaji: "himeu",
          order: "Suliformes",
          family: "Phalacrocoracidae",
          species: "Phalacrocorax pelagicus",
          range: "Coastal ne Asia, Bering Sea and Arctic Ocean islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pelagic_Cormorant_flying.jpg/1280px-Pelagic_Cormorant_flying.jpg",
        },
        {
          commonNameEnglish: "Great Cormorant",
          commonNameJapanese: "カワウ",
          commonNameRomaji: "kawau",
          order: "Suliformes",
          family: "Phalacrocoracidae",
          species: "Phalacrocorax carbo hanedae",
          range: "Honshu I. (Japan)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/PhalacrocoraxCarbo.png/1280px-PhalacrocoraxCarbo.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Phalacrocorax_carbo_Vic.jpg/800px-Phalacrocorax_carbo_Vic.jpg",
        },
        {
          commonNameEnglish: "Japanese Cormorant",
          commonNameJapanese: "ウミウ",
          commonNameRomaji: "umiu",
          order: "Suliformes",
          family: "Phalacrocoracidae",
          species: "Phalacrocorax capillatus",
          range: "Rocky seacoasts and islands of ne Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Phalacrocorax_capillatus_distribution.png/1024px-Phalacrocorax_capillatus_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Phalacrocorax_capillatus_20161002_Japanese_Cormorant_04.jpg/1024px-Phalacrocorax_capillatus_20161002_Japanese_Cormorant_04.jpg",
        },
        {
          commonNameEnglish: "Great Bittern",
          commonNameJapanese: "サンカノゴイ",
          commonNameRomaji: "sankanogoi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Botarus stellaris",
          range: "Palearctic and n Afrotropical region; winters to Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Botaurus_stellaris_map.svg/1280px-Botaurus_stellaris_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bittern_-_Botaurus_stellaris.jpg/800px-Bittern_-_Botaurus_stellaris.jpg",
        },
        {
          commonNameEnglish: "Yellow Bittern",
          commonNameJapanese: "ヨシゴイ",
          commonNameRomaji: "yoshigoi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ixobrychus sinensis",
          range: "S Asia, Malay Archipelago, New Guinea region and s Oceania",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ixobrychus_sinensis_-_Chinese_Garden.jpg/800px-Ixobrychus_sinensis_-_Chinese_Garden.jpg",
        },
        {
          commonNameEnglish: "Schrenck's Bittern",
          commonNameJapanese: "オオヨシゴイ",
          commonNameRomaji: "ooyoshigoi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ixobrychus eurhythmus",
          range: "E Asia; winters to SE Asia, Philippines and Greater Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/a2/Von_Schrenck%27s_Bittern_%28Ixobrychus_eurhythmus%29%2C_Central_Catchment_Nature_Reserve%2C_Singapore_-_20140327.jpg",
        },
        {
          commonNameEnglish: "Cinnamon Bittern",
          commonNameJapanese: "リュウキュウヨシゴイ",
          commonNameRomaji: "ryuukyuuyoshigoi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ixobrychus cinnamomeus",
          range: "India to SE Asia, Philippines and Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ixobrychus_cinnamomeus_map.svg/1024px-Ixobrychus_cinnamomeus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Cinnamon_bittern_or_chestnut_bittern_%28Ixobrychus_cinnamomeus%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Grey Heron",
          commonNameJapanese: "アオサギ",
          commonNameRomaji: "aosagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ardia cinerea jouyi",
          range: "Japan, China, Indochina, Malaya, Sumatra and Java",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Graureiher_Grey_Heron.jpg/800px-Graureiher_Grey_Heron.jpg",
        },
        {
          commonNameEnglish: "Purple Heron",
          commonNameJapanese: "ムラサキサギ",
          commonNameRomaji: "murasakisagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ardia purpurea manilensis",
          range: "Southern and e Asia, Indonesia and Philippine Islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/ArdeaPurpureaIUCNver2019_1.png/1280px-ArdeaPurpureaIUCNver2019_1.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Purple_heron_%28Ardea_purpurea%29_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Eastern Great Egret",
          commonNameJapanese: "ダイサギ",
          commonNameRomaji: "daisagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ardea alba",
          range: "Southern and e Asia to Indonesia, Australia and New Zealand",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ardea_modesta_map.svg/1280px-Ardea_modesta_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ardea_modesta.jpg/800px-Ardea_modesta.jpg",
        },
        {
          commonNameEnglish: "Intermediate Egret",
          commonNameJapanese: "チュウサギ",
          commonNameRomaji: "chuusagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ardea intermdeia",
          range: "Japan to s India and Greater Sundas",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ardea_intermedia_map.svg/1280px-Ardea_intermedia_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/45/Egretta_intermedia00.jpg",
        },
        {
          commonNameEnglish: "Chinese Egret",
          commonNameJapanese: "カラシラサギ",
          commonNameRomaji: "karashirasagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Egretta eulophotes",
          range: "E Asia; winters to SE Asia, Philippines and Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Egretta_eulophotes_map.svg/1024px-Egretta_eulophotes_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chinese_Egret.jpg/1024px-Chinese_Egret.jpg",
        },
        {
          commonNameEnglish: "Little Egret",
          commonNameJapanese: "コサギ",
          commonNameRomaji: "kosagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Egretta garzetta",
          range: "Widespread Eurasia, east and South Africa",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/EgrettaGarzettaIUVNver2018_2.png/1280px-EgrettaGarzettaIUVNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f1/Little_egret_%28Egretta_garzetta%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Pacific Reef Heron",
          commonNameJapanese: "クロサギ",
          commonNameRomaji: "kurosagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Egretta sacra",
          range: "Coastal SE Asia, Malay Archipelago, Oceania and Australasia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Egretta_sacra.jpg/1280px-Egretta_sacra.jpg",
        },
        {
          commonNameEnglish: "Eastern Cattle Egret",
          commonNameJapanese: "アマサギ",
          commonNameRomaji: "amasagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Bubulcus coromandus",
          range:
            "S and E Asia to Indian subcontinent, Australia and New Zealand",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Red-flush_Cattle_Egret.jpg",
        },
        {
          commonNameEnglish: "Chinese Pond Heron",
          commonNameJapanese: "アカガシラサギ",
          commonNameRomaji: "akagashirasagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Ardeola bacchus",
          range: "Lowlands of s Asia; winters to Greater Sundas",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/ArdeolaMap.svg/1024px-ArdeolaMap.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/6/63/Chinese_Pond_Heron_in_Summer.jpg",
        },
        {
          commonNameEnglish: "Striated Heron",
          commonNameJapanese: "ササゴイ",
          commonNameRomaji: "sasagoi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Butorides striata amurensis",
          range: "Manchuria to ne China, Japan, Ryukyu and Bonin islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Butorides_striata_map.svg/1280px-Butorides_striata_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Striated_Heron_-_Ermington.jpg/1280px-Striated_Heron_-_Ermington.jpg",
        },
        {
          commonNameEnglish: "Black-crowned Night-Heron",
          commonNameJapanese: "ゴイサギ",
          commonNameRomaji: "goisagi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Nycticorax nycticorax",
          range: "Eurasia south to Indonesia, Africa and Madagascar",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nycticorax_nycticorax_map.svg/1280px-Nycticorax_nycticorax_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/BCNH_CMCNJ_for_Wiki.png/1280px-BCNH_CMCNJ_for_Wiki.png",
        },
        {
          commonNameEnglish: "Japanese Night-Heron",
          commonNameJapanese: "ミゾゴイ",
          commonNameRomaji: "mizogoi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Gorsachius goisagi",
          range: "S Japan; winters se China to Ryukyu Islands and Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gorsachius_goisagi_map.svg/1024px-Gorsachius_goisagi_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Japanese_night_heron_%28Gorsachius_goisagi%29.jpg/800px-Japanese_night_heron_%28Gorsachius_goisagi%29.jpg",
        },
        {
          commonNameEnglish: "Malayan Night-Heron",
          commonNameJapanese: "ズグロミゾゴイ",
          commonNameRomaji: "zuguromizogoi",
          order: "Pelecaniformes",
          family: "Ardeidae",
          species: "Gorsachius melanolophus",
          range: "Humid forests of s Asia and Malay Archipelago",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gorsachius_melanolophus_map.svg/1024px-Gorsachius_melanolophus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/df/Malayan_Night-Heron_-_Taiwan_S4E8695_%2817320173361%29.jpg",
        },
        {
          commonNameEnglish: "Crested Ibis",
          commonNameJapanese: "トキ",
          commonNameRomaji: "toki",
          order: "Pelecaniformes",
          family: "Threskiornithidae",
          species: "Nipponia nippon",
          range: "China (several hundred birds in Shaanxi Province in 2006)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/Nipponia_nippon.jpg",
        },
        {
          commonNameEnglish: "Eurasian Spoonbill",
          commonNameJapanese: "ヘラサギ",
          commonNameRomaji: "herasagi",
          order: "Pelecaniformes",
          family: "Threskiornithidae",
          species: "Platalea leucorodia",
          range:
            "S Palearctic to India; winters to central Africa and se China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Eurasian_Spoonbill-2.jpg/1024px-Eurasian_Spoonbill-2.jpg",
        },
        {
          commonNameEnglish: "Black-faced Spoonbill",
          commonNameJapanese: "クロツラヘラサギ",
          commonNameRomaji: "kurotsuraherasagi",
          order: "Pelecaniformes",
          family: "Threskiornithidae",
          species: "Platalea minor",
          range: "Breeds ne China and Korea; winters to SE Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Black_faced_spoonbill_at_Niigata.JPG/1280px-Black_faced_spoonbill_at_Niigata.JPG",
        },
        {
          commonNameEnglish: "Eurasian Hoopoe",
          commonNameJapanese: "ヤツガシラ",
          commonNameRomaji: "yatsugashira",
          order: "Bucerotiformes",
          family: "Upupidae",
          species: "Upupa epops saturata",
          range: "E Siberia, Manchuria and n China to extreme sw China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Upupa_distribution.png/1280px-Upupa_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Common_Hoopoe_%28Upupa_epops%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Common Kingfisher",
          commonNameJapanese: "カワセミ",
          commonNameRomaji: "kawasemi",
          order: "Coraciiformes",
          family: "Alcedinidae",
          species: "Alcedo atthis bengalensis",
          range:
            "L Baikal and n India through e and SE Asia mainland and islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Alcedo_atthis_-range_map-2-cp.png/1280px-Alcedo_atthis_-range_map-2-cp.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/%E2%99%82_Common_Kingfisher_%28Alcedo_atthis%29_Photograph_By_Shantanu_Kuveskar%2C_Mangaon%2C_Maharashtra%2C_India.jpg",
        },
        {
          commonNameEnglish: "Ruddy Kingfisher",
          commonNameJapanese: "アカショウビン",
          commonNameRomaji: "akashoubin",
          order: "Coraciiformes",
          family: "Alcedinidae",
          species: "Halcyon coromanda major",
          range:
            "Japan to Korea, ne China; winters to Taiwan, Philippines, Borneo",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ruddy_Kingfisher.jpg/1280px-Ruddy_Kingfisher.jpg",
        },
        {
          commonNameEnglish: "Crested Kingfisher",
          commonNameJapanese: "ヤマセミ",
          commonNameRomaji: "yamasemi",
          order: "Coraciiformes",
          family: "Alcedinidae",
          species: "Megaceryle lugubris",
          range: "Honshu, Shikoku and Kyushu",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Greater_Pied_Kingfisher.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Megaceryle_lugubris%2C_crop.jpg",
        },
        {
          commonNameEnglish: "Dollarbird",
          commonNameJapanese: "ブッポウソウ",
          commonNameRomaji: "buppousou",
          order: "Coraciiformes",
          family: "Coraciidae",
          species: "Eurystomus orientalis",
          range:
            "breeds from the s Himalayas to the Ryukyu Islands and se Asia, the Thai-Malay Peninsula, Sumatra, Java, the Philippines, and Borneo; winters to se India, the Philippines, Sulawesi, and Helmahera",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Eurystomus_orientalis_distr.png/1024px-Eurystomus_orientalis_distr.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e8/Dollarbird_Samcem_Dec02.JPG",
        },
        {
          commonNameEnglish: "Eurasian Wryneck",
          commonNameJapanese: "アリスイ",
          commonNameRomaji: "arisui",
          order: "Piciformes",
          family: "Picidae",
          species: "Jynx torquilla",
          range: "W Europe to SE Asia and Japan; winters to Africa and s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jynx_torquilla_distr.png/1280px-Jynx_torquilla_distr.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Northern_wryneck_by_David_Raju_%28cropped%29.jpg/1280px-Northern_wryneck_by_David_Raju_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Japanese Pygmy Woodpecker",
          commonNameJapanese: "コゲラ",
          commonNameRomaji: "kogera",
          order: "Piciformes",
          family: "Picidae",
          species: "Yungipicus kizuki",
          range: "Japan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Japanese_pygmy_woodpecker_in_Sakai%2C_Osaka%2C_February_2016.jpg/1024px-Japanese_pygmy_woodpecker_in_Sakai%2C_Osaka%2C_February_2016.jpg",
        },
        {
          commonNameEnglish: "Okinawa Woodpecker",
          commonNameJapanese: "ノグチゲラ",
          commonNameRomaji: "noguchigera",
          order: "Piciformes",
          family: "Picidae",
          species: "Dendrocopos noguchii",
          range: "Okinawa (Yambaru Moutains). On verge of extinction",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dendrocopos_noguchii_distr.png",
          profilePic:
            "https://farm8.staticflickr.com/7324/11797751044_b7dd7deffd_n.jpg",
        },
        {
          commonNameEnglish: "White-backed Woodpecker",
          commonNameJapanese: "オオアカゲラ",
          commonNameRomaji: "ooakagera",
          order: "Piciformes",
          family: "Picidae",
          species: "Dendrocopos leucotos",
          range: "N, central and e Europe to ne Asia, Korea and Sakhalin",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/2/2c/White-backed_Woodpecker_Dendrocopos_leucotos_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Dendrocopos_leucotos_2.jpg/1280px-Dendrocopos_leucotos_2.jpg",
        },
        {
          commonNameEnglish: "Great Spotted Woodpecker",
          commonNameJapanese: "アカゲラ",
          commonNameRomaji: "akagera",
          order: "Piciformes",
          family: "Picidae",
          species: "Dendrocopos major japonicus",
          range: "E Manchuria, Sakhalin, Kuril Islands, Korea and n Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Dendrocopos_major_distribution_map.png/1280px-Dendrocopos_major_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Greater_Spotted_Woodpecker_%2841554059345%29.jpg/800px-Greater_Spotted_Woodpecker_%2841554059345%29.jpg",
        },
        {
          commonNameEnglish: "Lesser Spotted Woodpecker",
          commonNameJapanese: "コアカゲラ",
          commonNameRomaji: "koakagera",
          order: "Piciformes",
          family: "Picidae",
          species: "Dryobates minor amurensis",
          range: "Lower Amur River and Sakhalin to ne Korea and n Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Distribution_map_of_Lesser_Spotted_Woodpecker_%28Dryobates_minor%29.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/PicoidesMinorBack.jpg/800px-PicoidesMinorBack.jpg",
        },
        {
          commonNameEnglish: "Japanese Woodpecker",
          commonNameJapanese: "アオゲラ",
          commonNameRomaji: "aogera",
          order: "Piciformes",
          family: "Picidae",
          species: "Picus awokera",
          range: "Japan (Honshu to Tanegashima and offshore islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/4/40/Picus_awokera.JPG",
        },
        {
          commonNameEnglish: "Grey-faced Woodpecker",
          commonNameJapanese: "ヤマゲラ",
          commonNameRomaji: "yamagera",
          order: "Piciformes",
          family: "Picidae",
          species: "Picus canus",
          range: "E Siberia to ne China, Korea, Sakhalin and Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Picus_canus_distr003a.png/1280px-Picus_canus_distr003a.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/94/Grey-headed_Woodpecker_-_Italy_S4E5692.jpg",
        },
        {
          commonNameEnglish: "Black Woodpecker",
          commonNameJapanese: "クマゲラ",
          commonNameRomaji: "kumagera",
          order: "Piciformes",
          family: "Picidae",
          species: "Dryocopus martius",
          range: "Coniferous and beech forests of Eurasia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dryocopus_martius_distr.PNG/1280px-Dryocopus_martius_distr.PNG",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/BlackWoods.jpg/1280px-BlackWoods.jpg",
        },
        {
          commonNameEnglish: "Common Kestrel",
          commonNameJapanese: "チョウゲンボウ",
          commonNameRomaji: "chougenbou",
          order: "Falconiformes",
          family: "Falconidae",
          species: "Falco tinnunculus interstinctus",
          range:
            "Tibet to China and Japan; winters to India, Malaya, Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/European_Kestrel_Distribution.png/1280px-European_Kestrel_Distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Common_kestrel_falco_tinnunculus.jpg/800px-Common_kestrel_falco_tinnunculus.jpg",
        },
        {
          commonNameEnglish: "Merlin",
          commonNameJapanese: "コチョウゲンボウ",
          commonNameRomaji: "kochougenbou",
          order: "Falconiformes",
          family: "Falconidae",
          species: "Falco columbarius pacificus",
          range: "NE Asia and Sakhalin",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Falco_columbarius_distribution_map.png",
          profilePic:
            "https://farm8.staticflickr.com/7222/7206365312_3fe6b7a05d_n.jpg",
        },
        {
          commonNameEnglish: "Eurasian Hobby",
          commonNameJapanese: "チゴハヤブサ",
          commonNameRomaji: "chigohayabusa",
          order: "Falconiformes",
          family: "Falconidae",
          species: "Falco subbuteo",
          range:
            "Palearctic; winters to s Africa, s Eurasia and Greater Sundas",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/FalcoSubbuteoIUCNver2019_2.png/1280px-FalcoSubbuteoIUCNver2019_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Eurasian_Hobby_%2814574008925%29_%28cropped%29.jpg/1280px-Eurasian_Hobby_%2814574008925%29_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Gyrfalcon",
          commonNameJapanese: "シロハヤブサ",
          commonNameRomaji: "shirohayabusa",
          order: "Falconiformes",
          family: "Falconidae",
          species: "Falco rusticolus",
          range:
            "Mountains and tundra of n Palearctic region and n North America",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falco_rusticolus_white_cropped.jpg/800px-Falco_rusticolus_white_cropped.jpg",
        },
        {
          commonNameEnglish: "Peregrine Falcon",
          commonNameJapanese: "バアバリアハヤブサ",
          commonNameRomaji: "baabariahayabusa",
          order: "Falconiformes",
          family: "Falconidae",
          species: "Falco peregrinus japonensis",
          range: "NE Siberia to Kamchatka Peninsula and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PeregrineRangeMap.png/1280px-PeregrineRangeMap.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Falco_peregrinus_good_-_Christopher_Watson.jpg",
        },
        {
          commonNameEnglish: "Fairy Pitta",
          commonNameJapanese: "ヤイロチョウ",
          commonNameRomaji: "yairochou",
          order: "Passeriformes",
          family: "Pittidae",
          species: "Pitta nympha",
          range: "S Japan to Korea and se China; winters to SE Asia and Borneo",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/fe/Fairy_Pitta_3952%2C_crop.jpg",
        },
        {
          commonNameEnglish: "Ryukyu Minivet",
          commonNameJapanese: "リュウキュウサンショウクイ",
          commonNameRomaji: "ryuukyuusanshoukui",
          order: "Passeriformes",
          family: "Campephagidae",
          species: "Pericrocotus tegimae",
          range: "S Kyushu and Ryukyu Islands (s Japan)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pericrocotus_divaricatus_tegimae.jpg/1280px-Pericrocotus_divaricatus_tegimae.jpg",
        },
        {
          commonNameEnglish: "Ashy Minivet",
          commonNameJapanese: "サンショウクイ",
          commonNameRomaji: "sanshoukui",
          order: "Passeriformes",
          family: "Campephagidae",
          species: "Pericrocotus divaricatus",
          range: "NE Asia; >Philippines and Indonesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ashy_Minivet_by_Jason_Thompson_%28Cropped%29.jpg/800px-Ashy_Minivet_by_Jason_Thompson_%28Cropped%29.jpg",
        },
        {
          commonNameEnglish: "Black-naped Oriole",
          commonNameJapanese: "コウライウグイス",
          commonNameRomaji: "kouraiuguisu",
          order: "Passeriformes",
          family: "Oriolidae",
          species: "Oriolus chinensis diffusus",
          range:
            "breeds east Asia; winters from India to Indochina and the Thai-Malay Peninsula",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Black-naped_Oriole_eyeing_on_Lannea_coromandelica_fruits_W_IMG_7449.jpg",
        },
        {
          commonNameEnglish: "Tiger Shrike",
          commonNameJapanese: "チゴモズ",
          commonNameRomaji: "chigomozu",
          order: "Passeriformes",
          family: "Laniidae",
          species: "Lanius tigrinus",
          range: "NE Asia; > to SE Asia, Greater Sundas and Philippines",
          profilePic:
            "https://farm9.staticflickr.com/8175/8035659141_1b76cdaa05_n.jpg",
        },
        {
          commonNameEnglish: "Bull-headed Shrike",
          commonNameJapanese: "モズ",
          commonNameRomaji: "mozu",
          order: "Passeriformes",
          family: "Laniidae",
          species: "Lanius bucephalus",
          range: "E Asia, Japan, Korea and ne China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Lanius_bucephalus.JPG",
        },
        {
          commonNameEnglish: "Brown Shrike",
          commonNameJapanese: "アカモズ",
          commonNameRomaji: "akamozu",
          order: "Passeriformes",
          family: "Laniidae",
          species: "Lanius cristatus supercillosus",
          range: "S Sakhalin and Japan; > to Sumatra and Lesser Sundas",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/LaniusAsiaMap.svg/1280px-LaniusAsiaMap.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lanius_cristatus_-_Surin.jpg/1280px-Lanius_cristatus_-_Surin.jpg",
        },
        {
          commonNameEnglish: "Northern Shrike",
          commonNameJapanese: "オオモズ",
          commonNameRomaji: "oomozu",
          order: "Passeriformes",
          family: "Laniidae",
          species: "Lanius borealis bianchii",
          range: "Sakhalin and s Kuril Islands (n Japan)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lanius_borealis_map.svg/1280px-Lanius_borealis_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Northern_Shrike%2C_Arvada%2C_Jefferson%2C_Colorado.jpg/1280px-Northern_Shrike%2C_Arvada%2C_Jefferson%2C_Colorado.jpg",
        },
        {
          commonNameEnglish: "Coal Tit",
          commonNameJapanese: "ヒガラ",
          commonNameRomaji: "higara",
          order: "Passeriformes",
          family: "Paridae",
          species: "Periparus ater insularis",
          range: "S Kuril Islands, Japan and Cheju-Do Islands (Korea)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/PeriparusAterIUCN2018_2.png/1280px-PeriparusAterIUCN2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Coal_tit_UK09.JPG/1024px-Coal_tit_UK09.JPG",
        },
        {
          commonNameEnglish: "Iriomote Tit",
          commonNameJapanese: "オリイヤマガラ",
          commonNameRomaji: "oriiyamagara",
          order: "Passeriformes",
          family: "Paridae",
          species: "Sittiparus olivaceus",
          range: "Iriomote (s Ryukyu Islands)",
        },
        {
          commonNameEnglish: "Varied Tit",
          commonNameJapanese: "ヤマガラ",
          commonNameRomaji: "yamagara",
          order: "Passeriformes",
          family: "Paridae",
          species: "Sittiparus varius",
          range: "Kuril Islands, ne China, Korea and main Japanese islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Varied_tit_at_Tenn%C5%8Dji_Park_in_Osaka%2C_January_2016.jpg/1280px-Varied_tit_at_Tenn%C5%8Dji_Park_in_Osaka%2C_January_2016.jpg",
        },
        {
          commonNameEnglish: "Owston's Tit",
          commonNameJapanese: "オーストニャマガラ",
          commonNameRomaji: "oosutonyamagara",
          order: "Passeriformes",
          family: "Paridae",
          species: "Sittiparus owstoni",
          range: "S Izu Islands (Miyake-jima, Mikura-jima and Hachijo-jima)",
          profilePic:
            "https://farm6.staticflickr.com/5188/5849451636_1e47a52cf7_n.jpg",
        },
        {
          commonNameEnglish: "Marsh Tit",
          commonNameJapanese: "ハシブトガラ",
          commonNameRomaji: "hashibutogara",
          order: "Passeriformes",
          family: "Paridae",
          species: "Poecile palustris hensoni",
          range: "N Japan (s Kuril Islands and Hokkaido)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/d/de/Poecile_palustris_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/3a/Parus_palustris02.jpg",
        },
        {
          commonNameEnglish: "Willow Tit",
          commonNameJapanese: "コガラ",
          commonNameRomaji: "kogara",
          order: "Passeriformes",
          family: "Paridae",
          species: "Poecile montanus restrictus",
          range: "Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/Poecile_montanus_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Poecile_montanus_kleinschmidti.jpg/1280px-Poecile_montanus_kleinschmidti.jpg",
        },
        {
          commonNameEnglish: "Japanese Tit",
          commonNameJapanese: "シジュウカラ",
          commonNameRomaji: "shijuukara",
          order: "Passeriformes",
          family: "Paridae",
          species: "Parus minor",
          range: "SE Russia to Japan, Korea, sw China and e Tibet",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/ParusMajorMap.svg/1280px-ParusMajorMap.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Parus_minor_%28side%29.JPG/1280px-Parus_minor_%28side%29.JPG",
        },
        {
          commonNameEnglish: "Chinese Penduline Tit",
          commonNameJapanese: "ツリスガラ",
          commonNameRomaji: "tsurisugara",
          order: "Passeriformes",
          family: "Remizidae",
          species: "Remiz consobrinus",
          range: "Reedbeds and marshes of n China; winters to s China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Chinese_Penduline-tit_%28Remiz_consobrinus%29_Chinabeutelmeise.JPG/800px-Chinese_Penduline-tit_%28Remiz_consobrinus%29_Chinabeutelmeise.JPG",
        },
        {
          commonNameEnglish: "Bearded Reedling",
          commonNameJapanese: "ヒゲガラ",
          commonNameRomaji: "higegara",
          order: "Passeriformes",
          family: "Alaudidae",
          species: "Panurus biarmicus russicus",
          range:
            "central Europe (Austria to northern Balkans) and Asia Minor east through central Asia to northern China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/PanurusBiarmicusIUCN2019-3.png/1280px-PanurusBiarmicusIUCN2019-3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Panurus_biarmicus_-Oare_Marshes%2C_Kent%2C_England_-male-8_%283%29.jpg/800px-Panurus_biarmicus_-Oare_Marshes%2C_Kent%2C_England_-male-8_%283%29.jpg",
        },
        {
          commonNameEnglish: "Zitting Cisticola",
          commonNameJapanese: "セッカ",
          commonNameRomaji: "sekka",
          order: "Passeriformes",
          family: "Cisticolidae",
          species: "Cisticola juncidis brunniceps",
          range:
            "Japan (Honshu to Ryukyu, Izu and Cheju-Do is.) to n Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/17/Zitting_Cisticola_-_Cisticola_juncidis.JPG",
        },
        {
          commonNameEnglish: "Black browed Reed Warbler",
          commonNameJapanese: "コヨシキリ",
          commonNameRomaji: "koyoshikiri",
          order: "Passeriformes",
          family: "Acrocephalidae",
          species: "Acrocephalus bistrigiceps",
          range: "E Siberia to n China and n Manchuria; winters to s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/6/60/Acrocephalus_bistrigiceps_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/7/75/Black-browed_Reed_Warbler_by_Jason_Thompson_%28Cropped%29.jpg",
        },
        {
          commonNameEnglish: "Oriental Reed Warbler",
          commonNameJapanese: "オオヨシキリ",
          commonNameRomaji: "ooyoshikiri",
          order: "Passeriformes",
          family: "Acrocephalidae",
          species: "Acrocephalus orientalis",
          range:
            "SE Siberia to n China; winters s Asia, n Australia and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/6/66/Acrocephalus_orientalis_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/7/74/Oriental_Reed_Warbler_I_IMG_0246.jpg",
        },
        {
          commonNameEnglish: "Sakhalin Grasshopper Warbler",
          commonNameJapanese: "エゾセンユウ",
          commonNameRomaji: "ezosennyuu",
          order: "Passeriformes",
          family: "Locustellidae",
          species: "Helopsaltes amnicola",
          range:
            "Sakhalin, s Kuril Islands and Hokkaido; winters in Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d2/Locustella_amnicola_Hokkaido_Japan.jpg",
        },
        {
          commonNameEnglish: "Marsh Grassbird",
          commonNameJapanese: "オオセッカ",
          commonNameRomaji: "oosekka",
          order: "Passeriformes",
          family: "Locustellidae",
          species: "Helopsaltes pryeri",
          range: "Honshu (Japan)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Marsh_Grassbird.jpg",
        },
        {
          commonNameEnglish: "Middendorff's Grasshopper Warbler",
          commonNameJapanese: "シマセンニュウ",
          commonNameRomaji: "shimasennyuu",
          order: "Passeriformes",
          family: "Locustellidae",
          species: "Helopsaltes ochotensis",
          range:
            "E Siberia to n Japan; winters to Philippines, Borneo and Sulawesi",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/3/36/Locustella_ochotensis_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Wiki-simasennyu.jpg/1280px-Wiki-simasennyu.jpg",
        },
        {
          commonNameEnglish: "Pleske's Grasshopper Warbler",
          commonNameJapanese: "ウチヤマセンニュウ",
          commonNameRomaji: "uchiyamasennyuu",
          order: "Passeriformes",
          family: "Locustellidae",
          species: "Helopsaltes pleskei",
          range:
            "E Siberia to Korea, Kyushu and Izu Islands; winters in s China",
        },
        {
          commonNameEnglish: "Lanceolated Warbler",
          commonNameJapanese: "マキノセンニュウ",
          commonNameRomaji: "makinosennyuu",
          order: "Passeriformes",
          family: "Locustellidae",
          species: "Locustella lanceolata",
          range:
            "E Palearctic; winters to s Asia, Greater Sundas and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/0/0e/Locustella_lanceolata_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Locustella_lanceolata_71284996.jpg/1280px-Locustella_lanceolata_71284996.jpg",
        },
        {
          commonNameEnglish: "Sand Martin",
          commonNameJapanese: "ショウドウツバメ",
          commonNameRomaji: "shoudoutsubame",
          order: "Passeriformes",
          family: "Hirundinidae",
          species: "Riparia riparia",
          range: "Breeds widely in Holarctic regions; >in tropics",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Riparia_riparia_map.svg/1280px-Riparia_riparia_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/04/Riparia_riparia_-Markinch%2C_Fife%2C_Scotland_-flying-8-4c.jpg",
        },
        {
          commonNameEnglish: "Barn Swallow",
          commonNameJapanese: "ツバメ",
          commonNameRomaji: "tsubame",
          order: "Passeriformes",
          family: "Hirundinidae",
          species: "Hirundo rustica gutturalis",
          range: "E Himalayas to ne Myanmar, Japan, Korea; >n Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hirundo_rustica.png/1280px-Hirundo_rustica.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Landsvale.jpg/1280px-Landsvale.jpg",
        },
        {
          commonNameEnglish: "Pacific Swallow",
          commonNameJapanese: "リュウキュウツバメ",
          commonNameRomaji: "ryuukyuutsubame",
          order: "Passeriformes",
          family: "Hirundinidae",
          species: "Hirundo tahitica namiyei",
          range: "Ryukyu Islands and Taiwan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hirundo_rustica.png/1280px-Hirundo_rustica.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hirundo_tahitica_javanica.JPG/800px-Hirundo_tahitica_javanica.JPG",
        },
        {
          commonNameEnglish: "Red rumped Swallow",
          commonNameJapanese: "コシアカツバメ",
          commonNameRomaji: "koshiakatsubame",
          order: "Passeriformes",
          family: "Hirundinidae",
          species: "Cecropis daurica japonica",
          range:
            "Korea, e and c China and Japan; migrant to coastal n Australia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/CecropisDauricaIUCNver2018_2.png/1024px-CecropisDauricaIUCNver2018_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/a/a1/Red-rumped_Swallow_%28Cecropis_daurica%29_Photograph_by_Shantanu_Kuveskar.jpg",
        },
        {
          commonNameEnglish: "Asian House Martin",
          commonNameJapanese: "イワツバメ",
          commonNameRomaji: "iwatsubame",
          order: "Passeriformes",
          family: "Hirundinidae",
          species: "Delichon dasypus",
          range: "Siberia to Kuril Is., Japan; Greater Sundas, Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Delichondasypus.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Delichon_dasypus_-Taiwan-8-4c.jpg",
        },
        {
          commonNameEnglish: "Light vented Bulbul",
          commonNameJapanese: "シロガシラ",
          commonNameRomaji: "shirogashira",
          order: "Passeriformes",
          family: "Pycnonotidae",
          species: "Pycnonotus formosae orii",
          range: "S Ryukyu Islands (Yonaguni and Ishigaki)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chinese_Bubul.JPG/1024px-Chinese_Bubul.JPG",
        },
        {
          commonNameEnglish: "Brown eared Bulbul",
          commonNameJapanese: "ヒヨドリ",
          commonNameRomaji: "hiyodori",
          order: "Passeriformes",
          family: "Pycnonotidae",
          species: "Hypsipetes amaurotis",
          range: "North, central, southern Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Hypsipetes_amaurotis_distribution_map.png/1024px-Hypsipetes_amaurotis_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_brown-eared_bulbul_after_playing_with_water.jpg/1024px-The_brown-eared_bulbul_after_playing_with_water.jpg",
        },
        {
          commonNameEnglish: "Yellow browed Warbler",
          commonNameJapanese: "キマユムシクイ",
          commonNameRomaji: "kimayumushikui",
          order: "Passeriformes",
          family: "Phylloscopidae",
          species: "Phylloscopus inornatus",
          range:
            "Breeds Ural Mts E to Sea of Okhotsk, Mongolia, Manchuria (possibly N Korea); winters from Nepal Bangladesh E to S China, Hainan, Andaman Islands, Thailand, Mayala, SE Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Phylloscopus_inornatus_Meet_Again_368583749_crop.png",
        },
        {
          commonNameEnglish: "Eastern crowned Warbler",
          commonNameJapanese: "センダイムシクイ",
          commonNameRomaji: "sendaimushikui",
          order: "Passeriformes",
          family: "Phylloscopidae",
          species: "Phylloscopus coronatus",
          range: "Siberia and n China; winters in SE Asia and Greater Sundas",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Phylloscopus_coronatus_distribution_map.png/1024px-Phylloscopus_coronatus_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Eastern_crowned_warbler.jpg/1024px-Eastern_crowned_warbler.jpg",
        },
        {
          commonNameEnglish: "Ijima's Leaf Warbler",
          commonNameJapanese: "イイジマムシクイ",
          commonNameRomaji: "iijimamushikui",
          order: "Passeriformes",
          family: "Phylloscopidae",
          species: "Phylloscopus ijimae",
          range: "Izu Islands (s Japanese Archipelago); > n Philippines",
          profilePic:
            "https://live.staticflickr.com/5664/22092052812_fa0dc96087_n.jpg",
        },
        {
          commonNameEnglish: "Sakhalin Leaf Warbler",
          commonNameJapanese: "エゾムシクイ",
          commonNameRomaji: "ezomushikui",
          order: "Passeriformes",
          family: "Phylloscopidae",
          species: "Phylloscopus borealoides",
          range: "Sakhalin, Kuril Islands and Hokkaido (n Japan)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sakhalin_Leaf-warbler.jpg/1024px-Sakhalin_Leaf-warbler.jpg",
        },
        {
          commonNameEnglish: "Japanese Leaf Warbler",
          commonNameJapanese: "メボソムシクイ",
          commonNameRomaji: "mebosomushikui",
          order: "Passeriformes",
          family: "Phylloscopidae",
          species: "Phylloscopus xanthodryas",
          range:
            "Incompletely known. Breeds Japan (Honshu, Shikoku, Kyushu); winter range uncertain",
          profilePic:
            "https://live.staticflickr.com/5671/21241945908_3d24f68ea4_n.jpg",
        },
        {
          commonNameEnglish: "Arctic Warbler",
          commonNameJapanese: "コムシクイ",
          commonNameRomaji: "komushikui",
          order: "Passeriformes",
          family: "Phylloscopidae",
          species: "Phylloscopus borealis",
          range:
            "breeds from n Scandanvia e Siberia (excluding Kamchatka Peninsula) w Alaska, s to central Siberia, n Mongolia, ne China (ne Nei Mongol & Heilongjiang); winters from se Asia (Myanmar e to Vietnam), se China (Fujian, northern Guangdong) Taiwan s to Philippines Wallacea",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Distribution_map_for_Phylloscopus_borealis_%28pacific_centered%29.svg/1024px-Distribution_map_for_Phylloscopus_borealis_%28pacific_centered%29.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Arctic_Warbler_4683b.jpg",
        },
        {
          commonNameEnglish: "Kamchatka Leaf Warbler",
          commonNameJapanese: "オオムシクイ",
          commonNameRomaji: "oomushikui",
          order: "Passeriformes",
          family: "Phylloscopidae",
          species: "Phylloscopus examinandus",
          range:
            "Incompletely known. Breeds s Kamchatka, Sakhalin, Kurile Is, ne Hokkaido; winters at least to Indonesia",
          profilePic:
            "https://live.staticflickr.com/65535/51135825549_c1d968a61d_n.jpg",
        },
        {
          commonNameEnglish: "Asian Stubtail",
          commonNameJapanese: "ヤブサメ",
          commonNameRomaji: "yabusame",
          order: "Passeriformes",
          family: "Scotocercidae",
          species: "Urosphena squameiceps",
          range: "Breeds ne Asia; winters to SE Asia and Taiwan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/2/23/Urosphena_squameiceps.jpg",
        },
        {
          commonNameEnglish: "Japanese Bush Warbler",
          commonNameJapanese: "ウグイス",
          commonNameRomaji: "uguisu",
          order: "Passeriformes",
          family: "Scotocercidae",
          species: "Horornis diphone",
          range:
            "S Izu Islands, Bonin Islands, Volcano Islands, Daito Islands, Ryukyu Islands, S Sakhalin and s Kuril Islands; winters to se China, Main Japanese islands south to Cheju-Do Islands. Also Hawaiian Islands (introduced)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b9/Cettia_diphone_%28crying%29.JPG",
        },
        {
          commonNameEnglish: "Long tailed Tit",
          commonNameJapanese: "エナガ",
          commonNameRomaji: "enaga",
          order: "Passeriformes",
          family: "Aegithalidae",
          species: "Aegithalos caudatus",
          range:
            "Japan (Honshu, Awa-shima, Sado and Oki); Cheju-Do Is. (Korea), S Japanese islands (Shikoku, Kyushu and Yakushima), S Korea and Tsushima Is. (Kamino-shima and Shimono-shima)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Schwanzmeise_%28Aegithalos_caudatus%29_distribution_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Aegithalos_caudatus_side-on.jpg/1280px-Aegithalos_caudatus_side-on.jpg",
        },
        {
          commonNameEnglish: "Bonin white eye",
          commonNameJapanese: "メグロ",
          commonNameRomaji: "meguro",
          order: "Passeriformes",
          family: "Zosteropidae",
          species: "Apalopteron familiare",
          range:
            "Muko-Shima (n Bonin Islands), Haha-Shima Group (s Bonin Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bonin_white-eye_cropped.jpg/1280px-Bonin_white-eye_cropped.jpg",
        },
        {
          commonNameEnglish: "Warbling white eye",
          commonNameJapanese: "メジロ",
          commonNameRomaji: "mejiro",
          order: "Passeriformes",
          family: "Zosteropidae",
          species: "Zosterops japonicus",
          range:
            "southern Sakhalin Island, Japan, and the southern Korean Peninsula; partially migratory, withdrawing from Sakhalin Island and northern Japan in the nonbreeding season",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Japanese_white-eye_at_Tenn%C5%8Dji_Park_in_Osaka%2C_January_2016_III.jpg/1280px-Japanese_white-eye_at_Tenn%C5%8Dji_Park_in_Osaka%2C_January_2016_III.jpg",
        },
        {
          commonNameEnglish: "Goldcrest",
          commonNameJapanese: "キクイタダキ",
          commonNameRomaji: "kikuitadaki",
          order: "Passeriformes",
          family: "Regulidae",
          species: "Regulus regulus japonensis",
          range: "Mts. of Manchuria to n and e China, Korea and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/Regulus_regulus_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Goldcrest_1.jpg/1024px-Goldcrest_1.jpg",
        },
        {
          commonNameEnglish: "Eurasian Nuthatch",
          commonNameJapanese: "ゴジュウガラ",
          commonNameRomaji: "gojuugara",
          order: "Passeriformes",
          family: "Sittidae",
          species: "Sitta europaea",
          range:
            "S Japan (S Kyushu), Russia to ne China, Korea and Honshu (n Japan), central and s Japan (Honshu, Shikoku, and N Kyushu)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sitta_europaea_map.png/1024px-Sitta_europaea_map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kleiber_Sitta_europaea-0447.jpg/1024px-Kleiber_Sitta_europaea-0447.jpg",
        },
        {
          commonNameEnglish: "Eurasian Treecreeper",
          commonNameJapanese: "キバシリ",
          commonNameRomaji: "kibashiri",
          order: "Passeriformes",
          family: "Certhiidae",
          species: "Certhia familiaris japonica",
          range: "Japan (Honshu, Shikoku and Kyushu)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Certhia_familiaris_Certhia_hodgsoni.png/1024px-Certhia_familiaris_Certhia_hodgsoni.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/0/04/Certhia_familiaris_01.jpg",
        },
        {
          commonNameEnglish: "Eurasian Wren",
          commonNameJapanese: "ミソサザイ",
          commonNameRomaji: "misosazai",
          order: "Passeriformes",
          family: "Troglodytidae",
          species: "Troglodytes troglodytes",
          range:
            "N Kuril Islands (Shasukotan and Ushichi), S Kuril Islands and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Troglodytes_troglodytes-map.jpg/1024px-Troglodytes_troglodytes-map.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ein_neugieriger_Zaunk%C3%B6nig.jpg/1024px-Ein_neugieriger_Zaunk%C3%B6nig.jpg",
        },
        {
          commonNameEnglish: "Brown Dipper",
          commonNameJapanese: "カワガラス",
          commonNameRomaji: "kawagarasu",
          order: "Passeriformes",
          family: "Cinclidae",
          species: "Cinclus pallasii",
          range:
            "Mts. of ne Asia, Japan, e and central China, Taiwan, n Thailand, n Vietnam",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cinclus_pallasii_distr01.png/1024px-Cinclus_pallasii_distr01.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cinclus_pallasii_%28side%29.JPG/1024px-Cinclus_pallasii_%28side%29.JPG",
        },
        {
          commonNameEnglish: "Chestnut cheeked Starling",
          commonNameJapanese: "コムクドリ",
          commonNameRomaji: "komukudori",
          order: "Passeriformes",
          family: "Sturnidae",
          species: "Agropsar philippensis",
          range:
            "S Sakhalin, Kuril Is. and n Japan; winters to Philippines, e Indies",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sturnus_philippensis.jpg/1024px-Sturnus_philippensis.jpg",
        },
        {
          commonNameEnglish: "White shouldered Starling",
          commonNameJapanese: "カラムクドリ",
          commonNameRomaji: "karamukudori",
          order: "Passeriformes",
          family: "Sturnidae",
          species: "Sturnia sinensis",
          range: "S China to Indochina; winters to SE Asia and n Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sturnia_sinensis_%28Mandarinstar_-_White-shouldered_Starling%29_-_Weltvogelpark_Walsrode_2013-03.jpg/1024px-Sturnia_sinensis_%28Mandarinstar_-_White-shouldered_Starling%29_-_Weltvogelpark_Walsrode_2013-03.jpg",
        },
        {
          commonNameEnglish: "White cheeked Starling",
          commonNameJapanese: "ムクドリ",
          commonNameRomaji: "mukudori",
          order: "Passeriformes",
          family: "Sturnidae",
          species: "Spodiopsar cineraceus",
          range: "NE Asia; winters in s China and Philippines",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Spodiopsar_cineraceus_distribution.png/1024px-Spodiopsar_cineraceus_distribution.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/d/d4/Mukudori_05z4384cs.jpg",
        },
        {
          commonNameEnglish: "White's Thrush",
          commonNameJapanese: "トラツグミ",
          commonNameRomaji: "toratsugumi",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Zoothera aurea toratugumi",
          range: "Manchuria and Japan; winters in Taiwan and Lan-yü I.",
          profilePic:
            "https://live.staticflickr.com/65535/50397628186_e98ea75311_n.jpg",
        },
        {
          commonNameEnglish: "Scaly Thrush",
          commonNameJapanese: "カッショクトラツグミ",
          commonNameRomaji: "kasshokutoratsugumi",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Zoothera dauma iriomotensis",
          range: "Iriomotejima (southern Ryukyu Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Scaly_Thursh_%28cropped%29.jpg/800px-Scaly_Thursh_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Amami Thrush",
          commonNameJapanese: "オオトラツグミ",
          commonNameRomaji: "ootoratsugumi",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Zoothera major",
          range: "Amami-O-Shima (n Ryukyu Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Zoothera_major_cropped.jpg/1024px-Zoothera_major_cropped.jpg",
        },
        {
          commonNameEnglish: "Siberian Thrush",
          commonNameJapanese: "マミジロ",
          commonNameRomaji: "mamijiro",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Geokichla sibirica davisoni",
          range:
            "Sakhalin I. and n Japan; winters to s China, SE Asia and Sumatra",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Geokichla_sibirica.jpg/1024px-Geokichla_sibirica.jpg",
        },
        {
          commonNameEnglish: "Japanese Thrush",
          commonNameJapanese: "クロツグミ",
          commonNameRomaji: "kurotsugumi",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Turdus cardis",
          range: "Central China and Japan; winters to s China and Indochina",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e7/Wiki-kurotsugumi-1.jpg",
        },
        {
          commonNameEnglish: "Eyebrowed Thrush",
          commonNameJapanese: "マミチャジナイ",
          commonNameRomaji: "mamichajinai",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Turdus obscurus",
          range:
            "Siberia, Mongolia and Japan; winters to Indonesia and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/c/c6/Eyebrowed_Thrush.jpg",
        },
        {
          commonNameEnglish: "Brown headed Thrush",
          commonNameJapanese: "アカハラ",
          commonNameRomaji: "akahara",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Turdus chrysolaus",
          range:
            "Sakhalin I. (Russia) to n Japan; winters to s China, Philippines, main Japanese islands and Ryukyu Is.",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/Akahara_08f2218.jpg",
        },
        {
          commonNameEnglish: "Izu Thrush",
          commonNameJapanese: "アカコッコ",
          commonNameRomaji: "akakokko",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Turdus celaenops",
          range: "Izu Islands and Yakushima (Ryukyu Islands)",
          profilePic:
            "https://farm7.staticflickr.com/6207/6094001920_dc941b91e5_n.jpg",
        },
        {
          commonNameEnglish: "Pale Thrush",
          commonNameJapanese: "シロハラ",
          commonNameRomaji: "shirohara",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Turdus pallidus",
          range:
            "NE Siberia to Kuril Is. and Japan; winters to SE Asia and Sumatra",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Pale_Thrush_-_Taiwan_S4E8071_%2817027483687%29.jpg/1024px-Pale_Thrush_-_Taiwan_S4E8071_%2817027483687%29.jpg",
        },
        {
          commonNameEnglish: "Dusky Thrush",
          commonNameJapanese: "ツグミ",
          commonNameRomaji: "tsugumi",
          order: "Passeriformes",
          family: "Turdidae",
          species: "Turdus eunomus",
          range:
            "N Siberia to Kamchatka; winters to Japan, s China and Myanmar",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Turdus_eunomus_-Japan-8.jpg/1024px-Turdus_eunomus_-Japan-8.jpg",
        },
        {
          commonNameEnglish: "Gray streaked Flycatcher",
          commonNameJapanese: "エゾビタキ",
          commonNameRomaji: "ezobitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Muscicapa griseisticta",
          range: "SE Siberia to ne China; > to New Guinea and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Muscicapa_griseisticta.JPG/1024px-Muscicapa_griseisticta.JPG",
        },
        {
          commonNameEnglish: "Dark sided Flycatcher",
          commonNameJapanese: "サメビタキ",
          commonNameRomaji: "samebitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Muscicapa sibirica",
          range: "SE Siberia to Japan; > to Indochina and Greater Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Muscicapa_sibirica.jpg/1024px-Muscicapa_sibirica.jpg",
        },
        {
          commonNameEnglish: "Asian Brown Flycatcher",
          commonNameJapanese: "コサメビタキ",
          commonNameRomaji: "kosamebitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Muscicapa dauurica",
          range: "Siberia to Japan, s China and India; > to Greater Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Asian_Brown_Flycatcher_%28Muscicapa_dauurica%29_at_Periyar_National_Park.jpg/800px-Asian_Brown_Flycatcher_%28Muscicapa_dauurica%29_at_Periyar_National_Park.jpg",
        },
        {
          commonNameEnglish: "Blue and white Flycatcher",
          commonNameJapanese: "オオルリ",
          commonNameRomaji: "ooruri",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Cyanoptila cyanomelana",
          range:
            "breeds Japan and southern Kuril Islands; the species winters south to Myanmar, Thailand, and the Greater Sundas",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Blue_and_white_flycatcher.jpg/1024px-Blue_and_white_flycatcher.jpg",
        },
        {
          commonNameEnglish: "Rufous tailed Robin",
          commonNameJapanese: "シマゴマ",
          commonNameRomaji: "shimagoma",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Larvivora sibilans",
          range: "Breeds s Siberia to Sea of Okhotsk; > s China to SE Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Luscinia_sibilans_-_Khao_Yai.jpg/1024px-Luscinia_sibilans_-_Khao_Yai.jpg",
        },
        {
          commonNameEnglish: "Japanese Robin",
          commonNameJapanese: "アカヒゲ",
          commonNameRomaji: "akahige",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Larvivora akahige",
          range:
            "S Kuril and Sakhalin is. to n Japanese Arch.; > to s China, Rishiri I., S Japanese Arch.",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/7/78/Japanese_Robin_9625.jpg",
        },
        {
          commonNameEnglish: "Ryukyu Robin",
          commonNameJapanese: "コマドリ",
          commonNameRomaji: "komadori",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Larvivora komadori",
          range:
            "Ryukyu Is. (Tanega-Shima, Amami-O-Shima, Tokuno-Shima), S Ryukyu Islands (Ishigaki, Iriomote and Yonaguni), Okinawa",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Luscinia_komadori_female_2.jpg/1024px-Luscinia_komadori_female_2.jpg",
        },
        {
          commonNameEnglish: "Siberian Blue Robin",
          commonNameJapanese: "コルリ",
          commonNameRomaji: "koruri",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Larvivora cyane",
          range:
            "breeds e Siberia to ne China, Korea and Japan; the species winters in s China, Indochina, the Thai-Malay Peninsula, Sumatra, Java, and Borneo",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Luscinia_cyane_-_Khao_Yai.jpg/1024px-Luscinia_cyane_-_Khao_Yai.jpg",
        },
        {
          commonNameEnglish: "Siberian Rubythroat",
          commonNameJapanese: "ノゴマ",
          commonNameRomaji: "nogoma",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Calliope calliope",
          range: "Siberia to Japan; > to SE Asia, Philippines and Palau Is.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Luscinia_calliope_distribution.jpg/1024px-Luscinia_calliope_distribution.jpg",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Luscinia_calliope_-_Pak_Chong_2.jpg/1024px-Luscinia_calliope_-_Pak_Chong_2.jpg",
        },
        {
          commonNameEnglish: "Red flanked Bluetail",
          commonNameJapanese: "ルリビタキ",
          commonNameRomaji: "ruribitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Tarsiger cyanurus",
          range:
            "breeds from Finland and n Russia e to Mongolia, ne China, Korea, and Japan; resident in Japan (except for Hokkaido)",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TarsigerCyanurusIUCNver2019_1.png/1024px-TarsigerCyanurusIUCNver2019_1.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tarsiger_cyanurus.jpg/1024px-Tarsiger_cyanurus.jpg",
        },
        {
          commonNameEnglish: "Yellow rumped Flycatcher",
          commonNameJapanese: "マミジロキビタキ",
          commonNameRomaji: "mamijirokibitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Ficedula zanthopygia",
          range: "Mountains of ne Asia; > in SE Asia and Greater Sundas",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/FicedulaZanthopygiaMap.svg/1024px-FicedulaZanthopygiaMap.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/%C4%90%E1%BB%9Bp_ru%E1%BB%93i_v%C3%A0ng_%28cropped%29.jpg/1024px-%C4%90%E1%BB%9Bp_ru%E1%BB%93i_v%C3%A0ng_%28cropped%29.jpg",
        },
        {
          commonNameEnglish: "Narcissus Flycatcher",
          commonNameJapanese: "キビタキ",
          commonNameRomaji: "kibitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Ficedula narcissina",
          range:
            "Sakhalin to Japan; > to Philippines and Borneo, S Ryukyu Islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/FicedulaZanthopygiaMap.svg/1024px-FicedulaZanthopygiaMap.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Narcissus_Flycatcher-cropped.jpg/1024px-Narcissus_Flycatcher-cropped.jpg",
        },
        {
          commonNameEnglish: "Mugimaki Flycatcher",
          commonNameJapanese: "ムギマキ",
          commonNameRomaji: "mugimaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Ficedula mugimaki",
          range: "SE Siberia, Sakhalin and ne China; > to SE Asia, Indonesia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ficedula_mugimaki_-_Khao_Yai.jpg/800px-Ficedula_mugimaki_-_Khao_Yai.jpg",
        },
        {
          commonNameEnglish: "Daurian Redstart",
          commonNameJapanese: "ジョウビタキ",
          commonNameRomaji: "joubitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Phoenicurus auroreus",
          range: "S Siberia to Mongolia; > to Japan and Ryukyu Islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Daurian_redstart_at_Daisen_Park_in_Osaka%2C_January_2016.jpg/1024px-Daurian_redstart_at_Daisen_Park_in_Osaka%2C_January_2016.jpg",
        },
        {
          commonNameEnglish: "Blue rock Thrush",
          commonNameJapanese: "イソヒヨドリ",
          commonNameRomaji: "isohiyodori",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Monticola solitarius philippensis",
          range:
            "SE Siberia to China, Japan and Lan-yü I.; winters to Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/MonticolaSolitariusIUCNver2019_1.png/1024px-MonticolaSolitariusIUCNver2019_1.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Monticola_solitarius%2C_Spain_1.jpg/1024px-Monticola_solitarius%2C_Spain_1.jpg",
        },
        {
          commonNameEnglish: "Siberian Stonechat",
          commonNameJapanese: "ノビタキ",
          commonNameRomaji: "nobitaki",
          order: "Passeriformes",
          family: "Muscicapidae",
          species: "Saxicola stejnegeri",
          range: "E Siberia to Japan and Korea; > to s China and Indochina",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Siberian_stonechat_Male.jpg/1024px-Siberian_stonechat_Male.jpg",
        },
        {
          commonNameEnglish: "Bohemian Waxwing",
          commonNameJapanese: "キレンジャク",
          commonNameRomaji: "kirenjaku",
          order: "Passeriformes",
          family: "Bombycillidae",
          species: "Bombycilla garrulus",
          range:
            "Central Siberia to Sea of Okhotsk; winters to s China and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/BombycillaGarrulusIUCNver2019_1.png/1024px-BombycillaGarrulusIUCNver2019_1.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bombycilla_garrulusII.jpg/1024px-Bombycilla_garrulusII.jpg",
        },
        {
          commonNameEnglish: "Japanese Waxwing",
          commonNameJapanese: "ヒレンジャク",
          commonNameRomaji: "hirenjaku",
          order: "Passeriformes",
          family: "Bombycillidae",
          species: "Bombycilla japonica",
          range:
            "SE Siberia and n Manchuria; winters to s China and Ryukyu Is.",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Bombycilla_japonica.jpg",
        },
        {
          commonNameEnglish: "Alpine Accentor",
          commonNameJapanese: "イワヒバリ",
          commonNameRomaji: "iwahibari",
          order: "Passeriformes",
          family: "Prunellidae",
          species: "Prunella collaris erythropygia",
          range: "Altai Mts. to n China, Sea of Okhotsk, Korea and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Prunella_collaris_dist.png/1024px-Prunella_collaris_dist.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Alpine_Accentor_Lungthu_Pangolakha_WLS_East_Sikkim_India_08.11.2015.jpg",
        },
        {
          commonNameEnglish: "Japanese Accentor",
          commonNameJapanese: "カヤクグリ",
          commonNameRomaji: "kayakuguri",
          order: "Passeriformes",
          family: "Prunellidae",
          species: "Prunella rubida",
          range:
            "S Kuril Islands, Shikoku and Hokkaido, Honshu; winters to Kyushu",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Prunella_rubida_in_Mount_Norikura_s2.JPG/1024px-Prunella_rubida_in_Mount_Norikura_s2.JPG",
        },
        {
          commonNameEnglish: "Russet Sparrow",
          commonNameJapanese: "ニュウナイスズメ",
          commonNameRomaji: "nyuunaisuzume",
          order: "Passeriformes",
          family: "Passeridae",
          species: "Passer cinnamomeus rutilans",
          range:
            "Sakhalin to Japan, South Korea, e Manchuria, s China and Taiwan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Russet_range.png/1024px-Russet_range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Passer_rutilans.JPG",
        },
        {
          commonNameEnglish: "Eurasian Tree Sparrow",
          commonNameJapanese: "スズメ",
          commonNameRomaji: "suzume",
          order: "Passeriformes",
          family: "Passeridae",
          species: "Passer montanus saturatus",
          range:
            "S Kuril Is., Japan, South Korea, Ryukyu Is., Taiwan and se China",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Passermontanusmap.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tree_Sparrow_Japan_Flip.jpg/1024px-Tree_Sparrow_Japan_Flip.jpg",
        },
        {
          commonNameEnglish: "Grey Wagtail",
          commonNameJapanese: "キセキレイ",
          commonNameRomaji: "kisekirei",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Motacilla cinerea",
          range:
            "breeds in Eurasia, from the Canary Islands, Europe, and north Africa (Atlas Mountains) east to Siberia and Japan; winters to north and east Africa, southern Asia, and southeastern Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/MotacillaCinereaDistributionMapIUCNv8_2.png/1024px-MotacillaCinereaDistributionMapIUCNv8_2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grey_wagtail_by_Gunjan_Pandey.jpg/1024px-Grey_wagtail_by_Gunjan_Pandey.jpg",
        },
        {
          commonNameEnglish: "Eastern Yellow Wagtail",
          commonNameJapanese: "ツメナガセキレイ",
          commonNameRomaji: "tsumenagasekirei",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Motacilla tschutschensis taivana",
          range: "SE Siberia to Sea of Okhotsk and n Japan; >s Asia, Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Motacilla_tschutschensis_map.svg/1024px-Motacilla_tschutschensis_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Motacilla_tschutschensis%2C_Tomohon%2C_North_Sulawesi.jpg/1024px-Motacilla_tschutschensis%2C_Tomohon%2C_North_Sulawesi.jpg",
        },
        {
          commonNameEnglish: "Japanese Wagtail",
          commonNameJapanese: "セグロセキレイ",
          commonNameRomaji: "segurosekirei",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Motacilla grandis",
          range: "Breeds Japanese Islands; >China, Korea and Taiwan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Motacilla_grandis_-Japan-8.jpg/1024px-Motacilla_grandis_-Japan-8.jpg",
        },
        {
          commonNameEnglish: "White Wagtail",
          commonNameJapanese: "ハクセキレイ",
          commonNameRomaji: "hakusekirei",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Motacilla alba",
          range:
            "SE Russia to n Korea and Japan.; >Myanmar to se China, C & e China, Russian Far East, Korea, sw Japan; >n India, s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/White_Wagtail_Range.png/1024px-White_Wagtail_Range.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/White_wagtail_female_first_summer.jpg/1024px-White_wagtail_female_first_summer.jpg",
        },
        {
          commonNameEnglish: "Richard's Pipit",
          commonNameJapanese: "マミジロタヒバリ",
          commonNameRomaji: "mamijirotahibari",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Anthus richardi",
          range: "SE Russia to e China (probably Korea); >SE Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Anthus_richardi_-_Laem_Pak_Bia.jpg/1024px-Anthus_richardi_-_Laem_Pak_Bia.jpg",
        },
        {
          commonNameEnglish: "Olive backed Pipit",
          commonNameJapanese: "ビンズイ",
          commonNameRomaji: "binzui",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Anthus hodgsoni",
          range: "Himalayas to China and Japan; >SE Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Olive-backed_pipit_%28Anthus_hodgsoni_hodgsoni%29_Phulchowki.jpg/1024px-Olive-backed_pipit_%28Anthus_hodgsoni_hodgsoni%29_Phulchowki.jpg",
        },
        {
          commonNameEnglish: "Red throated Pipit",
          commonNameJapanese: "ムネアカタヒバリ",
          commonNameRomaji: "muneakatahibari",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Anthus cervinus",
          range: "Tundra of n Palearctic, Alaska; >Africa and Indonesia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/AnthusCervinusIUCNver2019_1.png/1024px-AnthusCervinusIUCNver2019_1.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Red-throated_Pipit.jpg/1024px-Red-throated_Pipit.jpg",
        },
        {
          commonNameEnglish: "American Pipit",
          commonNameJapanese: "アメリカタヒバリ",
          commonNameRomaji: "amerikatahibari",
          order: "Passeriformes",
          family: "Motacillidae",
          species: "Anthus rubescens japonicus",
          range: "E Siberia (s of rubescens); >s China, India and Myanmar",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Anthus_rubescens_map.svg/1024px-Anthus_rubescens_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Anthus_rubescens_-Harney_County%2C_Oregon%2C_USA-8.jpg/1024px-Anthus_rubescens_-Harney_County%2C_Oregon%2C_USA-8.jpg",
        },
        {
          commonNameEnglish: "Brambling",
          commonNameJapanese: "アトリ",
          commonNameRomaji: "atori",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Fringilla montifringilla",
          range: "N Eurasia; winters Mediterranean region and s Asia",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Fringilla_montifringilla_map.svg/1024px-Fringilla_montifringilla_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/c/c9/Fringilla_montifringilla_-Poland_-male-8.jpg",
        },
        {
          commonNameEnglish: "Hawfinch",
          commonNameJapanese: "シメ",
          commonNameRomaji: "shime",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Coccothraustes coccothraustes japonicus",
          range:
            "Sakhalin, Hokkaido and n Honshu; winters to e China and Bonin Is.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Rangemap-grosbec.png/1024px-Rangemap-grosbec.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Coccothraustes_coccothraustes_Parco_Della_Piana_around_Firenze%2C_Italy.jpg/800px-Coccothraustes_coccothraustes_Parco_Della_Piana_around_Firenze%2C_Italy.jpg",
        },
        {
          commonNameEnglish: "Chinese Grosbeak",
          commonNameJapanese: "コイカル",
          commonNameRomaji: "koikaru",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Eophona migratoria",
          range: "E Manchuria to North Korea; winters to e China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Eophona_migratoria_1.jpg/800px-Eophona_migratoria_1.jpg",
        },
        {
          commonNameEnglish: "Japanese Grosbeak",
          commonNameJapanese: "イカル",
          commonNameRomaji: "ikaru",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Eophona personata",
          range:
            "Japan (Hokkaido to Honshu); winters to s Japan, e China, Taiwan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Eophana_personata-Map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Japanese_Grosbeak_-_Honshu_-_Japan_S4E2393_%2822418840923%29.jpg",
        },
        {
          commonNameEnglish: "Long tailed Rosefinch",
          commonNameJapanese: "ベニマシコ",
          commonNameRomaji: "benimashiko",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Carpodacus sibiricus sanguinolentus",
          range:
            "Sakhalin, s Kuril Is. and Hokkaido; winters to s Japanese islands",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Uragus_sibiricus.jpg/1024px-Uragus_sibiricus.jpg",
        },
        {
          commonNameEnglish: "Pallas's Rosefinch",
          commonNameJapanese: "オオマシコ",
          commonNameRomaji: "oomashiko",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Carpodacus roseus",
          range:
            "Siberia and n Mongolia; winters to n China and Japan, Sakhalin; winters to s Korea and n Japan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Carpodacus_roseus.jpg/1024px-Carpodacus_roseus.jpg",
        },
        {
          commonNameEnglish: "Pine Grosbeak",
          commonNameJapanese: "ギンザンマシコ",
          commonNameRomaji: "ginzanmashiko",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Pinicola enucleator sakhalinensis",
          range: "Sakhalin, Kuril Islands and high mountains of Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pinicola_enucleator-Map.png/1024px-Pinicola_enucleator-Map.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pine_Grosbeak_%28Pinicola_enucleator%29_%2813667564073%29.jpg/1024px-Pine_Grosbeak_%28Pinicola_enucleator%29_%2813667564073%29.jpg",
        },
        {
          commonNameEnglish: "Eurasian Bullfinch",
          commonNameJapanese: "ウソ",
          commonNameRomaji: "uso",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Pyrrhula pyrrhula",
          range:
            "E Manchuria to Sakhalin, Kuril Is. and Honshu; winters to Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/PyrrhulaPyrrhulaIUCN2019-3.png/1024px-PyrrhulaPyrrhulaIUCN2019-3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bullfinch_male.jpg/1024px-Bullfinch_male.jpg",
        },
        {
          commonNameEnglish: "Asian Rosy Finch",
          commonNameJapanese: "ハギマシコ",
          commonNameRomaji: "hagimashiko",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Leucosticte arctoa brunneonucha",
          range:
            "Mts. of e Siberia (Lena River to Kamchatka and Kuril Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Leucosticte_arctoa.jpg/1024px-Leucosticte_arctoa.jpg",
        },
        {
          commonNameEnglish: "Grey capped Greenfinch",
          commonNameJapanese: "カワラヒワ",
          commonNameRomaji: "kawarahiwa",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Chloris sinica kawarahiba",
          range:
            "Kamchatka, Kuril Is., Sakhalin and Hokkaido; winters to Japan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Oriental_Greenfinch_-_Honshu_-_Japan_S4E2635_%2823026479292%29.jpg/1024px-Oriental_Greenfinch_-_Honshu_-_Japan_S4E2635_%2823026479292%29.jpg",
        },
        {
          commonNameEnglish: "Common Redpoll",
          commonNameJapanese: "ベニヒワ",
          commonNameRomaji: "benihiwa",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Acanthis flammea",
          range: "N Eurasia and n North America",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Acanthis_distribution_map.svg/1024px-Acanthis_distribution_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Carduelis_flammea_CT6.jpg/1024px-Carduelis_flammea_CT6.jpg",
        },
        {
          commonNameEnglish: "Red Crossbill",
          commonNameJapanese: "イスカ",
          commonNameRomaji: "isuka",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Loxia curvirostra japonica",
          range:
            "Extreme ne Asia; winters to e-cent. China and s Japanese islands",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/LoxiaCurvirostraIUCN2019-3.png/1024px-LoxiaCurvirostraIUCN2019-3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Red_Crossbills_%28Male%29.jpg/1024px-Red_Crossbills_%28Male%29.jpg",
        },
        {
          commonNameEnglish: "Eurasian Siskin",
          commonNameJapanese: "マヒワ",
          commonNameRomaji: "mahiwa",
          order: "Passeriformes",
          family: "Fringillidae",
          species: "Spinus spinus",
          range:
            "N Palearctic; winters Mediterranean region, China and Ryukyu Is.",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/Rangemap-tarin.PNG",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/9/9e/Carduelis_spinus_male.jpg",
        },
        {
          commonNameEnglish: "Lapland Longspur",
          commonNameJapanese: "ツメナガホオジロ",
          commonNameRomaji: "tsumenagahoojiro",
          order: "Passeriformes",
          family: "Calcariidae",
          species: "Calcarius lapponicus",
          range: "E Siberia, Kamchatka Pen. and Komandorskiye Is.; > to Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Calcarius_lapponicus_map.svg/1024px-Calcarius_lapponicus_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/6/61/Lapland_Longspur_-_Calcarius_lapponicus_-_Sportittlingur_1.jpg",
        },
        {
          commonNameEnglish: "Snow Bunting",
          commonNameJapanese: "ユキホオジロ",
          commonNameRomaji: "yukihoojiro",
          order: "Passeriformes",
          family: "Calcariidae",
          species: "Plectrophenax nivalis vlasowae",
          range: "Tundra of ne Asia; > to c Asia, Manchuria and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plectrophenax_nivalis_map.svg/1024px-Plectrophenax_nivalis_map.svg.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Plectrophenax_nivalis1.jpg/1024px-Plectrophenax_nivalis1.jpg",
        },
        {
          commonNameEnglish: "Chestnut eared Bunting",
          commonNameJapanese: "ホオアカ",
          commonNameRomaji: "hooaka",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza fucata",
          range: "Mountains of Mongolia and Manchuria to Korea and Japan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Emberiza_fucata.jpg/1024px-Emberiza_fucata.jpg",
        },
        {
          commonNameEnglish: "Meadow Bunting",
          commonNameJapanese: "ホオジロ",
          commonNameRomaji: "hoojiro",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza cioides ciopsis",
          range: "S Kuril and Japanese islands; > from Honshu southward",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Emberiza_cioides_male.JPG/1024px-Emberiza_cioides_male.JPG",
        },
        {
          commonNameEnglish: "Pine Bunting",
          commonNameJapanese: "シラガホオジロ",
          commonNameRomaji: "shiragahoojiro",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza leucocephalos",
          range: "Siberia to Sakhalin and Tibet; > to Iraq, India and China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pine_Bunting_%28Emberiza_leucocephalos%29_-_%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%88%D0%B0%D0%BD%D0%B0%D0%B0%D1%82_%D1%85%D3%A9%D0%BC%D1%80%D3%A9%D0%B3_%2815617685422%29.jpg/1024px-Pine_Bunting_%28Emberiza_leucocephalos%29_-_%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%88%D0%B0%D0%BD%D0%B0%D0%B0%D1%82_%D1%85%D3%A9%D0%BC%D1%80%D3%A9%D0%B3_%2815617685422%29.jpg",
        },
        {
          commonNameEnglish: "Yellow throated Bunting",
          commonNameJapanese: "ミヤマホオジロ",
          commonNameRomaji: "miyamahoojiro",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza elegans",
          range: "Manchuria and n Korea; > to s Korea, s Japan and e China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Emberiza_elegans_male_and_female.JPG/1024px-Emberiza_elegans_male_and_female.JPG",
        },
        {
          commonNameEnglish: "Japanese Reed Bunting",
          commonNameJapanese: "コジュリン",
          commonNameRomaji: "kojurin",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza yessoensis",
          range: "Japan (Hokkaido, Honshu and s Kuril Islands)",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/A_Japanese_reed_bunting.jpg/800px-A_Japanese_reed_bunting.jpg",
        },
        {
          commonNameEnglish: "Common Reed Bunting",
          commonNameJapanese: "オオジュリン",
          commonNameRomaji: "oojurin",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza schoeniclus pyrrhulina",
          range: "Transbaikalia to Kamchatka, Kuril Is., Sakhalin, Hokkaido",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/EmberizaSchoeniclusIUCN2019-3.png/1024px-EmberizaSchoeniclusIUCN2019-3.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Common_reed_bunting_%28emberiza_schoeniclus%29_m.jpg/1024px-Common_reed_bunting_%28emberiza_schoeniclus%29_m.jpg",
        },
        {
          commonNameEnglish: "Yellow breasted Bunting",
          commonNameJapanese: "シマアオジ",
          commonNameRomaji: "shimaaoji",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza aureola ornata",
          range: "Amur River to Manchuria, N Korea, Kamchatka and Kuril Is.",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yellow-breasted_bunting_in_Nepal_02_-Cropped.jpg/800px-Yellow-breasted_bunting_in_Nepal_02_-Cropped.jpg",
        },
        {
          commonNameEnglish: "Little Bunting",
          commonNameJapanese: "コホオアカ",
          commonNameRomaji: "kohooaka",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza pusilla",
          range: "Taiga of n Eurasia; > to India, SE Asia and Philippines",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zwergammer.jpg/1920px-Zwergammer.jpg",
        },
        {
          commonNameEnglish: "Rustic Bunting",
          commonNameJapanese: "カシラダカ",
          commonNameRomaji: "kashiradaka",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza rustica",
          range: "Taiga of n Eurasia; > to e China and Japan",
          rangeMap:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/EmberizaRusticaIUCN2019-2.png/1280px-EmberizaRusticaIUCN2019-2.png",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/Emberiza_rustica2.jpg",
        },
        {
          commonNameEnglish: "Yellow Bunting",
          commonNameJapanese: "ノジコ",
          commonNameRomaji: "nojiko",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza sulphurata",
          range: "Honshu (Japan); > e China, n Philippines and Taiwan",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Emberiza_sulphurata.jpg",
        },
        {
          commonNameEnglish: "Black faced Bunting",
          commonNameJapanese: "アオジ",
          commonNameRomaji: "aoji",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza spodocephala personata",
          range: "Sakhalin and s Kuril Is. to Honshu; > to Ryukyu Is.",
          profilePic:
            "https://farm4.staticflickr.com/3038/2313934652_a4a28be4a6_n.jpg",
        },
        {
          commonNameEnglish: "Chestnut Bunting",
          commonNameJapanese: "シマノジコ",
          commonNameRomaji: "shimanojiko",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza rutila",
          range: "Siberia to n Mongolia and ne China; > to India and SE Asia",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Chestnut_Bunting_Dzuleke_Nagaland_India_05.11.2019.jpg",
        },
        {
          commonNameEnglish: "Yellow browed Bunting",
          commonNameJapanese: "キマユホオジロ",
          commonNameRomaji: "kimayuhoojiro",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza chrysophrys",
          range: "Taiga of central Siberia; > in central and se China",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Yellow-browed_bunting_%28Emberiza_chrysophrys%29_Eocheong_Island_Korea_2012.jpg",
        },
        {
          commonNameEnglish: "Tristram's Bunting",
          commonNameJapanese: "シロハラホオジロ",
          commonNameRomaji: "shiroharahoojiro",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza tristrami",
          range: "Siberia to ne China; > to s China and n Thailand",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tristram%27s_Bunting_9849.jpg",
        },
        {
          commonNameEnglish: "Grey Bunting",
          commonNameJapanese: "クロジ",
          commonNameRomaji: "kuroji",
          order: "Passeriformes",
          family: "Emberizidae",
          species: "Emberiza variabilis",
          range:
            "S Kamchatka, Sakhalin, Kuril Is. and n Japan; > to Ryukyu Is.",
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emberiza_variabilis_%280s5%29.JPG/1920px-Emberiza_variabilis_%280s5%29.JPG",
        },
      ]);
    });
};
