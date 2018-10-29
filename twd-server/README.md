## The Walking Dead API

#Introduction

This documentation will help you get familiar with the resources of The Walking Dead API and show you how to make different queries, so that you can get the most out of it. All requests are type of GET.

# BASE URL: https://the-walking-dead-api.herokuapp.com/

# INFO URL: https://the-walking-dead-api.herokuapp.com/info

Response Class (Status 200) OK

Example value:

{
    photo: 'string',
    genre: 'array',
    based_on: 'string',
    developed_by: 'string',
    starring: 'array',
    music_by: 'string',
    country_of_origin: 'string',
    original_language: 'string',
    num_of_seasons: 'number',
    num_of_episodes: 'number',
    executive_producers: 'array',
    producers: 'array',
    production_location: 'string',
    cinematography: 'array',
    editors: 'array',
    running_time: 'string',
    production_companies: 'array',
    distributor: 'string',
    original_network: 'string',
    picture_format: ''string',
    audio_format: 'array',
    original_release: 'string',
    related_shows: 'array'
}

# BOOKS URL: https://the-walking-dead-api.herokuapp.com/books

Response Class (Status 200) OK

Example value:
[
    {   
        id: 'number',
        name: 'string',
        photo: 'string',
        author: 'array',
        publisher: 'string',
        published: 'string',
        characters: 'array',
        plot: [
            {
                    name: 'string',
                    summary: 'string'
            },
        ] 
    },
]

# SINGLE BOOK URL: https://the-walking-dead-api.herokuapp.com/books/{id}

Response Class (Status 200) OK

Example value:

{   
    id: 'number',
    name: 'string',
    photo: 'string',
    author: 'array',
    publisher: 'string',
    published: 'string',
    characters: 'array',
    plot: [
        {
                name: 'string',
                summary: 'string'
        },
    ] 
},

#CHARACTERS URL: https://the-walking-dead-api.herokuapp.com/characters

Response Class (Status 200) OK

Example value:

[
    main_characters: [
        {
            id: 'number',
            name: 'string',
            photo: 'string',
            actor: 'string',
            gender: 'string',
            hair: 'string',
            age: 'string',
            occupation: 'array',
            family: 'array'
            first_appearance: 'string',
            last_appearance: 'string',
            status: {
                alive: {
                    status: "string",
                    lifespan: 'string'
                },
                dead: ""
            },
            ethnicity: 'string',
            description: 'string'
        },
    ],
    supporting_cast: [
        {
            id: 'number',
            name: 'string',
            photo: 'string',
            actor: 'string',
            gender: 'string',
            hair: 'string',
            age: 'string',
            occupation: 'array',
            first_appearance: 'string',
            last_appearance: 'string',
            status: {
                alive: 'string'
                dead: {
                    status: 'string',
                    death_episode: 'string',
                    cause_of_death: 'string',
                    photo: 'array'
                }
            },
            ethnicity: 'string',
            description: 'string'
        },
    ]
]

# SINGLE CHARACTER URL: https://the-walking-dead-api.herokuapp.com/characters/{id}

Response Class (Status 200) OK

Example value:

{
    id: 'number',
    name: 'string',
    photo: 'string',
    actor: 'string',
    gender: 'string',
    hair: 'string',
    age: 'string',
    occupation: 'array',
    family: 'array',
    first_appearance: 'string',
    last_appearance: 'string',
    status: {
        alive: {
            status: "string",
            lifespan: 'string'
        },
        dead: ""
    },
    ethnicity: 'string',
    description: 'string'
},

# COMICS URL:

GET https://the-walking-dead-api.herokuapp.com/comics

Response Class (Status 200) OK

Example value:

{
    info: 'string',
    publisher: 'array',
    volumes: [
        {
            id: 'number',
            volume: 'number',
            title: 'string',
            photo: 'string',
            plot: 'string',
            characters: 'array',
            issues: [
                {
                    id: 'number',
                    title: 'string',
                    photo: 'string',
                    release_date: 'array',
                    creator_writer: 'string',
                    penciler_inker: 'string',
                    volume: 'string',
                    part: 'string'
                },
            ],
            publisher: 'string',
            published: 'string'
        },
    ]
}

# SINGLE VOLUME URL: https://the-walking-dead-api.herokuapp.com/comics/volumes/{name}

Response Class (Status 200) OK

Example value:

{
    id: 'number',
    volume: 'number',
    title: 'string',
    photo: 'string',
    plot: 'string',
    characters: 'array',
    issues: [
        {
            id: 'number',
            title: 'string',
            photo: 'string',
            release_date: 'array',
            creator_writer: 'string',
            penciler_inker: 'string',
            volume: 'string',
            part: 'string'
        },
    ],
    publisher: 'string',
    published: 'string'
},

# SINGLE ISSUE URL: https://the-walking-dead-api.herokuapp.com/comics/volumes/{name}/{id}

Response Class (Status 200) OK

Example value:
{
    id: 'number',
    title: 'string',
    photo: 'string',
    release_date: 'array',
    creator_writer: 'string',
    penciler_inker: 'string',
    volume: 'string',
    part: 'string'
},

# EPISODES URL: https://the-walking-dead-api.herokuapp.com/episodes

Response Class (Status 200) OK

Example value:

[
    {
        ep: 'number',
        season: 'number',
        season_ep: 'number',
        title: 'string',
        director: 'string',
        air_date: 'string',
        us_viewers: 'string',
        video: 'string',
        photo: 'string',
        plot: 'string'
    },
]

# SINGLE EPISODE URL: https://the-walking-dead-api.herokuapp.com/episodes/{id}

Response Class (Status 200) OK

Example value:

{
    ep: 'number',
    season: 'number',
    season_ep: 'number',
    title: 'string',
    director: 'string',
    air_date: 'string',
    us_viewers: 'string',
    video: 'string',
    photo: 'string',
    plot: 'string'
},

# SEASONS URL: https://the-walking-dead-api.herokuapp.com/seasons

Response Class (Status 200) OK

Example value:

[
    {
        num: 'string',
        photo: 'string',
        description: 'string',
        main_cast: [
            {
                character: 'string',
                actor: 'string',
                description: 'string'
            },
        ],
        supporting_cast: [
            {
                character: 'string',
                actor: 'string',
                description: 'string'
            },
        ],
        episodes: [
            {
                ep: 1,
                season: 1,
                season_ep: 1,
                title: 'string',
                director: 'string',
                air_date: 'string',
                us_viewers: 'string',
                video: 'string',
                photo: 'string',
                plot: 'string',
            },
        ],
    }
]

# SINGLE SEASON URL: https://the-walking-dead-api.herokuapp.com/seasons/{id}

Response Class (Status 200) OK

Example value:

{
    num: 'string',
    photo: 'string',
    description: 'string',
    main_cast: [
        {
            character: 'string',
            actor: 'string',
            description: 'string'
        },
    ],
    supporting_cast: [
        {
            character: 'string',
            actor: 'string',
            description: 'string'
        },
    ],
    episodes: [
        {
            ep: 1,
            season: 1,
            season_ep: 1,
            title: 'string',
            director: 'string',
            air_date: 'string',
            us_viewers: 'string',
            video: 'string',
            photo: 'string',
            plot: 'string',
        },
    ],
}
















 