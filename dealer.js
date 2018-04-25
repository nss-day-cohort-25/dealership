const sales = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    },
    {
        "vehicle": {
            "year": 2016,
            "model": "Touch silfix",
            "make": "Con-fix",
            "color": "antique fuchsia"
        },
        "sales_id": "f5678f16-a4dd-423d-b979-cc9e21472dba",
        "sales_agent": {
            "mobile": "598.689.2605",
            "last_name": "Kris",
            "first_name": "Edyth",
            "email": "colony_rahul@yahoo.com"
        },
        "purchase_date": "2017-05-27",
        "gross_profit": 142.06,
        "credit": {
            "credit_provider": "HSBC North America Holdings",
            "account": "551494086788174"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Ice-qvo",
            "make": "Techitech",
            "color": "battleship grey"
        },
        "sales_id": "4bb43d78-10fe-4af8-9419-bc7c605bacc3",
        "sales_agent": {
            "mobile": "(324) 983-0934",
            "last_name": "Pagac",
            "first_name": "Winifred",
            "email": "captain51@gmail.com"
        },
        "purchase_date": "2017-01-23",
        "gross_profit": 768.66,
        "credit": {
            "credit_provider": "Morgan Stanley",
            "account": "439854393620"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Damfresh",
            "make": "Biotraxquote",
            "color": "sky magenta"
        },
        "sales_id": "ecb1c841-1a43-4a7c-896e-712d2ec39c71",
        "sales_agent": {
            "mobile": "(896) 478-6975",
            "last_name": "Botsford",
            "first_name": "Shaina",
            "email": "beatae_sonny@hotmail.com"
        },
        "purchase_date": "2017-11-15",
        "gross_profit": 871.26,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "601109582720302"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Statranhold",
            "make": "Physlatfax",
            "color": "emerald green"
        },
        "sales_id": "9aac0668-5609-41b3-97a3-6726dcbf3643",
        "sales_agent": {
            "mobile": "1-679-021-3004",
            "last_name": "Lubowitz",
            "first_name": "Darien",
            "email": "katrine@yahoo.com"
        },
        "purchase_date": "2017-03-22",
        "gross_profit": 2471.96,
        "credit": {
            "credit_provider": "Bank of New York Mellon",
            "account": "491646591515"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Hotquadtrax",
            "make": "Transtintechno",
            "color": "robin egg blue"
        },
        "sales_id": "a2f80554-bd9d-4ea1-8229-01fd4cf220a8",
        "sales_agent": {
            "mobile": "562.300.2912",
            "last_name": "Davis",
            "first_name": "Gerardo",
            "email": "girl70@hotmail.com"
        },
        "purchase_date": "2017-04-28",
        "gross_profit": 156.02,
        "credit": {
            "credit_provider": "PNC Financial Services",
            "account": "34578280562836"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    },
    {
        "vehicle": {
            "year": 2016,
            "model": "Touch silfix",
            "make": "Con-fix",
            "color": "antique fuchsia"
        },
        "sales_id": "f5678f16-a4dd-423d-b979-cc9e21472dba",
        "sales_agent": {
            "mobile": "598.689.2605",
            "last_name": "Kris",
            "first_name": "Edyth",
            "email": "colony_rahul@yahoo.com"
        },
        "purchase_date": "2017-05-27",
        "gross_profit": 142.06,
        "credit": {
            "credit_provider": "HSBC North America Holdings",
            "account": "551494086788174"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Damfresh",
            "make": "Biotraxquote",
            "color": "sky magenta"
        },
        "sales_id": "ecb1c841-1a43-4a7c-896e-712d2ec39c71",
        "sales_agent": {
            "mobile": "(896) 478-6975",
            "last_name": "Botsford",
            "first_name": "Shaina",
            "email": "beatae_sonny@hotmail.com"
        },
        "purchase_date": "2017-11-15",
        "gross_profit": 871.26,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "601109582720302"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Ice-qvo",
            "make": "Techitech",
            "color": "battleship grey"
        },
        "sales_id": "4bb43d78-10fe-4af8-9419-bc7c605bacc3",
        "sales_agent": {
            "mobile": "(324) 983-0934",
            "last_name": "Pagac",
            "first_name": "Winifred",
            "email": "captain51@gmail.com"
        },
        "purchase_date": "2017-01-23",
        "gross_profit": 768.66,
        "credit": {
            "credit_provider": "Morgan Stanley",
            "account": "439854393620"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Damfresh",
            "make": "Biotraxquote",
            "color": "sky magenta"
        },
        "sales_id": "ecb1c841-1a43-4a7c-896e-712d2ec39c71",
        "sales_agent": {
            "mobile": "(896) 478-6975",
            "last_name": "Botsford",
            "first_name": "Shaina",
            "email": "beatae_sonny@hotmail.com"
        },
        "purchase_date": "2017-11-15",
        "gross_profit": 871.26,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "601109582720302"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Statranhold",
            "make": "Physlatfax",
            "color": "emerald green"
        },
        "sales_id": "9aac0668-5609-41b3-97a3-6726dcbf3643",
        "sales_agent": {
            "mobile": "1-679-021-3004",
            "last_name": "Engelstein",
            "first_name": "Marshall",
            "email": "katrine@yahoo.com"
        },
        "purchase_date": "2017-03-22",
        "gross_profit": 2271.96,
        "credit": {
            "credit_provider": "Bank of New York Mellon",
            "account": "491646591515"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Hotquadtrax",
            "make": "Transtintechno",
            "color": "robin egg blue"
        },
        "sales_id": "a2f80554-bd9d-4ea1-8229-01fd4cf220a8",
        "sales_agent": {
            "mobile": "562.300.2912",
            "last_name": "Davis",
            "first_name": "Gerardo",
            "email": "girl70@hotmail.com"
        },
        "purchase_date": "2017-04-28",
        "gross_profit": 156.02,
        "credit": {
            "credit_provider": "PNC Financial Services",
            "account": "34578280562836"
        }
    },
    {
        "vehicle": {
            "year": 2017,
            "model": "Zonex",
            "make": "An-hex",
            "color": "peach"
        },
        "sales_id": "c0ba70ed-047e-4fcf-a69c-ed80dff3225a",
        "sales_agent": {
            "mobile": "(406) 253-2251",
            "last_name": "Hayes",
            "first_name": "Zena",
            "email": "giuseppe@gmail.com"
        },
        "purchase_date": "2017-11-17",
        "gross_profit": 344.21,
        "credit": {
            "credit_provider": "Wells Fargo",
            "account": "528765725445324"
        }
    },
    {
        "vehicle": {
            "year": 2017,
            "model": "Math-sun",
            "make": "San-la",
            "color": "maximum red purple"
        },
        "sales_id": "a17b15a3-daf1-40f0-a9f8-097ed8e1cc6a",
        "sales_agent": {
            "mobile": "(995) 582-2939",
            "last_name": "Bahringer",
            "first_name": "Gregoria",
            "email": "quas_aliza@outlook.com"
        },
        "purchase_date": "2017-09-11",
        "gross_profit": 929.75,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "528942733399086"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Roundanfix",
            "make": "Viva-tex",
            "color": "pearl aqua"
        },
        "sales_id": "b9780d89-f841-453b-8b94-bdc2277e6056",
        "sales_agent": {
            "mobile": "1-929-722-4774",
            "last_name": "Swift",
            "first_name": "Olin",
            "email": "once92@yahoo.com"
        },
        "purchase_date": "2017-05-14",
        "gross_profit": 301.73,
        "credit": {
            "credit_provider": "SunTrust Banks",
            "account": "34218762543791"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Zoogodax",
            "make": "Waredom",
            "color": "dogwood rose"
        },
        "sales_id": "8b40ba3a-31c3-4d4b-956f-9700cad8b304",
        "sales_agent": {
            "mobile": "1-374-401-3145",
            "last_name": "Grimes",
            "first_name": "Elza",
            "email": "abigale@hotmail.com"
        },
        "purchase_date": "2017-06-24",
        "gross_profit": 396.89,
        "credit": {
            "credit_provider": "Fifth Third Bank",
            "account": "37532244082893"
        }
    },
    {
        "vehicle": {
            "year": 2018,
            "model": "Lasolit",
            "make": "Zoocorporation",
            "color": "yellow-green"
        },
        "sales_id": "19cf3983-aaf7-4c3e-b62c-a383affc5e04",
        "sales_agent": {
            "mobile": "652.990.8801",
            "last_name": "Morar",
            "first_name": "Shanie",
            "email": "molestiae54@hotmail.com"
        },
        "purchase_date": "2017-11-15",
        "gross_profit": 383.07,
        "credit": {
            "credit_provider": "Bank of America",
            "account": "34680824354101"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Voltex",
            "make": "Goldenhottechno",
            "color": "ochre"
        },
        "sales_id": "c66b74d6-9d0f-431b-a8bc-a6a35c0b28ff",
        "sales_agent": {
            "mobile": "(997) 407-9580",
            "last_name": "Hoeger",
            "first_name": "Emmet",
            "email": "dress_shannon@gmail.com"
        },
        "purchase_date": "2017-09-24",
        "gross_profit": 855.51,
        "credit": {
            "credit_provider": "Charles Schwab Corporation",
            "account": "34555936203264"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Biocof",
            "make": "X--phase",
            "color": "sea green"
        },
        "sales_id": "1d7bd6a9-6ded-4cee-ac75-ffee953ead14",
        "sales_agent": {
            "mobile": "557-499-3165",
            "last_name": "Mueller",
            "first_name": "Camilla",
            "email": "possimus91@outlook.com"
        },
        "purchase_date": "2017-11-24",
        "gross_profit": 236.69,
        "credit": {
            "credit_provider": "Regions Financial Corporation",
            "account": "34872323901444"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Freshzuming",
            "make": "Zun-lex",
            "color": "orange"
        },
        "sales_id": "f1080f50-3c52-4e68-a538-ab509906ff55",
        "sales_agent": {
            "mobile": "602.144.1340",
            "last_name": "Aufderhar",
            "first_name": "Louie",
            "email": "create_jaylan@yahoo.com"
        },
        "purchase_date": "2017-07-12",
        "gross_profit": 764.79,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "34159430899553"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Strong ranhold",
            "make": "Kon-kix",
            "color": "outer space"
        },
        "sales_id": "b7a59c5e-c22e-4307-b382-3b32b271ad39",
        "sales_agent": {
            "mobile": "489.021.2300",
            "last_name": "O\"Kon",
            "first_name": "Al",
            "email": "about64@hotmail.com"
        },
        "purchase_date": "2017-06-21",
        "gross_profit": 528.24,
        "credit": {
            "credit_provider": "BB&T Corporation",
            "account": "517579888143713"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Scot jaytrax",
            "make": "Lane-code",
            "color": "christmas brown"
        },
        "sales_id": "d5d65168-c327-42f3-854e-dce2063ad03b",
        "sales_agent": {
            "mobile": "961.406.7680",
            "last_name": "Mosciski",
            "first_name": "Madie",
            "email": "ava@outlook.com"
        },
        "purchase_date": "2017-09-09",
        "gross_profit": 210.27,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "34003618855385"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Freshzuming",
            "make": "Zun-lex",
            "color": "orange"
        },
        "sales_id": "f1080f50-3c52-4e68-a538-ab509906ff55",
        "sales_agent": {
            "mobile": "602.144.1340",
            "last_name": "Aufderhar",
            "first_name": "Louie",
            "email": "create_jaylan@yahoo.com"
        },
        "purchase_date": "2017-07-12",
        "gross_profit": 764.79,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "34159430899553"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Strong ranhold",
            "make": "Kon-kix",
            "color": "outer space"
        },
        "sales_id": "b7a59c5e-c22e-4307-b382-3b32b271ad39",
        "sales_agent": {
            "mobile": "489.021.2300",
            "last_name": "O\"Kon",
            "first_name": "Al",
            "email": "about64@hotmail.com"
        },
        "purchase_date": "2017-06-21",
        "gross_profit": 528.24,
        "credit": {
            "credit_provider": "BB&T Corporation",
            "account": "517579888143713"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Scot jaytrax",
            "make": "Lane-code",
            "color": "christmas brown"
        },
        "sales_id": "d5d65168-c327-42f3-854e-dce2063ad03b",
        "sales_agent": {
            "mobile": "961.406.7680",
            "last_name": "Mosciski",
            "first_name": "Madie",
            "email": "ava@outlook.com"
        },
        "purchase_date": "2017-09-09",
        "gross_profit": 210.27,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "34003618855385"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Freshzuming",
            "make": "Zun-lex",
            "color": "orange"
        },
        "sales_id": "f1080f50-3c52-4e68-a538-ab509906ff55",
        "sales_agent": {
            "mobile": "602.144.1340",
            "last_name": "Aufderhar",
            "first_name": "Louie",
            "email": "create_jaylan@yahoo.com"
        },
        "purchase_date": "2017-07-12",
        "gross_profit": 764.79,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "34159430899553"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Strong ranhold",
            "make": "Kon-kix",
            "color": "outer space"
        },
        "sales_id": "b7a59c5e-c22e-4307-b382-3b32b271ad39",
        "sales_agent": {
            "mobile": "489.021.2300",
            "last_name": "O\"Kon",
            "first_name": "Al",
            "email": "about64@hotmail.com"
        },
        "purchase_date": "2017-06-21",
        "gross_profit": 528.24,
        "credit": {
            "credit_provider": "BB&T Corporation",
            "account": "517579888143713"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Scot jaytrax",
            "make": "Lane-code",
            "color": "christmas brown"
        },
        "sales_id": "d5d65168-c327-42f3-854e-dce2063ad03b",
        "sales_agent": {
            "mobile": "961.406.7680",
            "last_name": "Mosciski",
            "first_name": "Madie",
            "email": "ava@outlook.com"
        },
        "purchase_date": "2017-09-09",
        "gross_profit": 210.27,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "34003618855385"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Ice-qvo",
            "make": "Techitech",
            "color": "battleship grey"
        },
        "sales_id": "4bb43d78-10fe-4af8-9419-bc7c605bacc3",
        "sales_agent": {
            "mobile": "(324) 983-0934",
            "last_name": "Pagac",
            "first_name": "Winifred",
            "email": "captain51@gmail.com"
        },
        "purchase_date": "2017-01-23",
        "gross_profit": 768.66,
        "credit": {
            "credit_provider": "Morgan Stanley",
            "account": "439854393620"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Damfresh",
            "make": "Biotraxquote",
            "color": "sky magenta"
        },
        "sales_id": "ecb1c841-1a43-4a7c-896e-712d2ec39c71",
        "sales_agent": {
            "mobile": "(896) 478-6975",
            "last_name": "Botsford",
            "first_name": "Shaina",
            "email": "beatae_sonny@hotmail.com"
        },
        "purchase_date": "2017-11-15",
        "gross_profit": 871.26,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "601109582720302"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Statranhold",
            "make": "Physlatfax",
            "color": "emerald green"
        },
        "sales_id": "9aac0668-5609-41b3-97a3-6726dcbf3643",
        "sales_agent": {
            "mobile": "1-679-021-3004",
            "last_name": "Lubowitz",
            "first_name": "Darien",
            "email": "katrine@yahoo.com"
        },
        "purchase_date": "2017-03-22",
        "gross_profit": 471.96,
        "credit": {
            "credit_provider": "Bank of New York Mellon",
            "account": "491646591515"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Hotquadtrax",
            "make": "Transtintechno",
            "color": "robin egg blue"
        },
        "sales_id": "a2f80554-bd9d-4ea1-8229-01fd4cf220a8",
        "sales_agent": {
            "mobile": "562.300.2912",
            "last_name": "Davis",
            "first_name": "Gerardo",
            "email": "girl70@hotmail.com"
        },
        "purchase_date": "2017-04-28",
        "gross_profit": 156.02,
        "credit": {
            "credit_provider": "PNC Financial Services",
            "account": "34578280562836"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Ice-qvo",
            "make": "Techitech",
            "color": "battleship grey"
        },
        "sales_id": "4bb43d78-10fe-4af8-9419-bc7c605bacc3",
        "sales_agent": {
            "mobile": "(324) 983-0934",
            "last_name": "Pagac",
            "first_name": "Winifred",
            "email": "captain51@gmail.com"
        },
        "purchase_date": "2017-01-23",
        "gross_profit": 768.66,
        "credit": {
            "credit_provider": "Morgan Stanley",
            "account": "439854393620"
        }
    },
    {
        "vehicle": {
            "year": 2008,
            "model": "Damfresh",
            "make": "Biotraxquote",
            "color": "sky magenta"
        },
        "sales_id": "ecb1c841-1a43-4a7c-896e-712d2ec39c71",
        "sales_agent": {
            "mobile": "(896) 478-6975",
            "last_name": "Botsford",
            "first_name": "Shaina",
            "email": "beatae_sonny@hotmail.com"
        },
        "purchase_date": "2017-11-15",
        "gross_profit": 871.26,
        "credit": {
            "credit_provider": "J.P.Morgan Chase & Co",
            "account": "601109582720302"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Statranhold",
            "make": "Physlatfax",
            "color": "emerald green"
        },
        "sales_id": "9aac0668-5609-41b3-97a3-6726dcbf3643",
        "sales_agent": {
            "mobile": "1-679-021-3004",
            "last_name": "Lubowitz",
            "first_name": "Darien",
            "email": "katrine@yahoo.com"
        },
        "purchase_date": "2017-03-22",
        "gross_profit": 471.96,
        "credit": {
            "credit_provider": "Bank of New York Mellon",
            "account": "491646591515"
        }
    },
    {
        "vehicle": {
            "year": 2010,
            "model": "Hotquadtrax",
            "make": "Transtintechno",
            "color": "robin egg blue"
        },
        "sales_id": "a2f80554-bd9d-4ea1-8229-01fd4cf220a8",
        "sales_agent": {
            "mobile": "562.300.2912",
            "last_name": "Davis",
            "first_name": "Gerardo",
            "email": "girl70@hotmail.com"
        },
        "purchase_date": "2017-04-28",
        "gross_profit": 156.02,
        "credit": {
            "credit_provider": "PNC Financial Services",
            "account": "34578280562836"
        }
    }
]

