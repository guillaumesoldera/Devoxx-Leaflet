const journey = {
    "tickets": [],
    "links": [
        {
            "href": "https://api.navitia.io/v1/coverage/be/journeys?to=4.4162091;51.2459082&from=4.421111;51.217222&datetime_represents=departure&datetime=20180926T215516",
            "type": "next",
            "rel": "next",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/be/journeys?to=4.4162091;51.2459082&from=4.421111;51.217222&datetime_represents=arrival&datetime=20180926T222050",
            "type": "prev",
            "rel": "prev",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/be/journeys?to=4.4162091;51.2459082&from=4.421111;51.217222&datetime_represents=departure&datetime=20180926T000000",
            "type": "first",
            "rel": "first",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/be/journeys?to=4.4162091;51.2459082&from=4.421111;51.217222&datetime_represents=arrival&datetime=20180926T235959",
            "type": "last",
            "rel": "last",
            "templated": false
        }
    ],
    "journeys": [
        {
            "status": "",
            "distances": {
                "car": 0,
                "walking": 644,
                "bike": 0,
                "ridesharing": 0
            },
            "links": [
                {
                    "href": "https://api.navitia.io/v1/journeys?allowed_id%5B%5D=stop_point%3AOFL%3ASP%3A109408&allowed_id%5B%5D=stop_point%3AOFL%3ASP%3A120881&from=4.421111%3B51.217222&to=4.4162091%3B51.2459082&is_journey_schedules=True&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=0&direct_path=none&first_section_mode%5B%5D=walking",
                    "type": "journeys",
                    "rel": "same_journey_schedules",
                    "templated": false
                }
            ],
            "tags": [
                "walking",
                "ecologic"
            ],
            "nb_transfers": 0,
            "durations": {
                "car": 0,
                "walking": 576,
                "total": 1536,
                "ridesharing": 0,
                "bike": 0
            },
            "arrival_date_time": "20180926T222051",
            "calendars": [
                {
                    "active_periods": [
                        {
                            "begin": "20180920",
                            "end": "20180929"
                        }
                    ],
                    "week_pattern": {
                        "monday": true,
                        "tuesday": true,
                        "friday": true,
                        "wednesday": true,
                        "thursday": true,
                        "sunday": false,
                        "saturday": false
                    }
                }
            ],
            "departure_date_time": "20180926T215515",
            "requested_date_time": "20180926T215437",
            "fare": {
                "found": false,
                "total": {
                    "value": "0.0"
                },
                "links": []
            },
            "co2_emission": {
                "value": 19.68,
                "unit": "gEC"
            },
            "type": "best",
            "duration": 1536,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "4.421111;51.217222",
                        "quality": 0,
                        "name": "26 Koningin Astridplein (Antwerpen)",
                        "address": {
                            "name": "Koningin Astridplein",
                            "house_number": 26,
                            "coord": {
                                "lat": "51.217222",
                                "lon": "4.421111"
                            },
                            "label": "26 Koningin Astridplein (Antwerpen)",
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                }
                            ],
                            "id": "4.421111;51.217222"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20180926T215700",
                    "departure_date_time": "20180926T215515",
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "external_code",
                                    "value": "OFL120881"
                                },
                                {
                                    "type": "gtfs_stop_code",
                                    "value": "104715"
                                },
                                {
                                    "type": "source",
                                    "value": "120881"
                                }
                            ],
                            "name": "Antwerpen Premetrostation Diamant",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Tramway",
                                    "name": "Tramway"
                                }
                            ],
                            "coord": {
                                "lat": "51.216256",
                                "lon": "4.420438"
                            },
                            "label": "Antwerpen Premetrostation Diamant (Antwerpen)",
                            "equipments": [],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:tramway",
                                    "name": "Tramway"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 9,
                                    "coord": {
                                        "lat": "51.248305",
                                        "lon": "4.376303"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:60709",
                                    "zip_code": ""
                                }
                            ],
                            "fare_zone": {
                                "name": "-1"
                            },
                            "id": "stop_point:OFL:SP:120881",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFLCTP120881"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104715"
                                    },
                                    {
                                        "type": "source",
                                        "value": "CTP120881"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Diamant",
                                "links": [],
                                "coord": {
                                    "lat": "51.216256",
                                    "lon": "4.420438"
                                },
                                "label": "Antwerpen Premetrostation Diamant (Antwerpen)",
                                "administrative_regions": [
                                    {
                                        "insee": "",
                                        "name": "Antwerpen",
                                        "level": 8,
                                        "coord": {
                                            "lat": "51.221109",
                                            "lon": "4.399708"
                                        },
                                        "label": "Antwerpen",
                                        "id": "admin:osm:59518",
                                        "zip_code": ""
                                    },
                                    {
                                        "insee": "",
                                        "name": "Antwerpen",
                                        "level": 9,
                                        "coord": {
                                            "lat": "51.248305",
                                            "lon": "4.376303"
                                        },
                                        "label": "Antwerpen",
                                        "id": "admin:osm:60709",
                                        "zip_code": ""
                                    }
                                ],
                                "timezone": "Europe/Brussels",
                                "id": "stop_area:OFL:SA:CTP120881"
                            }
                        },
                        "quality": 0,
                        "name": "Antwerpen Premetrostation Diamant (Antwerpen)",
                        "id": "stop_point:OFL:SP:120881"
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 117
                            }
                        ],
                        "coordinates": [
                            [
                                4.4206406299,
                                51.2172825534
                            ],
                            [
                                4.4206406299,
                                51.2172825534
                            ],
                            [
                                4.420561,
                                51.216664
                            ],
                            [
                                4.420483,
                                51.216658
                            ],
                            [
                                4.420451003,
                                51.2162549677
                            ],
                            [
                                4.420438,
                                51.216256
                            ]
                        ]
                    },
                    "duration": 105,
                    "path": [
                        {
                            "duration": 65,
                            "direction": 0,
                            "length": 73,
                            "name": ""
                        },
                        {
                            "duration": 40,
                            "direction": 0,
                            "length": 45,
                            "name": "Pelikaanstraat"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_0_0",
                    "mode": "walking"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "external_code",
                                    "value": "OFL120881"
                                },
                                {
                                    "type": "gtfs_stop_code",
                                    "value": "104715"
                                },
                                {
                                    "type": "source",
                                    "value": "120881"
                                }
                            ],
                            "name": "Antwerpen Premetrostation Diamant",
                            "links": [],
                            "coord": {
                                "lat": "51.216256",
                                "lon": "4.420438"
                            },
                            "label": "Antwerpen Premetrostation Diamant (Antwerpen)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 9,
                                    "coord": {
                                        "lat": "51.248305",
                                        "lon": "4.376303"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:60709",
                                    "zip_code": ""
                                }
                            ],
                            "fare_zone": {
                                "name": "-1"
                            },
                            "id": "stop_point:OFL:SP:120881",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFLCTP120881"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104715"
                                    },
                                    {
                                        "type": "source",
                                        "value": "CTP120881"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Diamant",
                                "links": [],
                                "coord": {
                                    "lat": "51.216256",
                                    "lon": "4.420438"
                                },
                                "label": "Antwerpen Premetrostation Diamant (Antwerpen)",
                                "timezone": "Europe/Brussels",
                                "id": "stop_area:OFL:SA:CTP120881"
                            }
                        },
                        "quality": 0,
                        "name": "Antwerpen Premetrostation Diamant (Antwerpen)",
                        "id": "stop_point:OFL:SP:120881"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OFL:28901957-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OFL:44567"
                        },
                        {
                            "type": "route",
                            "id": "route:OFL:44567"
                        },
                        {
                            "type": "commercial_mode",
                            "id": "commercial_mode:tramway"
                        },
                        {
                            "type": "physical_mode",
                            "id": "physical_mode:Tramway"
                        },
                        {
                            "type": "network",
                            "id": "network:lijn"
                        },
                        {
                            "category": "comment",
                            "internal": true,
                            "rel": "notes",
                            "type": "notes",
                            "id": "note:515792743593716418"
                        }
                    ],
                    "arrival_date_time": "20180926T221300",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20180926T215700",
                    "display_informations": {
                        "direction": "Antwerpen P+R Luchtbal (Antwerpen)",
                        "code": "6",
                        "network": "De Lijn, the Flemish bus company",
                        "links": [],
                        "color": "DD0077",
                        "name": "P+R Olympiade - P+R Luchtbal",
                        "physical_mode": "Tramway",
                        "headsign": "P+R Olympiade - P+R Lucht",
                        "label": "6",
                        "equipments": [],
                        "text_color": "FFFFFF",
                        "commercial_mode": "Tramway",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "external_code",
                                    "value": "OFL109408"
                                },
                                {
                                    "type": "gtfs_stop_code",
                                    "value": "107660"
                                },
                                {
                                    "type": "source",
                                    "value": "109408"
                                }
                            ],
                            "name": "Antwerpen Kinepolis",
                            "links": [],
                            "coord": {
                                "lat": "51.245558",
                                "lon": "4.420428"
                            },
                            "label": "Antwerpen Kinepolis (Antwerpen)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 9,
                                    "coord": {
                                        "lat": "51.248305",
                                        "lon": "4.376303"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:60709",
                                    "zip_code": ""
                                }
                            ],
                            "fare_zone": {
                                "name": "-1"
                            },
                            "id": "stop_point:OFL:SP:109408",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFLCTP109408"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "107660"
                                    },
                                    {
                                        "type": "source",
                                        "value": "CTP109408"
                                    }
                                ],
                                "name": "Antwerpen Kinepolis",
                                "links": [],
                                "coord": {
                                    "lat": "51.245558",
                                    "lon": "4.420428"
                                },
                                "label": "Antwerpen Kinepolis (Antwerpen)",
                                "timezone": "Europe/Brussels",
                                "id": "stop_area:OFL:SA:CTP109408"
                            }
                        },
                        "quality": 0,
                        "name": "Antwerpen Kinepolis (Antwerpen)",
                        "id": "stop_point:OFL:SP:109408"
                    },
                    "base_arrival_date_time": "20180926T221300",
                    "base_departure_date_time": "20180926T215700",
                    "co2_emission": {
                        "value": 19.68,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 4920
                            }
                        ],
                        "coordinates": [
                            [
                                4.420438,
                                51.216256
                            ],
                            [
                                4.420699,
                                51.219222
                            ],
                            [
                                4.424152,
                                51.22278
                            ],
                            [
                                4.432715,
                                51.224753
                            ],
                            [
                                4.439046,
                                51.227419
                            ],
                            [
                                4.442543,
                                51.230015
                            ],
                            [
                                4.440366,
                                51.238779
                            ],
                            [
                                4.437533,
                                51.240282
                            ],
                            [
                                4.431222,
                                51.242955
                            ],
                            [
                                4.424165,
                                51.244828
                            ],
                            [
                                4.420428,
                                51.245558
                            ]
                        ]
                    },
                    "duration": 960,
                    "type": "public_transport",
                    "id": "section_1_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL120881"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104715"
                                    },
                                    {
                                        "type": "source",
                                        "value": "120881"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Diamant",
                                "links": [],
                                "coord": {
                                    "lat": "51.216256",
                                    "lon": "4.420438"
                                },
                                "label": "Antwerpen Premetrostation Diamant (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:120881"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T215700",
                            "additional_informations": [],
                            "departure_date_time": "20180926T215700",
                            "base_arrival_date_time": "20180926T215700",
                            "base_departure_date_time": "20180926T215700"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL121185"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104717"
                                    },
                                    {
                                        "type": "source",
                                        "value": "121185"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Astrid",
                                "links": [],
                                "coord": {
                                    "lat": "51.219222",
                                    "lon": "4.420699"
                                },
                                "label": "Antwerpen Premetrostation Astrid (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:121185"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T215800",
                            "additional_informations": [],
                            "departure_date_time": "20180926T215800",
                            "base_arrival_date_time": "20180926T215800",
                            "base_departure_date_time": "20180926T215800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL122267"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104719"
                                    },
                                    {
                                        "type": "source",
                                        "value": "122267"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Elisabeth",
                                "links": [],
                                "coord": {
                                    "lat": "51.22278",
                                    "lon": "4.424152"
                                },
                                "label": "Antwerpen Premetrostation Elisabeth (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:122267"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T215900",
                            "additional_informations": [],
                            "departure_date_time": "20180926T215900",
                            "base_arrival_date_time": "20180926T215900",
                            "base_departure_date_time": "20180926T215900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL121188"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104724"
                                    },
                                    {
                                        "type": "source",
                                        "value": "121188"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Handel",
                                "links": [],
                                "coord": {
                                    "lat": "51.224753",
                                    "lon": "4.432715"
                                },
                                "label": "Antwerpen Premetrostation Handel (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:121188"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T220100",
                            "additional_informations": [],
                            "departure_date_time": "20180926T220100",
                            "base_arrival_date_time": "20180926T220100",
                            "base_departure_date_time": "20180926T220100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL121189"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104727"
                                    },
                                    {
                                        "type": "source",
                                        "value": "121189"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Schijnpoort",
                                "links": [],
                                "coord": {
                                    "lat": "51.227419",
                                    "lon": "4.439046"
                                },
                                "label": "Antwerpen Premetrostation Schijnpoort (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:121189"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T220200",
                            "additional_informations": [],
                            "departure_date_time": "20180926T220200",
                            "base_arrival_date_time": "20180926T220200",
                            "base_departure_date_time": "20180926T220200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL121743"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104729"
                                    },
                                    {
                                        "type": "source",
                                        "value": "121743"
                                    }
                                ],
                                "name": "Antwerpen Premetrostation Sport",
                                "links": [],
                                "coord": {
                                    "lat": "51.230015",
                                    "lon": "4.442543"
                                },
                                "label": "Antwerpen Premetrostation Sport (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:121743"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T220300",
                            "additional_informations": [],
                            "departure_date_time": "20180926T220300",
                            "base_arrival_date_time": "20180926T220300",
                            "base_departure_date_time": "20180926T220300"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL21032"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "104258"
                                    },
                                    {
                                        "type": "source",
                                        "value": "21032"
                                    }
                                ],
                                "name": "Merksem Gasthuishoeve",
                                "links": [],
                                "coord": {
                                    "lat": "51.238779",
                                    "lon": "4.440366"
                                },
                                "label": "Merksem Gasthuishoeve (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:21032"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T220700",
                            "additional_informations": [],
                            "departure_date_time": "20180926T220700",
                            "base_arrival_date_time": "20180926T220700",
                            "base_departure_date_time": "20180926T220700"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL131241"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "101557"
                                    },
                                    {
                                        "type": "source",
                                        "value": "131241"
                                    }
                                ],
                                "name": "Merksem Bredabaan",
                                "links": [],
                                "coord": {
                                    "lat": "51.240282",
                                    "lon": "4.437533"
                                },
                                "label": "Merksem Bredabaan (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:131241"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T220800",
                            "additional_informations": [],
                            "departure_date_time": "20180926T220800",
                            "base_arrival_date_time": "20180926T220800",
                            "base_departure_date_time": "20180926T220800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL108058"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "103901"
                                    },
                                    {
                                        "type": "source",
                                        "value": "108058"
                                    }
                                ],
                                "name": "Merksem Lambrechtshoeken",
                                "links": [],
                                "coord": {
                                    "lat": "51.242955",
                                    "lon": "4.431222"
                                },
                                "label": "Merksem Lambrechtshoeken (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:108058"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T221000",
                            "additional_informations": [],
                            "departure_date_time": "20180926T221000",
                            "base_arrival_date_time": "20180926T221000",
                            "base_departure_date_time": "20180926T221000"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL107645"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "102178"
                                    },
                                    {
                                        "type": "source",
                                        "value": "107645"
                                    }
                                ],
                                "name": "Antwerpen Station Luchtbal",
                                "links": [],
                                "coord": {
                                    "lat": "51.244828",
                                    "lon": "4.424165"
                                },
                                "label": "Antwerpen Station Luchtbal (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:107645"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T221200",
                            "additional_informations": [],
                            "departure_date_time": "20180926T221200",
                            "base_arrival_date_time": "20180926T221200",
                            "base_departure_date_time": "20180926T221200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFL109408"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "107660"
                                    },
                                    {
                                        "type": "source",
                                        "value": "109408"
                                    }
                                ],
                                "name": "Antwerpen Kinepolis",
                                "links": [],
                                "coord": {
                                    "lat": "51.245558",
                                    "lon": "4.420428"
                                },
                                "label": "Antwerpen Kinepolis (Antwerpen)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "-1"
                                },
                                "id": "stop_point:OFL:SP:109408"
                            },
                            "links": [],
                            "arrival_date_time": "20180926T221300",
                            "additional_informations": [],
                            "departure_date_time": "20180926T221300",
                            "base_arrival_date_time": "20180926T221300",
                            "base_departure_date_time": "20180926T221300"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "external_code",
                                    "value": "OFL109408"
                                },
                                {
                                    "type": "gtfs_stop_code",
                                    "value": "107660"
                                },
                                {
                                    "type": "source",
                                    "value": "109408"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OFL109408"
                                },
                                {
                                    "type": "gtfs_stop_code",
                                    "value": "107660"
                                },
                                {
                                    "type": "source",
                                    "value": "109408"
                                }
                            ],
                            "name": "Antwerpen Kinepolis",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                },
                                {
                                    "id": "physical_mode:Tramway",
                                    "name": "Tramway"
                                }
                            ],
                            "coord": {
                                "lat": "51.245558",
                                "lon": "4.420428"
                            },
                            "label": "Antwerpen Kinepolis (Antwerpen)",
                            "equipments": [],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                },
                                {
                                    "id": "commercial_mode:tramway",
                                    "name": "Tramway"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 9,
                                    "coord": {
                                        "lat": "51.248305",
                                        "lon": "4.376303"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:60709",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 9,
                                    "coord": {
                                        "lat": "51.248305",
                                        "lon": "4.376303"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:60709",
                                    "zip_code": ""
                                }
                            ],
                            "fare_zone": {
                                "name": "-1"
                            },
                            "id": "stop_point:OFL:SP:109408",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OFLCTP109408"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "107660"
                                    },
                                    {
                                        "type": "source",
                                        "value": "CTP109408"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OFLCTP109408"
                                    },
                                    {
                                        "type": "gtfs_stop_code",
                                        "value": "107660"
                                    },
                                    {
                                        "type": "source",
                                        "value": "CTP109408"
                                    }
                                ],
                                "name": "Antwerpen Kinepolis",
                                "links": [],
                                "coord": {
                                    "lat": "51.245558",
                                    "lon": "4.420428"
                                },
                                "label": "Antwerpen Kinepolis (Antwerpen)",
                                "administrative_regions": [
                                    {
                                        "insee": "",
                                        "name": "Antwerpen",
                                        "level": 8,
                                        "coord": {
                                            "lat": "51.221109",
                                            "lon": "4.399708"
                                        },
                                        "label": "Antwerpen",
                                        "id": "admin:osm:59518",
                                        "zip_code": ""
                                    },
                                    {
                                        "insee": "",
                                        "name": "Antwerpen",
                                        "level": 9,
                                        "coord": {
                                            "lat": "51.248305",
                                            "lon": "4.376303"
                                        },
                                        "label": "Antwerpen",
                                        "id": "admin:osm:60709",
                                        "zip_code": ""
                                    }
                                ],
                                "timezone": "Europe/Brussels",
                                "id": "stop_area:OFL:SA:CTP109408"
                            }
                        },
                        "quality": 0,
                        "name": "Antwerpen Kinepolis (Antwerpen)",
                        "id": "stop_point:OFL:SP:109408"
                    },
                    "links": [],
                    "arrival_date_time": "20180926T222051",
                    "departure_date_time": "20180926T221300",
                    "to": {
                        "embedded_type": "address",
                        "id": "4.4162091;51.2459082",
                        "quality": 0,
                        "name": "394 Groenendaallaan (Antwerpen)",
                        "address": {
                            "name": "Groenendaallaan",
                            "house_number": 394,
                            "coord": {
                                "lat": "51.2459082",
                                "lon": "4.4162091"
                            },
                            "label": "394 Groenendaallaan (Antwerpen)",
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                }
                            ],
                            "id": "4.4162091;51.2459082"
                        }
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 527
                            }
                        ],
                        "coordinates": [
                            [
                                4.420428,
                                51.245558
                            ],
                            [
                                4.4204607006,
                                51.2455578311
                            ],
                            [
                                4.420458,
                                51.245035
                            ],
                            [
                                4.420339,
                                51.245036
                            ],
                            [
                                4.419784,
                                51.245039
                            ],
                            [
                                4.419728,
                                51.245041
                            ],
                            [
                                4.419615,
                                51.244952
                            ],
                            [
                                4.418602,
                                51.244949
                            ],
                            [
                                4.418416,
                                51.245114
                            ],
                            [
                                4.418281,
                                51.245444
                            ],
                            [
                                4.418258,
                                51.245764
                            ],
                            [
                                4.418258,
                                51.246456
                            ],
                            [
                                4.418258,
                                51.246485
                            ],
                            [
                                4.417929,
                                51.246597
                            ],
                            [
                                4.416844,
                                51.246591
                            ],
                            [
                                4.4160661699,
                                51.2463229389
                            ],
                            [
                                4.4160661699,
                                51.2463229389
                            ]
                        ]
                    },
                    "duration": 471,
                    "path": [
                        {
                            "duration": 51,
                            "direction": 0,
                            "length": 57,
                            "name": ""
                        },
                        {
                            "duration": 44,
                            "direction": 0,
                            "length": 49,
                            "name": ""
                        },
                        {
                            "duration": 11,
                            "direction": -55,
                            "length": 12,
                            "name": ""
                        },
                        {
                            "duration": 63,
                            "direction": 51,
                            "length": 71,
                            "name": ""
                        },
                        {
                            "duration": 20,
                            "direction": 55,
                            "length": 22,
                            "name": ""
                        },
                        {
                            "duration": 134,
                            "direction": 21,
                            "length": 150,
                            "name": ""
                        },
                        {
                            "duration": 26,
                            "direction": -61,
                            "length": 29,
                            "name": ""
                        },
                        {
                            "duration": 67,
                            "direction": -29,
                            "length": 75,
                            "name": ""
                        },
                        {
                            "duration": 55,
                            "direction": 0,
                            "length": 62,
                            "name": ""
                        }
                    ],
                    "type": "street_network",
                    "id": "section_2_0",
                    "mode": "walking"
                }
            ]
        },
        {
            "status": "",
            "distances": {
                "car": 0,
                "walking": 3755,
                "bike": 0,
                "ridesharing": 0
            },
            "tags": [
                "walking",
                "non_pt",
                "non_pt_walking",
                "ecologic"
            ],
            "nb_transfers": 0,
            "durations": {
                "car": 0,
                "walking": 3353,
                "total": 3353,
                "ridesharing": 0,
                "bike": 0
            },
            "arrival_date_time": "20180926T225030",
            "departure_date_time": "20180926T215437",
            "requested_date_time": "20180926T215437",
            "fare": {
                "found": false,
                "links": []
            },
            "co2_emission": {
                "value": 0,
                "unit": ""
            },
            "type": "non_pt_walk",
            "duration": 3353,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "4.421111;51.217222",
                        "quality": 0,
                        "name": "26 Koningin Astridplein (Antwerpen)",
                        "address": {
                            "name": "Koningin Astridplein",
                            "house_number": 26,
                            "coord": {
                                "lat": "51.217222",
                                "lon": "4.421111"
                            },
                            "label": "26 Koningin Astridplein (Antwerpen)",
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                }
                            ],
                            "id": "4.421111;51.217222"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20180926T225030",
                    "departure_date_time": "20180926T215437",
                    "to": {
                        "embedded_type": "address",
                        "id": "4.4162091;51.2459082",
                        "quality": 0,
                        "name": "394 Groenendaallaan (Antwerpen)",
                        "address": {
                            "name": "Groenendaallaan",
                            "house_number": 394,
                            "coord": {
                                "lat": "51.2459082",
                                "lon": "4.4162091"
                            },
                            "label": "394 Groenendaallaan (Antwerpen)",
                            "administrative_regions": [
                                {
                                    "insee": "",
                                    "name": "Antwerpen",
                                    "level": 8,
                                    "coord": {
                                        "lat": "51.221109",
                                        "lon": "4.399708"
                                    },
                                    "label": "Antwerpen",
                                    "id": "admin:osm:59518",
                                    "zip_code": ""
                                }
                            ],
                            "id": "4.4162091;51.2459082"
                        }
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 3755
                            }
                        ],
                        "coordinates": [
                            [
                                4.4206406299,
                                51.2172825534
                            ],
                            [
                                4.420673,
                                51.217534
                            ],
                            [
                                4.420409,
                                51.217544
                            ],
                            [
                                4.420943,
                                51.218066
                            ],
                            [
                                4.420773,
                                51.218343
                            ],
                            [
                                4.4208,
                                51.218878
                            ],
                            [
                                4.4208,
                                51.218883
                            ],
                            [
                                4.420781,
                                51.21892
                            ],
                            [
                                4.420739,
                                51.218999
                            ],
                            [
                                4.420694,
                                51.219086
                            ],
                            [
                                4.42074,
                                51.219799
                            ],
                            [
                                4.42077,
                                51.220135
                            ],
                            [
                                4.420874,
                                51.221339
                            ],
                            [
                                4.421101,
                                51.22133
                            ],
                            [
                                4.420721,
                                51.22191
                            ],
                            [
                                4.421765,
                                51.222559
                            ],
                            [
                                4.422006,
                                51.222566
                            ],
                            [
                                4.421727,
                                51.222865
                            ],
                            [
                                4.421635,
                                51.223372
                            ],
                            [
                                4.421658,
                                51.223525
                            ],
                            [
                                4.421754,
                                51.224207
                            ],
                            [
                                4.421853,
                                51.224684
                            ],
                            [
                                4.421865,
                                51.224761
                            ],
                            [
                                4.421899,
                                51.224963
                            ],
                            [
                                4.42199,
                                51.225511
                            ],
                            [
                                4.421959,
                                51.225609
                            ],
                            [
                                4.421958,
                                51.226025
                            ],
                            [
                                4.422009,
                                51.226725
                            ],
                            [
                                4.422089,
                                51.227084
                            ],
                            [
                                4.421861,
                                51.227318
                            ],
                            [
                                4.421939,
                                51.227725
                            ],
                            [
                                4.421726,
                                51.228243
                            ],
                            [
                                4.421567,
                                51.228526
                            ],
                            [
                                4.421477,
                                51.228729
                            ],
                            [
                                4.420944,
                                51.229851
                            ],
                            [
                                4.420583,
                                51.229807
                            ],
                            [
                                4.42031,
                                51.229804
                            ],
                            [
                                4.420315,
                                51.229879
                            ],
                            [
                                4.420292,
                                51.230152
                            ],
                            [
                                4.420274,
                                51.230178
                            ],
                            [
                                4.420039,
                                51.230208
                            ],
                            [
                                4.419592,
                                51.23063
                            ],
                            [
                                4.419649,
                                51.230853
                            ],
                            [
                                4.419996,
                                51.231191
                            ],
                            [
                                4.420021,
                                51.231208
                            ],
                            [
                                4.420056,
                                51.231705
                            ],
                            [
                                4.419529,
                                51.231806
                            ],
                            [
                                4.419995,
                                51.232081
                            ],
                            [
                                4.420072,
                                51.232383
                            ],
                            [
                                4.420049,
                                51.23481
                            ],
                            [
                                4.420268,
                                51.235156
                            ],
                            [
                                4.420248,
                                51.23539
                            ],
                            [
                                4.420252,
                                51.235469
                            ],
                            [
                                4.420245,
                                51.236456
                            ],
                            [
                                4.420144,
                                51.239387
                            ],
                            [
                                4.420148,
                                51.240985
                            ],
                            [
                                4.419868,
                                51.24431
                            ],
                            [
                                4.419838,
                                51.244633
                            ],
                            [
                                4.419822,
                                51.244735
                            ],
                            [
                                4.419806,
                                51.244826
                            ],
                            [
                                4.419183,
                                51.244824
                            ],
                            [
                                4.418905,
                                51.244817
                            ],
                            [
                                4.418602,
                                51.244949
                            ],
                            [
                                4.418416,
                                51.245114
                            ],
                            [
                                4.418281,
                                51.245444
                            ],
                            [
                                4.418258,
                                51.245764
                            ],
                            [
                                4.418258,
                                51.246456
                            ],
                            [
                                4.418258,
                                51.246485
                            ],
                            [
                                4.417929,
                                51.246597
                            ],
                            [
                                4.416844,
                                51.246591
                            ],
                            [
                                4.4160661699,
                                51.2463229389
                            ]
                        ]
                    },
                    "duration": 3353,
                    "path": [
                        {
                            "duration": 41,
                            "direction": 0,
                            "length": 46,
                            "name": ""
                        },
                        {
                            "duration": 61,
                            "direction": 119,
                            "length": 68,
                            "name": ""
                        },
                        {
                            "duration": 87,
                            "direction": -54,
                            "length": 97,
                            "name": "Koningin Astridplein"
                        },
                        {
                            "duration": 8,
                            "direction": -1,
                            "length": 9,
                            "name": ""
                        },
                        {
                            "duration": 9,
                            "direction": 0,
                            "length": 10,
                            "name": "Koningin Astridplein"
                        },
                        {
                            "duration": 222,
                            "direction": 20,
                            "length": 249,
                            "name": "Van Wesenbekestraat"
                        },
                        {
                            "duration": 76,
                            "direction": 91,
                            "length": 85,
                            "name": "De Coninckplein"
                        },
                        {
                            "duration": 107,
                            "direction": 68,
                            "length": 120,
                            "name": "Muizenstraat"
                        },
                        {
                            "duration": 745,
                            "direction": -118,
                            "length": 834,
                            "name": "Dambruggestraat"
                        },
                        {
                            "duration": 39,
                            "direction": -84,
                            "length": 44,
                            "name": "Ellermanstraat"
                        },
                        {
                            "duration": 38,
                            "direction": 93,
                            "length": 43,
                            "name": ""
                        },
                        {
                            "duration": 194,
                            "direction": -55,
                            "length": 217,
                            "name": "IJzeren Rijn"
                        },
                        {
                            "duration": 35,
                            "direction": -76,
                            "length": 39,
                            "name": "Kempenstraat"
                        },
                        {
                            "duration": 315,
                            "direction": 120,
                            "length": 353,
                            "name": ""
                        },
                        {
                            "duration": 37,
                            "direction": 22,
                            "length": 41,
                            "name": ""
                        },
                        {
                            "duration": 959,
                            "direction": -25,
                            "length": 1074,
                            "name": "Noorderlaan"
                        },
                        {
                            "duration": 55,
                            "direction": -84,
                            "length": 62,
                            "name": "Groenendaallaan"
                        },
                        {
                            "duration": 43,
                            "direction": 37,
                            "length": 48,
                            "name": ""
                        },
                        {
                            "duration": 134,
                            "direction": 21,
                            "length": 150,
                            "name": ""
                        },
                        {
                            "duration": 26,
                            "direction": -61,
                            "length": 29,
                            "name": ""
                        },
                        {
                            "duration": 67,
                            "direction": -29,
                            "length": 75,
                            "name": ""
                        },
                        {
                            "duration": 55,
                            "direction": 0,
                            "length": 62,
                            "name": ""
                        }
                    ],
                    "type": "street_network",
                    "id": "section_3_0",
                    "mode": "walking"
                }
            ]
        }
    ],
    "disruptions": [],
    "notes": [
        {
            "category": "comment",
            "type": "notes",
            "id": "note:515792743593716418",
            "value": "P+R Olympiade - P+R Luchtbal/P+R Luchtbal - P+R Olympiade"
        }
    ],
    "feed_publishers": [
        {
            "url": "navitia.io",
            "id": "be",
            "license": "OpenData",
            "name": "Belgium"
        },
        {
            "url": "https://www.openstreetmap.org/copyright",
            "id": "osm",
            "license": "ODbL",
            "name": "openstreetmap"
        },
        {
            "url": "https://hello.irail.be",
            "id": "OFL",
            "license": "Terms of Use",
            "name": "OFL - Flemish bus company"
        }
    ],
    "context": {
        "timezone": "Europe/Brussels",
        "current_datetime": "20180926T215438",
        "car_direct_path": {
            "co2_emission": {
                "value": 797.084067036,
                "unit": "gEC"
            }
        }
    },
    "exceptions": []
}