const addProfit = (f, s) => f + s.gross_profit
const mapSort = (c, p) => p[1] - c[1]


// 1. Total profit for 2017
// const profit = sales.reduce(addProfit, 0).toLocaleString('en-us', { style: 'currency', currency: 'USD' })

// profit


// 1. In which month did they sell the most cars?
const ledger = sales.reduce((ledger, sale) => {
    const month = new Date(sale.purchase_date).getMonth()
    if (!ledger.has(month)) {
        ledger.set(month, 1)
    } else {
        ledger.set(month, ledger.get(month) + 1)
    }
    return ledger
}, new Map())

// ledger

// const arrayOfSales = [...ledger.entries()]
// arrayOfSales

// const sortedArrayOfSales = arrayOfSales.sort(
//     (c, p) => p[1] - c[1]
// )
// sortedArrayOfSales

// const topSales = sortedArrayOfSales.shift()
// topSales

// const monthNumber = topSales[0] - 1
// monthNumber

// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// const stringMonth = months[monthNumber]
// stringMonth

// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// console.log(`The top selling month was ${months[[...ledger.entries()].sort(mapSort).shift()[0] - 1]}`)


// 1. Which salesperson sold the most cars?
const reps = sales.reduce((l, s) => {
    const key = `${s.sales_agent.first_name} ${s.sales_agent.last_name}`

    if (!l.has(key)) {
        l.set(key, {sales:1, profit: s.gross_profit})
    } else {
        let current = l.get(key)
        l.set(key, { sales: current.sales+1, profit: current.profit + s.gross_profit })
    }
    return l
}, new Map())
// reps

const repSalesArray = [...reps.entries()]
// repSalesArray

// const sortedSales = repSalesArray.sort((c, p) => p[1].profit - c[1].profit)
// sortedSales

// const topSales = sortedSales.shift()
// topSales

// const output = `${topSales[0]} sold ${topSales[1].sales} cars for ${topSales[1].profit.toLocaleString("en-us",  { style: "currency", currency: "USD" })} in 2017`
// output


// const sortedProfit = repSalesArray.sort((c, p) => p[1].sales - c[1].sales)
// const topProfit = sortedProfit.shift()
// const output = `
// ${topProfit[0]}
// sold ${topProfit[1].sales} cars
// for ${topProfit[1].profit.toLocaleString("en-us",  { style: "currency", currency: "USD" })}
// in 2017`
// output


// // 1. Which model was the most popular?
// const models = sales.reduce((l, s) => {
//     const key = s.vehicle.model

//     if (!l.has(key)) {
//         l.set(key, {sales:1, profit: s.gross_profit})
//     } else {
//         let current = l.get(key)
//         l.set(key, { sales: current.sales+1, profit: current.profit + s.gross_profit })
//     }
//     return l
// }, new Map())

// const modelArray = [...models.entries()]
// const sortedModels = modelArray.sort((c, p) => p[1].profit - c[1].profit)
// const topModel = sortedModels.shift()
// const modelOutput = `
// We sold ${topModel[1].sales} ${topModel[0]} cars
// for ${topModel[1].profit.toLocaleString("en-us",  { style: "currency", currency: "USD" })}
// in 2017`
// modelOutput




// // 1. Which bank provided the most loans to our customers?

