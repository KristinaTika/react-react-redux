const seasons = [
    {
        num: "1 (2010)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/0/0e/TheWalkingDeadPoster.jpg/220px-TheWalkingDeadPoster.jpg",
        description: "Sheriff's deputy Rick Grimes wakes from a coma discovering a world overrun by zombies. After befriending Morgan Jones, Rick travels alone to Atlanta to find his wife Lori, his son, Carl, and his police partner and best friend, Shane Walsh, encountering other survivors. The group travels to the Centers for Disease Control (CDC), but find from the sole remaining CDC member that no cure exists for the epidemic.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist and former sheriff's deputy from King County, Georgia, who awakens from a coma into the apocalypse. After becoming aware of the apocalypse, Rick sets out to find his wife, Lori, and son, Carl."
            },
            {
                character: "Shane Walsh",
                actor: "Jon Bernthal",
                description: "Shane Walsh, Rick's best friend since high school and former colleague, who helped Rick's family escape the apocalypse and is the leader of the Atlanta camp. Believing Rick to be dead, he also started a relationship with Lori, leading to complications when Rick unexpectedly returns alive and well."
            },
            {
                character: "Lori Grimes",
                actor: "Sarah Wayne Callies",
                description: "Lori Grimes, Rick's wife and mother of Carl. Lori is an emotionally fragile yet independent woman, who started a relationship with Shane out of her grief for losing Rick, leaving her off-guard and very conflicted when Rick returns."
            },
            {
                character: "Andrea",
                actor: "Laurie Holden",
                description: "Andrea, a former successful civil rights attorney and sister of Amy. Andrea has a slight temper, but has a compassionate side and is very protective of her sister; both of them share a close bond with Dale."
            },
            {
                character: "Dale Horvath",
                actor: "Jeffrey DeMunn",
                description: "Dale Horvath, an elderly survivor, who owns the RV around which the survivors have formed a camp. Dale is a wise man of morals, who isn't afraid to voice his opinion and is very protective of everyone's well-being, physically and emotionally. He serves as an adviser to Shane, then to Rick. Dale also has a close bond with Andrea and Amy."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, a former pizza delivery boy, who knows his way around Atlanta and often embarks on dangerous supply runs for the group. Glenn is a highly intelligent and resourceful, though slightly cocky yet hopeful individual, who cares for everyone yet he is easily taken advantage of by the other group members; Rick trusts him on supply runs."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: "Carl Grimes, Rick and Lori's son. He and his mother are taken to Atlanta by Shane after the initial outbreak."
            }
        ],
        supporting_cast: [
            {
                character: "Amy",
                actor: "Emma Bell",
                description: "Amy, Andrea's younger, childish and innocent sister; both have a close bond with Dale. Amy is shown to generally care for the children in the camp."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, Merle's equally aggressive and volatile younger brother and hunter. Unlike Merle, however, Daryl is far more reasonable and willing to follow the group's lead."
            },
            {
                character: "Theodore 'T-Dog' Douglas",
                actor: "IronE Singleton",
                description: "Theodore 'T-Dog' Douglas, a fellow survivor in the Atlanta group. T-Dog is a man of honor and duty, who always tries to do what's right by people even if they don't deserve it or he doesn't like it, and is heavily burdened when he makes mistakes and always tries to make it right."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, Lori's best friend since the outbreak occurred and the mother of Sophia and the friendly yet soft-spoken wife of Ed."
            },
            {
                character: "Morgan Jones",
                actor: "Lennie James",
                description: "Morgan Jones, Duane's father, Jenny's husband and the first survivor that Rick encounters."
            },
            {
                character: "Merle Dixon",
                actor: "Michael Rooker",
                description: "Merle Dixon, former military and drug dealer and Daryl's racist, volatile and unreasonable older brother, who is also a hunter. His volatile tendencies often put him at odds with the group."
            }
        ],
        episodes: [
            {

                ep: 1,
                season: 1,
                season_ep: 1,
                title: "Days Gone Bye",
                director: "Frank Darabont",
                air_date: "October 31, 2010",
                us_viewers: "5.35 millions",
                video: 'https://www.youtube.com/embed/FFEvjqL4ces?rel=0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/82/AMC_TWD_Days_Gone_Bye.png/revision/latest/scale-to-width-down/350?cb=20150802110530",
                plot: "Sheriff's deputy Rick Grimes wakes from a gunshot-inflicted coma to discover the world overrun with walkers. He goes back to his house to find his wife and son but meets survivor Morgan Jones and his son Duane. Rick decides to head to Atlanta to find his wife Lori and son Carl, unaware they are safe with other survivors led by his former partner Shane). He encounters hordes of walkers and becomes trapped inside a tank."
            },
            {

                ep: 2,
                season: 1,
                season_ep: 2,
                title: "Guts",
                director: "Michelle MacLaren",
                air_date: "November 7, 2010",
                us_viewers: "4.71 millions",
                video: 'https://www.youtube.com/embed/OSBLOwojkr8',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/45/AMC_TWD_Guts.png/revision/latest/scale-to-width-down/350?cb=20150802110604",
                plot: "Rick is ambushed by a walker horde but is rescued by scavenger survivor Glenn when he becomes trapped inside a tank. They meet up with the rest of the survivors where they have to leave Merle handcuffed to the roof to stop him attracting walkers. They are forced to leave Rick's gun bag behind as well as abandon the unhinged Merle as walkers surround them, but manage to escape the city."
            },
            {

                ep: 3,
                season: 1,
                season_ep: 3,
                title: "Tell it to the Frogs",
                director: "Gwyneth Horder-Payton",
                air_date: "November 14, 2010",
                us_viewers: "5.07 millions",
                video: 'https://www.youtube.com/embed/Qqp6JxCfJ3c',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/d0/AMC_TWD_Tell_It_to_the_Frogs.png/revision/latest/scale-to-width-down/350?cb=20150802110641",
                plot: "Glenn takes Rick to the survivors' camp, where he finds Lori, Carl, and Shane. Rick leads a group, including Glenn, T-Dog, and Merle's younger brother, Daryl back to Atlanta to recover his weapons, finding that Merle managed to free himself by sawing off his hand."
            },
            {

                ep: 4,
                season: 1,
                season_ep: 4,
                title: "Vatos",
                director: "Johan renck",
                air_date: "November 21, 2010",
                us_viewers: "4.75 millions",
                video: 'https://www.youtube.com/embed/SGGgBMzQLWU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/df/AMC_TWD_Vatos.png/revision/latest/scale-to-width-down/350?cb=20170810031833",
                plot: "Rick's group briefly scuffles with a group of Latino survivors protecting the residents of a nursing home in Atlanta, who want Rick's weapons, but Rick is able to defuse the situation peacefully. They return to camp too late to stop a walker horde from attacking, killing Andrea's sister Amy, and Carol's husband Ed."
            },
            {

                ep: 5,
                season: 1,
                season_ep: 5,
                title: "Wildfire",
                director: "Ernest Dickerson",
                air_date: "November 28, 2010",
                us_viewers: "5.56 millions",
                video: 'https://www.youtube.com/embed/g5kZxSrZHKs',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/15/AMC_TWD_Wildfire.png/revision/latest/scale-to-width-down/350?cb=20170810030816",
                plot: "As the survivors bury their dead, some split off on their own. Rick, against Shane's judgement, leads the rest to the CDC facility in Atlanta, which initially appears abandoned and locked-down, but Rick spots signs of life and demands entry."
            },
            {

                ep: 6,
                season: 1,
                season_ep: 6,
                title: "TS-19",
                director: "Guy Ferland",
                air_date: "December 5, 2010",
                us_viewers: "5.97 millions",
                video: 'https://www.youtube.com/embed/g-utbRfhNUU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/1f/AMC_TWD_TS-19.png/revision/latest/scale-to-width-down/350?cb=20170810021306",
                plot: "Dr. Edwin Jenner of the CDC welcomes the survivors, allowing them to enjoy the amenities of the powered building while explaining what he knows about walkers. When the survivors discover that the building will self-detonate once it runs out of backup power, Dr. Jenner initially prevents them from leaving. Rick convinces Jenner to let them go, and Jenner whispers something to Rick. They escape just before the building explodes, and the group departs the city."
            },
        ],
    },
    {
        num: "2 (2011–12)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/d/d8/TWD%2C_Season_2_Cast.jpg/300px-TWD%2C_Season_2_Cast.jpg",
        description: "Traveling from Atlanta, Rick's group takes shelter at Hershel Greene's farm while they search for Carol's missing daughter, Sophia. Tensions between Rick's group and Hershel's family worsen after it is discovered that Hershel has kept friends and family turned into zombies, including Sophia, in his barn. Shane and Rick's friendship becomes increasingly unhinged when Lori reveals that she is pregnant, and Rick is forced to kill Shane in self-defense. Carl then shoots Shane in the head after he reanimates. The noise draws zombies, forcing Rick's group and Hershel's surviving family to evacuate the farm.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist and a former sheriff's deputy from King County, Georgia, who is the husband of Lori and the father of Carl. Rick has taken leadership from Shane after his actions almost killed them in the previous season."
            },
            {
                character: "Shane Walsh",
                actor: "Jon Bernthal",
                description: "Shane Walsh, Rick's close friend, and former deputy sheriff. He had a love affair with Lori in the previous season, believing that Rick had died, which has turned into jealousy towards Rick, forming an intense rivalry and is also the main antagonist of the season."
            },
            {
                character: "Lori Grimes",
                actor: "Sarah Wayne Callies",
                description: "Lori Grimes, Rick's emotionally fragile wife and mother of Carl. She had a love affair with Shane in the previous season, which has put her and Shane at odds."
            },
            {
                character: "Andrea",
                actor: "Laurie Holden",
                description: "Andrea, a former civil rights attorney, who has formed a close bond with Dale. She deals with suicidal tendencies after the loss of her sister by trying to contribute more to the group's safety by becoming a sharp shooter."
            },
            {
                character: "Dale Horvath",
                actor: "Jeffrey DeMunn",
                description: "Dale Horvath, an older member of the group, who owns the RV with which the group travels. He is often the voice of reason; he forms a protectiveness over Andrea and becomes a mentor to the group, especially to Rick and Glenn. He is also a good friend of T-Dog."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, a former pizza delivery boy, who saved Rick's life in previous season. He is an integral member of the group and does many supply runs for them. He cares very much for the core group of survivors."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: "Carl Grimes, Rick and Lori's young son, whose innocence has slowly declined due to the brutality of the world around him, even wanting to use a gun."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, an antihero-like Southern redneck, the group's hunter, and expert tracker. He is less friendly with the group and maintains a careless facade, but is reasonable enough to fight with them when needed and is the most active in the group for the search for Sophia."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, a former victim of domestic abuse, who has found new strength after the death of her abusive husband Ed."
            },
        ],
        supporting_cast: [
            {
                character: "Theodore 'T-Dog' Douglas",
                actor: "IronE Singleton",
                description: "Theodore 'T-Dog' Douglas, a member of the group and a man of honor, duty and well-intentions, who feels under-appreciated and tries to contribute as much as possible. He also has a strong friendship with Dale."
            },
            {
                character: "Maggie Greene",
                actor: "Lauren Cohan",
                description: "Maggie Greene, Hershel's elder tomboyish daughter, who is strong-willed and determined, yet slightly stubborn. Maggie is, like her father, ignorant of what the walkers are."
            },
            {
                character: "Beth Greene",
                actor: "Emily Kinney",
                description: "Beth Greene, Hershel's younger daughter and Maggie's half-sister. She is shy, soft-spoken and compassionate, but lacks the strong-will of her sister."
            },
            {
                character: "Hershel Greene",
                actor: "Scott Wilson",
                description: "Hershel Greene, a veterinarian and religious farmer, who is blinded by his own refusal to accept the world's new state, believing that the walkers are just sick."
            },
            {
                character: "Patricia",
                actor: "Jane McNeill",
                description: "Patricia, Otis' quiet wife and Hershel's medical aid."
            },
            {
                character: "Jimmy",
                actor: "James Allen McCune",
                description: "Jimmy, Beth's protective and helpful boyfriend."
            },
            {
                character: "Sophia Peletier",
                actor: "Madison Lintz",
                description: "Sophia Peletier, Carol's daughter and Carl's best friend."
            },
            {
                character: "Otis",
                actor: "Pruitt Taylor Vince",
                description: "Otis, Hershel's ranch hand and Patricia's husband."
            },
            {
                character: "Merle Dixon",
                actor: "Michael Rooker",
                description: "Merle Dixon, Daryl's violent and unreasonable older brother, who disappeared in the first season; seen in a hallucination."
            },
        ],
        episodes: [
            {
                ep: 7,
                season: 2,
                season_ep: 1,
                title: "What Lies Ahead",
                director: "Ernest Dickerson, Gwyneth Holder-Payton",
                air_date: "October 16, 2011",
                us_viewers: "7.26 millions",
                video: 'https://www.youtube.com/embed/bVNeNrPClP4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/fa/AMC_TWD_What_Lies_Ahead.png/revision/latest/scale-to-width-down/350?cb=20150802110833",
                plot: "While traveling to Fort Benning, the survivors are forced to hide among a number of abandoned vehicles as a walker horde passes. Sophia, Carol's daughter, is chased off into the woods by two walkers before they are killed by Rick. While searching for Sophia, Carl is accidentally shot."
            },
            {
                ep: 8,
                season: 2,
                season_ep: 2,
                title: "Bloodletting",
                director: "Ernest Dickerson",
                air_date: "October 23, 2011",
                us_viewers: "6.70 millions",
                video: 'https://www.youtube.com/embed/2bN9Mt7zDJ0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c1/WD_S2E02_v2_800x600.jpg/revision/latest/scale-to-width-down/350?cb=20161214200649",
                plot: "Otis, the hunter that accidentally shot Carl, helps Rick to bring Carl to a farmstead owned by veterinarian Hershel Greene, who stabilizes Carl, but needs further medical supplies to heal him. Shane and Otis leave to a walker-infested school to find supplies. They do so, but are caught and attacked by the horde."
            },
            {
                ep: 9,
                season: 2,
                season_ep: 3,
                title: "Save the Last one",
                director: "Phil Abraham",
                air_date: "October 30, 2011",
                us_viewers: "6.10 millions",
                video: 'https://www.youtube.com/embed/0vz4f9tOSog',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/31/AMC_TWD_Save_the_Last_One.png/revision/latest/scale-to-width-down/350?cb=20150802110934",
                plot: "Shane manages to escape with the supplies by shooting Otis in the leg, while the walkers devour him instead; when he returns to the farm, Shane lies that Otis sacrificed himself. Daryl continues the search for Sophia, while the other survivors start arriving at the farm and their wounds tended to by Hershel."
            },
            {
                ep: 10,
                season: 2,
                season_ep: 4,
                title: "Cherokee Rose",
                director: "Billy Gierhart",
                air_date: "November 6, 2011",
                us_viewers: "6.29 millions",
                video: 'https://www.youtube.com/embed/B7rrY5Yh6BQ',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/8b/AMC_TWD_Cherokee_Rose.png/revision/latest/scale-to-width-down/350?cb=20150802111010",
                plot: "With Hershel's surgery on Carl successful, Hershel tells Rick that his group should leave his farm once Carl is well enough, but Rick convinces him to allow them to stay if they follow Hershel's rules. The survivors attempt to remove a walker from the farm's well-water. Glenn and Hershel's daughter, Maggie, begin a romantic relationship, while Lori discovers she is pregnant."
            },
            {
                ep: 11,
                season: 2,
                season_ep: 5,
                title: "Chupacabra",
                director: "Guy Ferland",
                air_date: "November 13, 2011",
                us_viewers: "6.12 millions",
                video: 'https://www.youtube.com/embed/J9REYBrsB0g',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/05/AMC_TWD_Chupacabra.png/revision/latest/scale-to-width-down/350?cb=20150802111112",
                plot: "Daryl continues to search for Sophia, despite Rick and Shane arguing whether it is pointless and Hershel becoming more unnerved by the group's presence. As Glenn's relationship with Maggie continues in secret, Glenn offers to meet Maggie in the barn's hayloft, and Maggie is too late to stop him from discovering the barn is filled with walkers."
            },
            {
                ep: 12,
                season: 2,
                season_ep: 6,
                title: "Secrets",
                director: "David Boyd",
                air_date: "November 20, 2011",
                us_viewers: "6.08 millions",
                video: 'https://www.youtube.com/embed/daywqcgLfkM',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/0c/AMC_TWD_Secrets.png/revision/latest/scale-to-width-down/350?cb=20150802111203",
                plot: "Glenn tells Dale about the walkers, and together discreetly approach Hershel, who explains the walkers are his friends and family, and believes they can be cured. Rick discovers that Lori is pregnant, and tensions rise between Rick and Shane over what transpired with Lori while Rick was in a coma."
            },
            {
                ep: 13,
                season: 2,
                season_ep: 7,
                title: "Pretty Much Dead Already",
                director: "Michelle MacLaren",
                air_date: "November 27, 2011",
                us_viewers: "6.62 millions",
                video: 'https://www.youtube.com/embed/QgvC7200Rfk',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c7/AMC_TWD_Pretty_Much_Dead_Already.png/revision/latest/scale-to-width-down/350?cb=20150802111233",
                plot: "Glenn reveals the presence of the walkers in the barn to the rest of the group, and Rick confronts Hershel about it. Hershel tells Rick their group can only stay if they promise not to kill any walkers, and takes Rick out to demonstrate how to capture them. When they return, Shane becomes enraged, and releases the barn's locks, letting the walkers trickle out, and the group is forced to kill them. One last walker appears: Sophia. Rick is forced to shoot her in the head."
            },
            {
                ep: 14,
                season: 2,
                season_ep: 8,
                title: "Nebraska",
                director: "Clark Johnson",
                air_date: "February 12, 2012",
                us_viewers: "8.10 millions",
                video: 'https://www.youtube.com/embed/IxVgihOTKzE',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/09/AMC_TWD_Nebraska.png/revision/latest/scale-to-width-down/350?cb=20150802111312",
                plot: "Hershel demands Rick's group leave. The group is shaken by the loss of Sophia and they bury her along with Hershel's wife and son-in-law. Hershel goes missing; Rick and Glenn find him drinking in a nearby town bar. When they turn to leave, they are confronted by two men, Dave and Tony, that want to know about Hershel's farm. Rick kills them before they attack the three."
            },
            {
                ep: 15,
                season: 2,
                season_ep: 9,
                title: "Triggerfinger",
                director: "Billy Gierhard",
                air_date: "February 19, 2012",
                us_viewers: "6.89 millions",
                video: 'https://www.youtube.com/embed/Oz5YsgCmAyA',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/0d/AMC_TWD_Triggerfinger.png/revision/latest/scale-to-width-down/350?cb=20150802111343",
                plot: "Three other men arrive at the bar to investigate the gunfire, and Rick, Glenn, and Hershel attempt to sneak away. Their activities have lured walkers to the town, and in their haste to escape, one of the three men, Randall, gets his leg impaled on a fence. Rick is unable to leave him behind and helps to free him, taking him with them back to the farm. The other survivors at the farm start to recognize Shane is becoming more unhinged."
            },
            {
                ep: 16,
                season: 2,
                season_ep: 10,
                title: "18 Milles Out",
                director: "Ernest Dickerson",
                air_date: "February 26, 2012",
                us_viewers: "7.04 millions",
                video: 'https://www.youtube.com/embed/_vsYTiSYZ1g',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c9/AMC_TWD_18_Miles_Out.png/revision/latest/scale-to-width-down/350?cb=20150802111415",
                plot: "Rick and Shane take a healed Randall several miles from the farm with the intent to abandon him without knowledge of the farm's location, but once there, have an argument, which turns physical, about not only what to do with Randall, but the fissure between Rick and Shane's leadership with the group. When the brawl attract a pack of walkers, they are forced to take Randall back to the farm. Meanwhile, Hershel's daughter Beth attempts suicide while under Andrea's watch, but is saved by Maggie and Lori."
            },
            {
                ep: 17,
                season: 2,
                season_ep: 11,
                title: "Judge, Jury, Executioner",
                director: "Greg Nicotero",
                air_date: "March 4, 2012",
                us_viewers: "6.77 millions",
                video: 'https://www.youtube.com/embed/VGyYcSTckP0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/fa/AMC_TWD_Judge%2C_Jury%2C_Executioner.png/revision/latest/scale-to-width-down/350?cb=20150802111443",
                plot: "Randall is kept in custody, and they learn his group would be dangerous to bring to the farm, and that letting Randall live to reveal the farm's location would be a risk. Dale tries to calm tensions reminding everyone about their humanity and warning them the group is broken. Carl attempts to kill a walker in the forest, but it scares him away. Shane, Rick, and Daryl take Randall out to the barn to execute him, but Ricks stops when he sees that Carl was watching. Later, as Dale paces on the outskirts of the farm, he is mortally wounded by the walker Carl failed to kill. Daryl dispatches the walker before mercifully killing Dale."
            },
            {
                ep: 18,
                season: 2,
                season_ep: 12,
                title: "Better Angels",
                director: "Guy Ferland",
                air_date: "March 11, 2012",
                us_viewers: "6.89 millions",
                video: 'https://www.youtube.com/embed/mPrdxCnT_Kg',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/b/ba/AMC_TWD_Better_Angels.png/revision/latest/scale-to-width-down/350?cb=20150802111515",
                plot: "As Dale is laid to rest, his advice to the group sits heavy with Rick, and he decides they should spare Randall's life. However, Shane secretly takes Randall deep into the woods and murders him, then returns and claims Randall escaped. The group searches for him, and Shane uses the opportunity to confront Rick at gunpoint, intent on killing him. Rick, after trying unsuccessfully to calm Shane down, is forced to stab him to death, unaware Carl is watching nearby. Carl holds his gun at Rick, but uses it to shoot Shane, who has reanimated as a walker, in the head. The gunfire draws a horde of walkers to the farm."
            },
            {
                ep: 19,
                season: 2,
                season_ep: 13,
                title: "Beside the Dying Fire",
                director: "Ernest Dickerson",
                air_date: "March 18, 2012",
                us_viewers: "8.99 millions",
                video: 'https://www.youtube.com/embed/eFEAX4sZIx8',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/4d/AMC_TWD_Beside_the_Dying_Fire.png/revision/latest/scale-to-width-down/350?cb=20150802111542",
                plot: "Hershel's farm is swarmed by walkers and overwhelm the survivors, forcing them to abandon it, bringing Hershel, Maggie, and Beth with them. After regrouping, Rick is forced to tell them what Jenner told him; they are all infected with the walker virus and will automatically become walkers upon death, regardless of how they die. He takes charge of the group to find them a safe haven. Andrea is separated from the others during the evacuation from the farm, but found by a mysterious hooded person, who has two armless walker pets and wields a katana."
            },
        ]
    },
    {
        num: "3 (2012–13)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/e/e8/Walking_Dead_Season_3_Official_Poster.jpg/220px-Walking_Dead_Season_3_Official_Poster.jpg",
        description: "Eight months after fleeing Hershel's farm, Rick's group finds a prison, which they clear of zombies to make their new home. Lori dies in childbirth, and Rick becomes withdrawn. Meanwhile, Andrea is rescued by Michonne and the two discover Woodbury, a fortified town led by a man known as the Governor. He learns of Rick's group at the prison, leading to conflict between them. Rick's group eventually raids and destroys Woodbury, but the Governor has Andrea ultimately killed and escapes. Woodbury's citizens live with Rick's group at the prison.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist and a former sheriff's deputy, who has established himself as the group's leader. Rick has become a more cold and calculating leader, willing to leave strangers to die and abandon group members if it means everyone else survives, and comes into conflict with The Governor. Rick has also become distant, resentful of Lori's ambivalence and anger towards him after telling her he'd killed Shane."
            },
            {
                character: "Lori Grimes",
                actor: "Sarah Wayne Callies",
                description: "Sarah Wayne Callies as Lori Grimes, Rick's wife and Carl's mother, who is 9 months pregnant but is resented by Rick and Carl for her affair with Shane and the problems it led to."
            },
            {
                character: "Andrea",
                actor: "Laurie Holden",
                description: "Andrea, a former successful civil rights attorney, who was separated from the group at the end of the second season. She befriends Michonne and forms a relationship with The Governor."
            },
            {
                character: "Michonne",
                actor: "Danai Gurira",
                description: "Michonne, the katana-wielding hooded figure, who saves Andrea in the season two finale. Michonne is a quiet and seemingly ruthless survivalist, who immediately dislikes The Governor. She forms a bond with Rick's son Carl and begins to shed her brutality for a healthier mindset."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, a former pizza delivery boy and Maggie's boyfriend. Glenn has found something in Maggie that he doesn't want to lose and has become very protective of her."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: "Carl Grimes, Rick and Lori's young son, who has also become more cold and brutal following his father's example, but is often frustrated when he is forbidden to contribute more often, as the elder members of the group seek to retain his innocence."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, an antihero-like Southern redneck, who's also the group's primary hunter. He has become Rick's right-hand man and closest ally since Shane's death."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, a former victim of domestic abuse, who is now the last surviving member of her family, having lost her daughter Sophia last season. Carol also has a close bond with Daryl, and dislikes his brother Merle for his influence over him but sees Daryl's potential in him too."
            },
            {
                character: "Maggie Greene",
                actor: "Lauren Cohan",
                description: "Maggie Greene, Hershel's strong-willed and determined elder daughter and Glenn's girlfriend. Maggie has come to terms with the walker virus and has since become a good fighter and an integral member of the core group."
            },
            {
                character: "Merle Dixon",
                actor: "Michael Rooker",
                description: "Merle Dixon, an unruly Southern redneck and Daryl's older brother, who disappeared in the first season. Merle is the right hand of The Governor, but Daryl, being his brother, could change that."
            },
            {
                character: "The Governor",
                actor: "David Morrissey",
                description: "The Governor, leader of the town of Woodbury, father of Penny, and the primary antagonist of the season. The Governor is a ruthless, paranoid, and dangerous sociopath, who will murder anyone he sees as a threat to his community, and seeks to eliminate Rick's group when they move into the prison nearby."
            },
            {
                character: "Hershel Greene",
                actor: "Scott Wilson",
                description: "Hershel Greene, a religious farmer, trained veterinarian, and father of Maggie and Beth, as well as a father figure to Glenn. He serves as the group's primary moral compass and Rick's main adviser."
            },
        ],
        supporting_cast: [
            {
                character: "Theodore 'T-Dog' Douglas",
                actor: "IronE Singleton",
                description: "Theodore 'T-Dog' Douglas,a survivor of the original Atlanta group, who struggles to prove his worth to the group, but is a brave individual willing to risk his life for everyone else's sake"
            },
            {
                character: "Beth Greene",
                actor: "Emily Kinney",
                description: "Beth Greene, Hershel's soft-spoken younger daughter and Maggie's half-sister, who has accepted the world's new state, having previously tried to kill herself, and has become more skilled at killing walkers. She often tries to boost morale by singing."
            },
            {
                character: "Caesar Martinez",
                actor: "Jose Pablo Cantillo",
                description: "Caesar Martinez, one of The Governor's men. Martinez is a loyal, slightly egotistical, member of Governor's forces, but is reasonable and has honor, and is even disturbed by The Governor's actions but is willing to do what is needed to stay alive."
            },
            {
                character: "Milton Mamet",
                actor: "Dallas Roberts",
                description: "Milton Mamet, a scientist and old friend of The Governor, who studies the walkers believing there can be a way to restore their humanity, but is reluctant to accept The Governor for the monster he is as he knew him before the outbreak."
            },
            {
                character: "Tyreese Williams",
                actor: "Chad L. Coleman",
                description: "Tyreese Williams, a survivor leading a small group of people to safety, who finds the group in the prison, but is tossed out by a mentally unstable Rick against everyone else's advice. He eventually joins Woodbury, unaware of The Governor's true nature. Tyreese is a man of morals and principles willing to do what it takes the earn his place and to find a safe haven for his sister and friends, but is hesitant to hurt people even if needed."
            },
            {
                character: "Sasha Williams",
                actor: "Sonequa Martin-Green",
                description: "Sasha Williams, Tyreese's sister, who is trying to find shelter with her brother and finds the group in the prison but is tossed out by a mentally unstable Rick, against everyone else's advice, and joins Woodbury unaware of The Governor's true nature. Unlike Tyreese, Sasha has a colder survival mindset which sometimes puts her into conflict with her brother, but she is still compassionate enough to avoid unnecessary bloodshed."
            },
            {
                character: "Morgan Jones",
                actor: "Lennie James",
                description: "Morgan Jones, the first person Rick encountered and befriended after awakening from his coma who, along with his son Duane, were believed dead. Though a kind and moral father, Morgan has suffered a psychological break after his son was killed by his undead wife after Morgan failed to shoot her earlier. Morgan now believes his life's purpose is to clear Rick's hometown of all walkers and people and unintentionally almost kills Rick."
            },



        ],
        episodes: [
            {
                ep: 20,
                season: 3,
                season_ep: 1,
                title: "Seed",
                director: "Ernest Dickerson",
                air_date: "October 14, 2012",
                us_viewers: "10.87 millions",
                video: 'https://www.youtube.com/embed/28_g0P1u_qQ',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/3d/AMC_TWD_Seed.png/revision/latest/scale-to-width-down/350?cb=20150802111625",
                plot: "Eight months after abandoning Hershel's farmstead, and Lori at the end of her pregnancy, Rick leads the group into securing a prison presently overrun with walkers. While clearing out the cells, Hershel is bitten on the foot by a walker, and they are forced to amputate it to save his life, discovering that five surviving prisoners are present. Meanwhile, Michonne watches over an ailing Andrea."
            },
            {
                ep: 21,
                season: 3,
                season_ep: 2,
                title: "Sick",
                director: "Billy Gierhart",
                air_date: "October 21, 2012",
                us_viewers: "9.55 millions",
                video: 'https://www.youtube.com/embed/PO2hEUQB_dc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/37/AMC_TWD_Sick.png/revision/latest/scale-to-width-down/350?cb=20150802111653",
                plot: "Rick's group discuss what to do with the five prison survivors, and initially lock them in a separate but walker-free part of the prison. When the prisoners agree to help them clear walkers, Rick allows them to come, but finds their leader Tomas unstable and is forced to kill him, while abandoning another, Andrew, in a yard full of walkers. The others tend carefully to Hershel's health to make sure he does not turn."
            },
            {
                ep: 22,
                season: 3,
                season_ep: 3,
                title: "Walk with Me",
                director: "Guy Ferland",
                air_date: "October 28, 2012",
                us_viewers: "10.51 millions",
                video: 'https://www.youtube.com/embed/MeO73fiBrl0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/3e/AMC_TWD_Walk_With_Me.png/revision/latest/scale-to-width-down/350?cb=20150802111723",
                plot: "Andrea and Michonne witness a group of men investigate a helicopter crash, but are captured by Merle and taken to the fortified town of Woodbury, where they meet The Governor, of whom Michonne is distrustful. One of the survivors of the crash tells The Governor of where their group is based out of, and The Governor leads his men to kill the other group and secure their weapons and vehicles for themselves."
            },
            {
                ep: 23,
                season: 3,
                season_ep: 4,
                title: "Killer Within",
                director: "Guy Ferland",
                air_date: "November 4, 2012",
                us_viewers: "9.27 millions",
                video: 'https://www.youtube.com/embed/yfLLANP1Ov0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/56/AMC_TWD_Killer_Within.png/revision/latest/scale-to-width-down/350?cb=20150802111751",
                plot: "As Hershel recovers, the prison's alarms go off, and walkers, lured by the sound, overwhelm Rick's group, and they are forced to scatter within the prison, while T-Dog sacrifices himself to protect Carol. Rick, aided by surviving prisoners Oscar and Axel in shutting down the alarms, discovers the walkers were lured through a breach in the prison fence by Andrew, and kills him. Lori, Carl, and Maggie secure themselves in a boiler room as Lori goes into labor. Maggie is forced to perform a Caesarean section to deliver her daughter but which is fatal to Lori, and Carl shoots her to prevent reanimation. As the survivors regroup, Rick is devastated to discover Lori's death."
            },
            {
                ep: 24,
                season: 3,
                season_ep: 5,
                title: "Say the Word",
                director: "Greg Nicotero",
                air_date: "November 11, 2012",
                us_viewers: "10.37 millions",
                video: 'https://www.youtube.com/embed/u7mLchRjIuU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/b/be/AMC_TWD_Say_the_Word.png/revision/latest/scale-to-width-down/350?cb=20150802111822",
                plot: "Michonne discovers The Governor's secret captivity of walkers, and decides to leave Woodbury, despite Andrea staying behind and learning more about The Governor from his second-hand man, Milton. The Governor, on learning of her departure, has Merle and a group of men try to find her. Meanwhile, Rick is still emotionally upset about his loss when he gets a phone call."
            },
            {
                ep: 25,
                season: 3,
                season_ep: 6,
                title: "Hounded",
                director: "Dan Attias",
                air_date: "November 18, 2012",
                us_viewers: "9.21 millions",
                video: 'https://www.youtube.com/embed/AItjQS5ud3A',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/13/AMC_TWD_Hounded.png/revision/latest/scale-to-width-down/350?cb=20150802111846",
                plot: "Rick, still in mourning, seems to receive phone calls in the boiler room where Lori died, from previous survivors that had died. While evading capture, Michonne witnesses Glenn and Maggie scavenging for baby supplies for Lori's child before they are captured by Merle, who recognizes Glenn as one of the members of his former group that abandoned him in Atlanta. Michonne, having deduced where Glenn and Maggie originated from, takes the supplies to the prison and encounters Rick there."
            },
            {
                ep: 26,
                season: 3,
                season_ep: 7,
                title: "When the Dead Come Knocking",
                director: "Dan Sackeim",
                air_date: "November 25, 2012",
                us_viewers: "10.43 millions",
                video: 'https://www.youtube.com/embed/X9x5L2-Zzrg',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c5/AMC_TWD_When_the_Dead_Come_Knocking.png/revision/latest/scale-to-width-down/350?cb=20131203214812",
                plot: "Though distrustful of her, Rick has Michonne's wounds tended to while she explains Glenn and Maggie's capture and Woodbury. At Woodbury, The Governor harshly interrogates Glenn and Maggie to learn where they are from, and when he threatens to kill Glenn, Maggie reveals the group is at the prison. The Governor sends Merle to scout the prison, while Rick, Daryl, Oscar, and Michonne approach Woodbury."
            },
            {
                ep: 27,
                season: 3,
                season_ep: 8,
                title: "Made to Suffer",
                director: "Billy Gierhart",
                air_date: "December 2, 2012",
                us_viewers: "10.48 millions",
                video: 'https://www.youtube.com/embed/Vtc0RwOlFNs',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/92/AMC_TWD_Made_to_Suffer.png/revision/latest/scale-to-width-down/350?cb=20150802111945",
                plot: "Rick's party invade Woodbury and rescue Glenn and Maggie, where Daryl learns Merle is still alive. Michonne, attempting to kill The Governor, finds he keeps his reanimated daughter Penny still chained up and kills her; The Governor discovers Michonne and they fight, which ends when she stabs him in the eye. Oscar is killed in covering their escape while Daryl is captured and forced into fighting Merle. Meanwhile, a new group of survivors led by Tyreese and Sasha enter the prison through the fence breach."
            },
            {
                ep: 28,
                season: 3,
                season_ep: 9,
                title: "The Suicide King",
                director: "Lesli Linka Glatter",
                air_date: "February 10, 2013",
                us_viewers: "12.26 millions",
                video: 'https://www.youtube.com/embed/1NluQAGbnR4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/94/AMC_TWD_The_Suicide_King.png/revision/latest/scale-to-width-down/350?cb=20150802112018",
                plot: "While Daryl and Merle fight, Rick and Maggie return to Woodbury to free Daryl. They are forced to bring Merle along, which Rick and Glenn fear will harm them, and Daryl and Merle go on their own. The residents of Woodbury begin to question their safety, and Andrea tries to calm The Governor down from taking drastic action. At the prison, the survivors discover Tyreese and Sasha's group, and though wary, allow them to stay. When Rick returns, he is still seeing visions of Lori and becomes angry and violent, and Glenn suggests it is best for the new group to leave."
            },
            {
                ep: 29,
                season: 3,
                season_ep: 10,
                title: "Home",
                director: "Seith Mann",
                air_date: "February 17, 2013",
                us_viewers: "11.05 millions",
                video: 'https://www.youtube.com/embed/wdZCvbq0sPk',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/9b/AMC_TWD_Home.png/revision/latest/scale-to-width-down/350?cb=20150802112054",
                plot: "Though distrustful of her, The Governor offers to give leadership of Woodbury to Andrea. The Governor secretly leads a group of his men to attack the prison, killing Axel, and breaching the outer fence to allow walkers in. The survivors hold back the attack, forcing The Governor to retreat, while Daryl and Merle, having decided it is best to stay part of the group, arrive to save the other survivors."
            },
            {
                ep: 30,
                season: 3,
                season_ep: 11,
                title: "I Ain't a Judas",
                director: "Greg Nicotero",
                air_date: "February 24, 2013",
                us_viewers: "11.01 millions",
                video: 'https://www.youtube.com/embed/h4ffJlnLaqI',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/ed/AMC_TWD_I_Ain%E2%80%99t_a_Judas.png/revision/latest/scale-to-width-down/350?cb=20131203215057",
                plot: "Andrea learns of the attack on the prison, and demands to go there to try to calm the situation. The Governor allows her to go but with Milton along. En route, they find Tyreese and Sasha's group, and Milton takes them back to Woodbury, where they offer to give The Governor the layout of the prison in exchange for being allowed to stay. At the prison, Andrea explains the situation and that The Governor really wants Michonne, and the group suggests she try to kill The Governor herself before all-out war breaks out. Back in Woodbury, Andrea finds she cannot come to kill The Governor."
            },
            {
                ep: 31,
                season: 3,
                season_ep: 12,
                title: "Clear",
                director: "Tricia Brock",
                air_date: "March 3, 2013",
                us_viewers: "11.30 millions",
                video: 'https://www.youtube.com/embed/n8GOPPEfUtQ',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c9/AMC_TWD_Clear.png/revision/latest/scale-to-width-down/350?cb=20150802112141",
                plot: "Rick, Carl, and Michonne travel back to Rick's home in King County to gather more weapons for the pending battle, and discover Morgan Jones is still alive, though has lost his son Duane. Rick tries to convince Morgan to return with them, while Michonne protects Carl while he recovers supplies and a personal photograph from a bar. As they return, Rick and Carl realize Michonne is an asset to their group."
            },
            {
                ep: 32,
                season: 3,
                season_ep: 13,
                title: "Arrow on the Doorpost",
                director: "David Boyd",
                air_date: "March 10, 2013",
                us_viewers: "11.46 millions",
                video: 'https://www.youtube.com/embed/DXbQpltG42w',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/47/AMC_TWD_Arrow_on_the_Doorpost.png/revision/latest/scale-to-width-down/350?cb=20150802112208",
                plot: "Andrea arranges a face-to-face meeting between The Governor and Rick, where The Governor demands they turn over Michonne to him. Believing that The Governor wants to kill them regardless, Rick and The Governor prepare their respective groups for combat."
            },
            {
                ep: 33,
                season: 3,
                season_ep: 14,
                title: "Prey",
                director: "Stefan Schwartz",
                air_date: "March 17, 2013",
                us_viewers: "10.84 millions",
                video: 'https://www.youtube.com/embed/2XttKLBJVm4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/34/AMC_TWD_Prey.png/revision/latest/scale-to-width-down/350?cb=20131203215250",
                plot: "Andrea learns of The Governor's duplicity and intent to kill Rick's group from Milton, and manages to escape Woodbury to warn Rick, but The Governor is able to capture her just before she reaches the prison. While they are gone, someone burns all of the captured walkers that The Governor has kept, and he suspects either Milton or Tyreese."
            },
            {
                ep: 34,
                season: 3,
                season_ep: 15,
                title: "This Sorrowful Life",
                director: "Greg Nicotero",
                air_date: "March 24, 2013",
                us_viewers: "10.99 millions",
                video: 'https://www.youtube.com/embed/Ivwp9Qf0i8c',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/7c/AMC_TWD_This_Sorrowful_Life.png/revision/latest/scale-to-width-down/350?cb=20150802112256",
                plot: "Rick decides on his own to deliver Michonne to The Governor, discreetly asking Merle for help, but Merle insists he do it alone. As Merle takes Michonne to the spot, Merle becomes sympathetic towards her, and lets her go. Merle uses the opportunity to lead a group of walkers to the meeting point, and then to attack The Governor, but is eventually killed. Michonne returns to the prison and on her way back she meets Daryl telling him that Merle let her go. Daryl goes to the meeting point and finds Merle, now reanimated, before he kills him. Michonne finally arrives back at prison."
            },
            {
                ep: 35,
                season: 3,
                season_ep: 16,
                title: "Welcome to the Tombs",
                director: "Ernest Dickerson",
                air_date: "March 31, 2013",
                us_viewers: "12.42 millions",
                video: 'https://www.youtube.com/embed/PGa5GSQC7ZY',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/12/AMC_TWD_Welcome_to_the_Tombs.png/revision/latest/scale-to-width-down/350?cb=20150802112325",
                plot: "The Governor, no longer trusting of anyone, fatally wounds Milton and locks him in the room he has kept Andrea, expecting him to turn and kill her; Milton manages to keep his wits long enough to explain to her how to escape. The Governor leads an attack on the prison, but Rick's group is prepared and ambushes them, forcing The Governor and stragglers to flee; he later kills his own people when they do not want to return and continue the fight. Rick and the others return to Woodbury, and are too late to save Andrea, having been bitten by Milton. She kills herself, and the surviving residents of Woodbury are brought to the prison."
            },
        ]
    },
    {
        num: "4 (2013–14)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/6/69/Walking_Dead_S4_Poster.jpg/220px-Walking_Dead_S4_Poster.jpg",
        description: "Several months after the Governor's attack, a deadly flu kills many of the population at the prison. The Governor finds his former right-hand men and kills them, taking over their group and destroys the prison. Rick's group are forced to separate and flee, but not before Hershel and the Governor are killed. The survivors divide, face their own trials and meet new faces before finding signs pointing to a safe haven called Terminus. One by one, they reunite at Terminus, but all the group are captured for some unknown purpose.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist, the father of Carl and Judith, and a former sheriff's deputy, who recently relinquished his leadership over the survivor group out of disgust towards his own previous actions as leader."
            },
            {
                character: "Michonne",
                actor: "Danai Gurira",
                description: "Michonne, a quiet and meticulous, yet fierce woman, who has recently joined Rick's group. She has begun to bond with the group, and shares a close bond with Rick's son Carl but is still fierce and secretive of her past."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, a former pizza delivery man married to Maggie Greene, who has matured over the series."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: " Carl Grimes, Rick's adolescent son. Brave to a fault, Carl begins to develop a callous mentality in response to the lethal landscape of a savage, new world. However he is also emotionally conflicted with himself because of the brutality of his previous choices in the new world."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, an antihero-like Southern redneck, who is also the group's primary hunter and has a strong bond with Carol, and later forms a bond with Beth."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, a former victim of domestic abuse, who has empowered herself but has come to make several dark and questionable decisions for the good of her group. She is the only known female Atlanta camp survivor left."
            },
            {
                character: "Maggie Greene",
                actor: "Lauren Cohan",
                description: "Maggie Greene, Hershel's elder daughter, Beth's half-sister, and Glenn's wife, who is a determined, fierce and capable fighter."
            },
            {
                character: "The Governor",
                actor: "David Morrissey",
                description: "The Governor, the former leader of the now-abandoned Woodbury and a primary threat to the prison community, and the primary antagonist of the first half of the season, who is now calling himself 'Brian Heriot'. Having become alarmed of his cold ways he is attempting to redeem himself by caring for a family he encounters."
            },
            {
                character: "Hershel Greene",
                actor: "Scott Wilson",
                description: "Hershel Greene, a religious former veterinarian and farmer, who is protective of his daughters. He maintains his faith despite many tragic events and acts as the group's primary moral compass as well as a surrogate father figure to Rick and Glenn."
            },
            {
                character: "Tyreese Williams",
                actor: "Chad L. Coleman",
                description: "Tyreese Williams, Sasha's peace-keeping older brother and one of the few survivors of Woodbury and Karen's boyfriend."
            },
            {
                character: "Beth Greene",
                actor: "Emily Kinney",
                description: "Beth Greene, a soft-spoken teenage girl, Hershel's younger daughter, and Maggie's younger half-sister. Beth has become emotionally numb but is secretly still emotionally fragile, and later forms a bond with Daryl."
            },
            {
                character: "Sasha Williams",
                actor: "Sonequa Martin-Green",
                description: " Sasha Williams, Tyreese's younger sister, who is seemingly fiery, ruthless and cold but deep down is a compassionate young woman. She has also developed an attraction to Bob."
            },
        ],
        supporting_cast: [
            {
                character: "Caesar Martinez",
                actor: "Jose Pablo Cantillo",
                description: "one of The Governor's most trusted allies, who leads a new group of survivors."
            },
            {
                character: "Lizzie Samuels",
                actor: "Brighton Sharbino",
                description: "Lizzie Samuels, a young girl, who has joined the prison community and suffers from psychological problems."
            },
            {
                character: "Mika Samuels",
                actor: "Kyla Kenedy",
                description: "Mika Samuels, Lizzie's younger sister, who has also joined the prison community."
            },
            {
                character: "Karen",
                actor: "Melissa Ponzio",
                description: "Karen, Tyreese's new love interest and the lone survivor of the Woodbury army massacre."
            },
            {
                character: "Tara Chambler",
                actor: "Alanna Masterson",
                description: "Tara Chambler, a police academy attendee, who was surviving with her family before encountering The Governor."
            },
            {
                character: "Lilly Chambler",
                actor: "Audrey Marie Anderson",
                description: "Lilly Chambler, a former nurse, Meghan's mother, and Tara's sister, who develops a relationship with The Governor."
            },
            {
                character: "Sergeant Abraham Ford",
                actor: "Michael Cudlitz",
                description: "Sgt. Abraham Ford, a former soldier trying to get Eugene to Washington, D.C. so he can stop the outbreak."
            },
            {
                character: "Rosita Espinosa",
                actor: "Christian Serratosz",
                description: "Rosita Espinosa, a young Hispanic woman, who is Abraham's girlfriend."
            },
            {
                character: "Eugine Porter",
                actor: "Josh McDermitt",
                description: "Dr. Eugene Porter, a scientist, who claims to know what caused the outbreak and is being escorted by Abraham and Rosita to government officials in Washington, D.C."
            },
            {
                character: "Joe",
                actor: "Jeff Kober",
                description: "Joe, leader of a small group of heavily armed marauders called the 'Claimers', who live by the philosophy of 'claiming'."
            },
            {
                character: "Mary",
                actor: "Denise Crosby",
                description: "Mary, a resident of Terminus, who greets survivors that arrive there."
            },
            {
                character: "Gareth",
                actor: "Andrew J. West",
                description: "Gareth, the mysterious leader of Terminus."
            }
        ],
        episodes: [
            {
                ep: 36,
                season: 4,
                season_ep: 1,
                title: "30 Days Without an Accident",
                director: "Greg Nicotero",
                air_date: "October 13, 2013",
                us_viewers: "16.11 millions",
                video: 'https://www.youtube.com/embed/XrtbugKvAL8',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/f3/AMC_TWD_30_Days_Without_an_Accident.png/revision/latest/scale-to-width-down/350?cb=20150802112400",
                plot: "Rick's group has brought the survivors from Woodbury into the prison, and Rick has renounced leadership of the group. The prison has proven a safe haven for many months, while Michonne continues to search for The Governor, fearing his retribution. Patrick, one of new survivors comes down with a fatal illness, dies, and reanimates as a walker."
            },
            {
                ep: 37,
                season: 4,
                season_ep: 2,
                title: "Infected",
                director: "Guy Ferland",
                air_date: "October 20, 2013",
                us_viewers: "13.95 millions",
                video: 'https://www.youtube.com/embed/TlFh7GYlJuo',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/50/AMC_TWD_Infected.png/revision/latest/scale-to-width-down/350?cb=20150802112429",
                plot: "The reanimated Patrick manages to attack other survivors in a cell block, and the group is forced to kill off those bitten and relocate the others to a different block. They discover a deadly flu strain, brought by pigs that Rick tried to raise, affecting some of the survivors and which killed Patrick, and isolate those infected, fearing they will reanimate when they die. Tyreese discovers his girlfriend Karen and her friend David, both considered infected, were killed and burnt by someone unknown."
            },
            {
                ep: 38,
                season: 4,
                season_ep: 3,
                title: "Isolation",
                director: "Dan Sackeim",
                air_date: "October 27, 2013",
                us_viewers: "12.92 millions",
                video: 'https://www.youtube.com/embed/zSFnjA42vL4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/06/AMC_TWD_Isolation.png/revision/latest/scale-to-width-down/350?cb=20150802112456",
                plot: "The illness continues to spread, and Hershel takes responsibility to stay with the infected to tend to them. Daryl leads a group to a nearby veterinary college to recover medicine to cure the illness, though en route, overhear a radio broadcast directing people to 'sanctuary'. Rick discovers Carol killed Karen and David, acting on her own but for the good of the survivors."
            },
            {
                ep: 39,
                season: 4,
                season_ep: 4,
                title: "Indifference",
                director: "Tricia Brock",
                air_date: "November 3, 2013",
                us_viewers: "13.31 millions",
                video: 'https://www.youtube.com/embed/9OADwK_QrCA',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/3e/AMC_TWD_Indifference.png/revision/latest/scale-to-width-down/350?cb=20150802112521",
                plot: "Daryl's group completes their run to the hospital, while Rick and Carol go scavenging for supplies at a local residential area. After trying to help a couple return to the prison, only to have the wife die and the husband disappear. Rick tells Carol that she cannot come back to the prison, and the two depart on separate ways."
            },
            {
                ep: 40,
                season: 4,
                season_ep: 5,
                title: "Internment",
                director: "David Boyd",
                air_date: "November 10, 2013",
                us_viewers: "12.20 millions",
                video: 'https://www.youtube.com/embed/odAyIQiY4CM',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c0/AMC_TWD_Internment.png/revision/latest/scale-to-width-down/350?cb=20150802112546",
                plot: "The infected survivors begin to succumb to the illness and reanimate as walkers, forcing the survivors to start to kill their friends, but Daryl's group returns in time for Hershel and Bob to help administer the medicine and cure the remaining infected. Carol's absence from the group is noticed, but Rick only confides in his choice to a select few. As the survivors recover and try to return to a regular routine, they are unaware they are being watched from afar by The Governor."
            },
            {
                ep: 41,
                season: 4,
                season_ep: 6,
                title: "Live Bait",
                director: "Michael Uppendahl",
                air_date: "November 17, 2013",
                us_viewers: "12.00 millions",
                video: 'https://www.youtube.com/embed/-7Lfi07uC3g',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/55/AMC_TWD_Live_Bait.png/revision/latest/scale-to-width-down/350?cb=20150802112617",
                plot: "In a flashback episode, The Governor is abandoned by Martinez and Shumpert following his attack on the prison. He sets Woodbury ablaze, and later encounters the Chamblers, Lilly, Tara, Lilly's daughter Meghan, and their dying father. He hides his identity while helping them to deal with their father, and the three opt to leave with him when he moves on. They come across another group of survivors - this being led by Martinez."
            },
            {
                ep: 42,
                season: 4,
                season_ep: 7,
                title: "Dead Weight",
                director: "Jeremy Podeswa",
                air_date: "November 24, 2013",
                us_viewers: "11.29 millions",
                video: 'https://www.youtube.com/embed/GpWGJwtwQ-c',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/46/AMC_TWD_Dead_Weight.png/revision/latest/scale-to-width-down/350?cb=20150802112642",
                plot: "While still in flashback, Martinez recognizes The Governor has taken a new identity and privately explains how he found this new group and their arsenal of weapons. The Governor senses the group is weak, and with the power of their arsenal, believes he can secure the prison for a safe haven for the Chamblers. He kills Martinez and his right-hand man, taking charge of the group, and organizes the group to head to the prison. The Governor, observing the prison, sees Michonne and Hershel outside its fence, burning the corpses of the infected."
            },
            {
                ep: 43,
                season: 4,
                season_ep: 8,
                title: "Too Far Gone",
                director: "Ernest Dickerson",
                air_date: "December 1, 2013",
                us_viewers: "12.05 millions",
                video: 'https://www.youtube.com/embed/liFJ7pr75RE',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/36/AMC_TWD_Too_Far_Gone.png/revision/latest/scale-to-width-down/350?cb=20150802112713",
                plot: "The Governor captures Michonne and Hershel and challenges Rick and the others to abandon the prison. Though Rick offers co-existence, The Governor refuses and decapitates Hershel, and gunfire breaks out. In the midst of battle, Lilly rushes up to The Governor with the body of Meghan, who was bitten by a walker while playing. The Governor shoots Meghan to prevent her from reanimating and then orders a full-out assault of the prison, tearing through its fences and allowing a horde of walkers in. The survivors in the prison are forced to scatter when they no longer can hold down their defenses. At the same time, Rick and The Governor engage in a one-on-one brawl in which the latter gains the upper hand, only to be mortally stabbed by Michonne just before he can kill Rick. Rick escapes with Carl, while the near-death Governor is approached and executed by Lilly."
            },
            {
                ep: 44,
                season: 4,
                season_ep: 9,
                title: "After",
                director: "Greg Nicotero",
                air_date: "February 9, 2014",
                us_viewers: "15.76 millions",
                video: 'https://www.youtube.com/embed/OcOukXnd7Zg',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/f7/AMC_TWD_After.png/revision/latest/scale-to-width-down/350?cb=20150802112745",
                plot: "Carl helps his injured father Rick as they flee the prison and fearful they have lost Lori's child. They take shelter in a suburban home, and Rick collapses from exhaustion. Carl scavenges nearby homes for supplies. Michonne, finding the prison overrun and no sign of the survivors, sets off on her own, but comes to an epiphany about her purpose, and follows Carl and Rick's trail, rejoining them at the home they have taken shelter at."
            },
            {
                ep: 45,
                season: 4,
                season_ep: 10,
                title: "Inmates",
                director: "Tricia Brock",
                air_date: "February 16, 2014",
                us_viewers: "13.34 millions",
                video: 'https://www.youtube.com/embed/OzkTovO8qEY',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/8a/TWD-Episode-410-Main-590.jpg/revision/latest/scale-to-width-down/350?cb=20150802112822",
                plot: "Daryl helps to protect Beth as they flee and search for survivors. Tyreese, having saved Lori's child Judith, escorts young sisters Lizzie and Mika, and is soon joined by Carol. Maggie, Sasha and Bob find the bus from the prison, the survivors inside dead and reanimated as walkers, though Maggie is relieved that Glenn is not among them. Glenn, having been knocked unconscious at the prison, finds a frightened Tara and helps to lead her to safety, coming across Abraham, Eugene and Rosita in their travels."
            },
            {
                ep: 46,
                season: 4,
                season_ep: 11,
                title: "Claimed",
                director: "Seith Mann",
                air_date: "February 23, 2014",
                us_viewers: "13.12 millions",
                video: 'https://www.youtube.com/embed/wMkQsWB9WZc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/27/TWD-Episode-411-Main-590.jpg/revision/latest/scale-to-width-down/350?cb=20150802112856",
                plot: "As Rick, Carl and Michonne rest up, their home is discovered by a group of men called Claimers, and they are forced to abandon it, later finding signs towards 'Terminus' along railroad tracks. Glenn and Tara learn that Abraham and Rosita are escorting Eugene to Washington, D.C. as he knows how to stop the walker outbreak once there."
            },
            {
                ep: 47,
                season: 4,
                season_ep: 12,
                title: "Still",
                director: "Julius Ramsay",
                air_date: "March 2, 2014",
                us_viewers: "12.61 millions",
                video: 'https://www.youtube.com/embed/AENwV9sxx-8',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/7a/TWD-Episode-412-Main-590.jpg/revision/latest/scale-to-width-down/350?cb=20150802112921",
                plot: "Beth continues to travel with Daryl, and becomes distraught she might die before having a drink of alcohol, something Hershel prevented her from having. After scavenging through a country club and only finding peach schnapps, Daryl takes her to a cabin he had found earlier that was used to make moonshine, and tells her that is a proper drink. As they get inebriated, Daryl sadly discusses his past and what Merle meant to him. They decide to burn down the cabin as a way of putting their past behind them."
            },
            {
                ep: 48,
                season: 4,
                season_ep: 13,
                title: "Alone",
                director: "Ernest Dickerson",
                air_date: "March 9, 2014",
                us_viewers: "12.65 millions",
                video: 'https://www.youtube.com/embed/cW2gZCbgpBE',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/ef/TWD-Episode-413-Main-590.jpg/revision/latest/scale-to-width-down/350?cb=20150802113010",
                plot: "While following signs to Terminus, Maggie, Sasha, and Bob disagree on what they should do. Maggie, still anxious about Glenn's fate, leaves on her own. Bob leaves to follow her trail, while Sasha decides to remain in a small town and ultimately save Maggie from a horde of walkers and agrees to continue with her. Daryl and Beth come across a church where they take refuge, but when the church is invaded by walkers, Daryl covers for Beth's escape, during which she is captured by someone in a car with a white cross on its back windshield. Daryl is suddenly captured by another group of men."
            },
            {
                ep: 49,
                season: 4,
                season_ep: 14,
                title: "The Groove",
                director: "Michael E. Satrazemis",
                air_date: "March 16, 2014",
                us_viewers: "12.87 millions",
                video: 'https://www.youtube.com/embed/Gatww490Shk',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/9a/TWD-Episode-414-Main-590.jpg/revision/latest/scale-to-width-down/350?cb=20150802113036",
                plot: "Tyreese, Carol, Lizzie, Mika and Judith follow signs to Terminus and come across a cabin which they plan to take a few days of rest in. During this time, Tyreese and Carol find Lizzie has an unhealthy fascination with walkers. Later, after coming back with supplies, they find Lizzie has killed Mika and is about to kill Judith, hoping they will come back as walkers. Carol and Tyreese agree Lizzie is too dangerous to keep around, and Carol is forced to kill her. Carol opens up about having killed Tyreese's friend Karen, which he forgives her for. They leave the cabin and continue to Terminus."
            },
            {
                ep: 50,
                season: 4,
                season_ep: 15,
                title: "Us",
                director: "Greg Nicotero",
                air_date: "March 23, 2014",
                us_viewers: "13.47 millions",
                video: 'https://www.youtube.com/embed/3Q7qOdU0B6Q',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/de/TWD-Episode-415-Main-590.jpg/revision/latest/scale-to-width-down/350?cb=20150802113058",
                plot: "Glenn, Tara, Abraham, Eugene and Rosita continue towards Terminus, and they find a sign by a tunnel written by Maggie to Glenn. Abraham fears the tunnel too dangerous but Glenn and Tara proceed. They are surrounded by walkers but saved by Maggie, Sasha, and Bob; the combined group continue to Terminus as a waypoint towards Washington, D.C. They find Terminus and are welcomed with open arms. Meanwhile, Daryl is forced to travel with the men that captured him, the same Claimers that Rick encountered, and learning they are on Rick's trail for having killed one of their own."
            },
            {
                ep: 51,
                season: 4,
                season_ep: 16,
                title: "A",
                director: "Michelle MacLaren",
                air_date: "March 30, 2014",
                us_viewers: "15.68 millions",
                video: 'https://www.youtube.com/embed/OhPrzveBvxo',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/34/TWD-Episode-416-Main-590.jpg/revision/latest/scale-to-width-down/350?cb=20150802113119",
                plot: "The Claimers catch up to Rick, Carl, and Michonne, but when they threaten to rape Michonne and Carl, they are slaughtered by Rick and Daryl. The four continue towards Terminus, but Rick is wary and leaves their weapons hidden before they enter. Inside they are guided by Gareth, who welcomes them. Rick spots gear belonging to the other survivors and demands to know what is going on. Rick's group is forced into a boxcar at gunpoint where they join up with Glenn, Maggie, Sasha, Bob, Tara, Abraham, Eugene, and Rosita, all also captives of the Terminus residents. Rick asserts that they have picked the wrong people to mess with."
            },
        ]
    },
    {
        num: "5 (2014–15)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Walking_Dead_Season_5_Poster.jpg/220px-Walking_Dead_Season_5_Poster.jpg",
        description: "Rick discovers the residents of Terminus engage in cannibalism, but the group manage to destroy Terminus and reunite. Some are injured and kidnapped to Grady, a hospital run by corrupt cops and doctors. When the remaining survivors regroup, they are approached by Aaron, inviting them to join a fortified community called Alexandria. They are initially welcomed, but Rick's group realize the residents have not faced the zombie threat directly. Morgan, who has been searching for Rick, arrives and is shocked to see Rick killing an Alexandrian, who has been abusing his wife, in anger.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist, who has recently overcome a struggle to balance his brutality with humanity. Lincoln also voices the role of a radio broadcaster, using his natural accent in the episode 'What Happened and What's Going On.'"
            },
            {
                character: "Michonne",
                actor: "Danai Gurira",
                description: "Michonne, a fierce, katana-wielding survivor, who has overcome the trauma of the death of her son and boyfriend, forming a close relationship with the Grimes family."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, a former pizza delivery boy has undergone a maturation and is now Maggie's husband. He acts as one of the group's primary supply runners."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: "Carl Grimes, Rick's teenage son, whose recklessness clashes with his morality."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, the group's primary hunter, who has overcome his past issues with abuse."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, a resourceful and empowered former victim of domestic abuse, who is attempting to rebound from several tragedies."
            },
            {
                character: "Maggie Greene",
                actor: "Lauren Cohan",
                description: "Maggie Greene, Glenn's strong-willed and determined wife, who has recently lost her father."
            },
            {
                character: "Tyreese Williams",
                actor: "Chad L. Coleman",
                description: "Tyreese Williams, Sasha's older brother, who is tough, compassionate, optimistic and places an emphasis on moral reasoning. He struggles to cope with the immoral nature of some of the group's survival tactics and finds it difficult to kill in defense of the group."
            },
            {
                character: "Beth Greene",
                actor: "Emily Kinney",
                description: "Beth Greene, Maggie's kidnapped younger sister, who has formed a close bond with Daryl since the assault on the prison."
            },
            {
                character: "Sasha Williams",
                actor: "Sonequa Martin-Green",
                description: "Sasha Williams, Tyreese's fiery younger sister and a former firefighter, who has since developed a relationship with Bob."
            },
            {
                character: "Sergeant Abraham Ford",
                actor: "Michael Cudlitz",
                description: "Sgt. Abraham Ford, a former military sergeant and boyfriend of Rosita. He pursues a mission to take Eugene to Washington, D.C., to find a cure for the walker virus."
            },
            {
                character: "Bob Stookey",
                actor: "Lawrence Gilliard Jr",
                description: "Bob Stookey, a former army medic and recovering alcoholic, who has formed a close relationship with Sasha, and has developed a renewed sense of optimism.."
            },
            {
                character: "Eugine Porter",
                actor: "Josh McDermitt",
                description: "Dr. Eugene Porter, a scientist rescued by Abraham, who insists on traveling to Washington, D.C., to locate a cure to the walker virus."
            },
            {
                character: "Rosita Espinosa",
                actor: "Christian Serratos",
                description: "Christian Serratos as Rosita Espinosa, Abraham's girlfriend, who helps escort Eugene to Washington, D.C. and is protective of Tara and Eugene."
            },
            {
                character: "Tara Chambler",
                actor: "Alanna Masterson",
                description: "Tara Chambler, a former police academy student and ally of The Governor's, the only surviving member of her family, who often tries to boost the group's morale."
            },
            {
                character: "Gabriel Stokes",
                actor: "Seth Gilliam",
                description: "Gabriel Stokes, a cowardly priest, who lives alone in his church, whose encounter with Rick's group leads him to challenge his beliefs."
            },
            {
                character: "Gareth",
                actor: "Andrew J. West",
                description: "Gareth, the pragmatic leader of Terminus a group of canibals, who captures and coerces Rick's group into submission, and the primary antagonist of the first half of the season."
            }
        ],
        supporting_cast: [
            {
                character: "Mary",
                actor: "Denise Crosby",
                description: "Mary, one of Terminus residents; Gareth and Alex's mother."
            },
            {
                character: "Noah",
                actor: "Tyler James Williams",
                description: "Noah, a survivor Beth encounters, who originates from a walled community in Richmond, Virginia but was abducted and forced to stay in Grady. He is shown to be very resourceful but has minimal experience in the outside world. He initially feels distant from the group despite their having accepted him as part of the family, but he eventually becomes more settled in with them."
            },
            {
                character: "Dawn Lerner",
                actor: "Christine Woods",
                description: "Dawn Lerner, a sadistic police officer, who holds Beth captive and the leader of the officers stationed at Grady Memorial Hospital. She has a vision of 'trying to keep society intact,' believing that help will eventually come. However, despite her intentions, her manipulative, violent, and obsessive nature antagonizes most of her fellow officers, both good and bad, as well as her captives – most of whom want her dead."
            },
            {
                character: "Dr Steven Edwards",
                actor: "Erik Jensen",
                description: "Dr. Steven Edwards, a scheming doctor secretly working for Lt. Lerner, who takes a liking to Beth. Ironically, he preserves his importance, as the only doctor at Grady, by killing captives ('patients')."
            },
            {
                character: "Aaron",
                actor: "Ross Marquand",
                description: "Aaron, a former NGO worker and now recruiter for the Alexandria Safe-Zone, who takes in Rick's group and forms a friendship with Daryl based on their both feeling like outsiders in their respective ways; Aaron's is attributable to his homosexuality."
            },
            {
                character: "Deanna Monroe",
                actor: "Tovah Feldshuh",
                description: "Deanna Monroe, a fierce yet understanding former Congresswoman, who is now the leader of the Alexandria Safe-Zone. Though she is confident Rick's group can help them survive, she is somewhat leery about their increasingly prominent roles in the community."
            },
            {
                character: "Jessie Anderson",
                actor: "Alexandra Breckenridge",
                description: "Jessie Anderson, a former hairstylist, who lives in Alexandria with her sons, Ron and Sam, and husband, Pete. She helps Rick adjust to the community, and Rick quickly becomes attracted to Jessie, which seems mutual, and they share moments of flirtation. It's later revealed that Pete is abusing her, leading to a brutal conflict between him and Rick."
            },
            {
                character: "Pete Anderson",
                actor: "Corey Brill",
                description: "Pete Anderson, Alexandria's resident surgeon and Jessie's abusive husband; his actions culminate in a conflict between himself and Rick. Because Pete has saved lives, Deanna turns a blind eye to his abusive tendencies towards Jessie, just as Jessie remains unwilling to report or leave Pete; both women hope he'll get better."
            },
            {
                character: "Tobin",
                actor: "Jason Douglas",
                description: "Tobin, the foreman of Alexandria's construction crew, who is willing to let some members of his crew die to preserve the lives of the others."
            },
            {
                character: "Reg Monroe",
                actor: "Steve Coulter",
                description: "Reg Monroe, Deanna's husband and an architect; he built Alexandria's walls and, unlike Deanna, understands Rick's brutality and desires to keep everyone together believing it's the only way to rebuild civilization."
            },
            {
                character: "Nicholas",
                actor: "Michael Traynor",
                description: "Nicholas, a supply runner for Alexandria, whose cowardly nature has led to other people's getting killed; he forms a bitter grudge against Glenn."
            },
            {
                character: "Spenser Monroe",
                actor: "Austin Nichols",
                description: "Spencer Monroe, Deanna and Reg's younger son and Aiden's brother; he takes a liking to Sasha. Despite having an ego, he is more level headed than Aiden."
            },
            {
                character: "Enid",
                actor: "Katelyn Nacon",
                description: "Enid, an introverted teenager recruited to Alexandria eight months prior to the arrival of Rick's group; Carl has a crush on her, but she is dating Ron."
            },
            {
                character: "Olivia",
                actor: "Ann Mahoney",
                description: "Olivia, an Alexandria resident, who is in charge of the community's food and armory."
            },
            {
                character: "Morgan Jones",
                actor: "Lennie James",
                description: "Morgan Jones, the first survivor Rick encountered, who had previously suffered mental problems following the loss of his son."
            },






        ],
        episodes: [
            {
                ep: 52,
                season: 5,
                season_ep: 1,
                title: "No Sanctuary",
                director: "Greg Nicotero",
                air_date: "October 12, 2014",
                us_viewers: "17.29 millions",
                video: 'https://www.youtube.com/embed/ugVHTJw7GWk',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/5c/AMC_TWD_No_Sanctuary.png/revision/latest/scale-to-width-down/350?cb=20150802113158",
                plot: "Carol and Tyreese capture a Terminus ally, Martin, learning their friends have been captured and will likely be cannibalized by Gareth and the other Terminus survivors. While Tyreese stays back with Judith and Martin, Carol uses a herd of walkers as a distraction to free Rick and the others. Once regrouped, the others convince Rick to forget attacking Terminus and instead head towards Washington, D.C."
            },
            {
                ep: 53,
                season: 5,
                season_ep: 2,
                title: "Strangers",
                director: "David Boyd",
                air_date: "October 19, 2014",
                us_viewers: "15.14 millions",
                video: 'https://www.youtube.com/embed/k0NHzCPad-A',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/9c/AMC_TWD_Strangers.png/revision/latest/scale-to-width-down/350?cb=20141015183236",
                plot: "Rick's group saves Father Gabriel Stokes from walkers, and he provides them shelter in his church; his motives are suspicious, leaving some anxious to continue on. Carol withdraws from the group, followed by Daryl, when they see a car with a white cross on its window, the same as the one Daryl saw abduct Beth, and the two follow it. Bob is captured by the remaining Terminus survivors led by Gareth, who proceed to amputate and consume his leg."
            },
            {
                ep: 54,
                season: 5,
                season_ep: 3,
                title: "Four Walls and a Roof",
                director: "Jeffrey F. January",
                air_date: "October 26, 2014",
                us_viewers: "13.80 millions",
                video: 'https://www.youtube.com/embed/ou9xJazcxes',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/41/AMC_TWD_Four_Walls_and_a_Roof.png/revision/latest/scale-to-width-down/350?cb=20150802113400",
                plot: "Father Gabriel is forced to reveal he had let his congregation be consumed by walkers while he barricaded himself inside, and is now experiencing a crisis of faith. Gareth leaves Bob outside the church, and Rick leads a group to finish off Gareth in retribution. Gareth uses this opportunity to attack the church, but is ambushed and killed by Rick's group. Rick insists they wait for Daryl and Carol's return before leaving, but Abraham and Rosita decide to continue on escorting Eugene to D.C., with Glenn, Maggie, and Tara coming along. Abraham leaves a map for Rick to follow him once he is ready to leave."
            },
            {
                ep: 55,
                season: 5,
                season_ep: 4,
                title: "Slabtown",
                director: "Michael E. Satrazemis",
                air_date: "November 2, 2014",
                us_viewers: "14.52 millions",
                video: 'https://www.youtube.com/embed/FMJONn54wyw',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/b/b2/AMC_TWD_Slabtown.png/revision/latest/scale-to-width-down/350?cb=20150802113427",
                plot: "Beth awakens in Grady Memorial Hospital in Atlanta, finding it run and protected by police officers led by Officer Dawn Lerner. Though they provide medical treatment, they force those in their care to help and forgo medical treatment on the weakest. When Beth goes against these policies, she is berated by Dawn. Beth befriends fellow patient, Noah, and the two attempt to escape together. Noah escapes, but Beth is caught, punished, and instructed to kill a corrupt doctor; just then, she sees an unconscious Carol being wheeled into the hospital."
            },
            {
                ep: 56,
                season: 5,
                season_ep: 5,
                title: "Self Help",
                director: "Ernest Dickerson",
                air_date: "November 9, 2014",
                us_viewers: "13.53 millions",
                video: 'https://www.youtube.com/embed/j64zcHCdpO0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/97/AMC_TWD_Self_Help.png/revision/latest/scale-to-width-down/350?cb=20150802113452",
                plot: "Abraham's group heads north, where Eugene's insecurities lead to some conflict within the group. They come across a wide expanse of fields that are filled with walkers, and Abraham and Glenn get into an argument on what to do. During this, Eugene reveals that he lied about being a scientist or knowing a cure, only using that to inspire Abraham to help protect him when they first met. Abraham punches Eugene out, and then drops to knees in shock and disbelief."
            },
            {
                ep: 57,
                season: 5,
                season_ep: 6,
                title: "Consumed",
                director: "Seith Mann",
                air_date: "November 16, 2014",
                us_viewers: "14.07 millions",
                video: 'https://www.youtube.com/embed/xN0tRXbqDf0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/7f/AMC_TWD_Consumed.png/revision/latest/scale-to-width-down/350?cb=20150802113518",
                plot: "Daryl and Carol follow the car to Atlanta, where they have their gear stolen by Noah. They discover the white cross vehicles are from Grady Memorial, and use a building across the street to study the hospital. There, they encounter Noah again, who apologizes and gives back their gear, as well as telling them about Beth. With the police from the hospital en route to their building, the three escape, but Carol is hit by a speeding police car and taken to the hospital."
            },
            {
                ep: 58,
                season: 5,
                season_ep: 7,
                title: "Crossed",
                director: "Billy Gierhart",
                air_date: "November 23, 2014",
                us_viewers: "13.33 millions",
                video: 'https://www.youtube.com/embed/HM86qpfzYhM',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/09/AMC_TWD_Crossed.png/revision/latest/scale-to-width-down/350?cb=20141117155258",
                plot: "Though Dawn believes Carol is a lost cause and orders treatment to be denied, Beth is able to provide her with life-saving medicine. Daryl and Noah return to the church to recruit Rick and others to rescue Beth. The group returns to Atlanta and devise a plan to capture some of the police officers to use as a trade for Carol and Beth."
            },
            {
                ep: 59,
                season: 5,
                season_ep: 8,
                title: "Coda",
                director: "Ernest Dickerson",
                air_date: "November 23, 2014",
                us_viewers: "14.81 millions",
                video: 'https://www.youtube.com/embed/rdVwDB10_Q4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c9/AMC_TWD_Coda.png/revision/latest/scale-to-width-down/350?cb=20141124194254",
                plot: "At the church, Gabriel inadvertently leads a group of walkers to it, but Abraham and his group arrive in time to protect the others. They all agree to head to Atlanta to help. Rick negotiates to trade the captured officers for Carol and Beth. In the trade confrontation, Beth stabs Dawn, who instinctively shoots and kills Beth; Daryl reacts by killing Dawn. The groups stand down and Rick's group leaves the hospital with Beth's corpse, eventually meeting with Abraham's group."
            },
            {
                ep: 60,
                season: 5,
                season_ep: 9,
                title: "What Happened and What's Going on",
                director: "Greg Nicotero",
                air_date: "February 8, 2015",
                us_viewers: "15.64 millions",
                video: 'https://www.youtube.com/embed/ow91B2jFP1E',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/da/AMC_TWD_What_Happened_and_What%27s_Going_On.png/revision/latest/scale-to-width-down/350?cb=20150802113553",
                plot: "Rick's group heads north, and a small group of Rick, Tyreese, Glenn, and Michonne take Noah to his hometown community which he claims was protected. They find the community has been overrun with walkers, and Noah panics; Tyreese is bitten by a walker while protecting him. Tyreese has visions of several now-dead survivors, while Michonne amputates the bitten arm. Despite this, Tyreese dies as they race back to join the others."
            },
            {
                ep: 61,
                season: 5,
                season_ep: 10,
                title: "Them",
                director: "Juliuj Ramsay",
                air_date: "February 15, 2015",
                us_viewers: "12.27 millions",
                video: 'https://www.youtube.com/embed/x9eyWpE0PQ0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/21/AMC_TWD_Them.png/revision/latest/scale-to-width-down/350?cb=20150802113623",
                plot: "The group's vehicle breaks down, forcing them to continue on foot towards D.C. After a run-in with a small horde of walkers and feral dogs, Daryl suggests the group take shelter in a small barn. They find a number of water bottles and jugs with a note saying they are from a 'friend,' but Rick is wary and orders them to avoid it. The next morning, the group is approached by Aaron, identifying himself as a 'friend.'"
            },
            {
                ep: 62,
                season: 5,
                season_ep: 11,
                title: "The Distance",
                director: "Larysa Kondracki",
                air_date: "February 22, 2015",
                us_viewers: "13.44 millions",
                video: 'https://www.youtube.com/embed/j3q1P-WGGTc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/e0/AMC_TWD_The_Distance.png/revision/latest/scale-to-width-down/350?cb=20150802113654",
                plot: "Aaron tells Rick's group about Alexandria, a walled-off and safe-zone community, and that he wants them to 'audition' to join their community. Despite Aaron telling them truthfully of vehicles waiting nearby to take them to Alexandria, Rick remains distrustful, fearing a repeat of Woodbury and Terminus. Michonne convinces Rick that they should at least check it out; Aaron leads the group to Alexandria's gates."
            },
            {
                ep: 63,
                season: 5,
                season_ep: 12,
                title: "Remember",
                director: "Greg Nicotero",
                air_date: "March 1, 2015",
                us_viewers: "14.43 millions",
                video: 'https://www.youtube.com/embed/7zebE10tlt0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/55/AMC_TWD_Remember.png/revision/latest/scale-to-width-down/350?cb=20150223155536",
                plot: "Rick's group turn over their weapons before meeting with Alexandria's leader, Deanna Monroe. She gives them individual private interviews, and assigns them quarters to wait out their decision. The group starts to integrate with the other Alexandria survivors, finding they are generally ill-prepared for dealing with walkers. Deanna gives Rick and Michonne constable duties as a show of trust, but Rick confides to Carol that they will take over if the community fails to protect itself."
            },
            {
                ep: 64,
                season: 5,
                season_ep: 13,
                title: "Forget",
                director: "David Boyd",
                air_date: "March 8, 2015",
                us_viewers: "14.53 millions",
                video: 'https://www.youtube.com/embed/jxrg0Y9EKyc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/6e/AMC_TWD_Forget.png/revision/latest/scale-to-width-down/350?cb=20150802113726",
                plot: "Though Rick's group is welcomed to the community, Rick, Daryl, and Carol meet privately to discuss how to recover and stash their weapons from the Alexandria armory as backup plans should they need to exert control."
            },
            {
                ep: 65,
                season: 5,
                season_ep: 14,
                title: "Spend",
                director: "Jennifer Lynch",
                air_date: "March 15, 2015",
                us_viewers: "13.78 millions",
                video: 'https://www.youtube.com/embed/nuV9y7TRFyI',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/b/b7/AMC_TWD_Spend.png/revision/latest/scale-to-width-down/350?cb=20150802113807",
                plot: "Abraham takes control of the Alexandria construction crew after rescuing them from walkers, while an attempt to obtain equipment to repair the community's solar panels leads to the deaths of both Deanna's son Aiden, and Noah. Deanna observes that members of Rick's group seem to be taking charge of the community; Gabriel warns Deanna that Rick's group is dangerous. Carol determines that Pete, the town's surgeon, is abusing his wife Jessie and son Sam, and suggests to Rick he must kill Pete."
            },
            {
                ep: 66,
                season: 5,
                season_ep: 15,
                title: "Try",
                director: "Michael E. Satrazemis",
                air_date: "March 22, 2015",
                us_viewers: "13.76 millions",
                video: 'https://www.youtube.com/embed/gYpWXPPW09A',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/67/AMC_TWD_Try.png/revision/latest/scale-to-width-down/350?cb=20150316151110",
                plot: "Deanna and Rick blame each other for the deaths of Aiden and Noah. Rick tries to approach Jessie privately to offer his protection against Pete, but Pete interrupts, leading to a physical fight between him and Rick, and a public confrontation between Rick and Deanna; Rick asserts Alexandria's residents have grown too complacent to survive. Michonne knocks Rick out before he can cause further damage."
            },
            {
                ep: 67,
                season: 5,
                season_ep: 16,
                title: "Conquer",
                director: "Greg Nicotero",
                air_date: "March 29, 2015",
                us_viewers: "15.78 millions",
                video: 'https://www.youtube.com/embed/hLo4BnTLhb0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/1c/AMC_TWD_Conquer.png/revision/latest/scale-to-width-down/350?cb=20150323145329",
                plot: "Deanna prepares to hold a meeting to discuss exiling Rick for his last outburst, and Rick prepares his group to move into action should they decide to do so. Daryl and Aaron discover that the Wolves, a group of scavengers camping near Alexandria, threaten the community, and come across Morgan Jones, who has been following Rick's trail. As the meeting starts, Rick discovers some walkers inside the community, allowed in inadvertently by Gabriel, and shows one of the bodies to the gathered Alexanderians, showing that they need his help to survive. Pete barges into the meeting to kill Rick, accidentally kills Deanna's husband instead. Distraught, Deanna orders Rick to execute Pete, which he does just as Daryl, Aaron, and Morgan arrive."
            },
        ]
    },
    {
        num: "6 (2015–16)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/c/c3/TWD_S6_KEY_ART.jpg/220px-TWD_S6_KEY_ART.jpg",
        description: "The residents of Alexandria put more trust in Rick's group to protect the town better. A group known as the Wolves use a zombie horde to attack Alexandria, and many lives are lost before the living regain control. While recovering, they learn of a community called the Hilltop, who offer to help trade supplies if they can end the threat of the extortionist Saviors led by a man named Negan. Although Rick's group decimate one Savior outpost, they are later caught by Negan, and forced to swear loyalty to him.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: " Rick Grimes, the series' protagonist, who struggles to balance his brutality and his humanity, and create a stable life for his two children."
            },
            {
                character: "Michonne",
                actor: "Danai Gurira",
                description: "Michonne, a fearless, katana-wielding warrior, who lost her family."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, Maggie's courageous and supportive husband, and one of the original members of the group, known for his resourcefulness and strategic mind."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: "Carl Grimes, Rick's teenage son, who struggles with growing up in a post-apocalyptic world."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, the group's primary hunter and a recruiter for Alexandria."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, a former victim of domestic abuse, who, following her daughter's death, becomes an empowered, ruthlessly pragmatic survivor."
            },
            {
                character: "Maggie Greene",
                actor: "Lauren Cohan",
                description: "Maggie Greene, Glenn's strong-willed and determined wife, who is now the last surviving member of her family after the deaths of her father, Hershel, and sister, Beth."
            },
            {
                character: "Sasha Williams",
                actor: "Sonequa Martin-Green",
                description: "Sasha Williams, a former firefighter, who suffered from PTSD after the loss of her brother, Tyreese, and boyfriend, Bob."
            },
            {
                character: "Sergeant Abraham Ford",
                actor: "Michael Cudlitz",
                description: "Sgt. Abraham Ford, a former military sergeant and boyfriend of Rosita, who has some interest in Sasha."
            },
            {
                character: "Eugine Porter",
                actor: "Josh McDermitt",
                description: "Eugene Porter, a survivor rescued by Abraham and posed as a scientist, who could cure the walker virus."
            },
            {
                character: "Rosita Espinosa",
                actor: "Christian Serratos",
                description: "Rosita Espinosa, a pragmatic optimist, who is protective of those around her and girlfriend of Abraham."
            },
            {
                character: "Tara Chambler",
                actor: "Alanna Masterson",
                description: "Tara Chambler, a former ally of The Governor and the only surviving member of her family."
            },
            {
                character: "Gabriel Stokes",
                actor: "Seth Gilliam",
                description: "Gabriel Stokes, a priest, who lived alone in his church at the beginning of the outbreak and now seeks to redeem himself for his actions in the previous season."
            },
            {
                character: "Morgan Jones",
                actor: "Lennie James",
                description: "Lennie James as Morgan Jones, the first survivor Rick encountered in season one, who has finally come to peace with the world around him."
            },
            {
                character: "Jessie Anderson",
                actor: "Alexandra Breckenridge",
                description: "Jessie Anderson, an Alexandria resident, who spent years living with an abusive husband, Pete."
            },
            {
                character: "Aaron",
                actor: "Ross Marquand",
                description: "Aaron, an Alexandrian recruiter, who brought Rick's group to Alexandria."
            },
            {
                character: "Spenser Monroe",
                actor: "Austin Nichols",
                description: "Spencer Monroe, Deanna's only living son and a guard of Alexandria."
            },
            {
                character: "Deanna Monroe",
                actor: "Tovah Feldshuh",
                description: "Deanna Monroe, a former Congresswoman and the leader of Alexandria, who recently lost her husband and her son, and turns to Rick to help guide the community."
            },
        ],
        supporting_cast: [
            {
                character: "Denise Cloyd",
                actor: "Merritt Wever ",
                description: " as Dr. Denise Cloyd, a doctor stationed in Alexandria and Tara's love interest."
            },
            {
                character: "Tobin",
                actor: "Jason Douglas",
                description: "Tobin, the foreman of Alexandria's construction crew."
            },
            {
                character: "Ron Anderson",
                actor: "Austin Abrams",
                description: "Ron Anderson, Jessie's oldest son, who resents Rick for the execution of his abusive father."
            },
            {
                character: "Sam Anderson",
                actor: "Major Dodson",
                description: "Sam Anderson, Jessie's younger son, who forms an attachment with Carol."
            },
            {
                character: "Nicholas",
                actor: "Michael Traynor",
                description: "Nicholas, originally a conniving, arrogant, and cowardly Alexandrian resident, who later tries to redeem himself for his past actions."
            },
            {
                character: "Enid",
                actor: "Katelyn Nacon",
                description: " Enid, a teenager, who recently moved to Alexandria after surviving outside in the apocalypse for several months after her parents died and has formed a bond with Carl."
            },
            {
                character: "Paul 'Jesus' Rovia",
                actor: "Tom Payne",
                description: "Paul 'Jesus' Rovia, a member and scout for the Hilltop."
            },
            {
                character: "Gregory",
                actor: "Xander Berkeley",
                description: "Gregory, the arrogant leader of the Hilltop."
            },
            {
                character: "Negan",
                actor: "Jeffrey Dean Morgan",
                description: "Negan, the mysterious leader of a group called the Saviors that he rules in tyranny and the unseen primary antagonist of the second half of the season."
            },
            {
                character: "Simon",
                actor: "Steven Ogg",
                description: " as Simon, a member of the Saviors and Negan's right-hand."
            },
            {
                character: "Dwight",
                actor: "Austin Amelio",
                description: "Dwight, a member of the Saviors, who kidnaps Daryl and forms a violent hostile rivalry with him. He is initially known as 'D' to Daryl."
            },
            {
                character: "Sherry",
                actor: "Christine Evangelista",
                description: "Sherry, a former babysitter and Dwight's wife."
            },
            {
                character: "Paula",
                actor: "Alicia Witt",
                description: " as Paula, a member of Negan's group, the Saviors. A formerly submissive woman, who lost her family and became an unrepentant killer, she is a counterpart to Carol."
            },
            {
                character: "Eastman",
                actor: "John Carroll Lynch",
                description: "Eastman, a survivor, who rehabilitates Morgan and teaches him aikido."
            },
        ],
        episodes: [
            {
                ep: 68,
                season: 6,
                season_ep: 1,
                title: "First Time Again",
                director: "Greg Nicotero",
                air_date: "October 11, 2015",
                us_viewers: "14.63 millions",
                video: 'https://www.youtube.com/embed/oNJJSF3ki5k',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/f5/AMC_TWD_First_Time_Again.png/revision/latest/scale-to-width-down/350?cb=20151017130807",
                plot: "Following the deadly town meeting, Rick and Morgan discover a large group of walkers in a nearby quarry. Rick pushes forward a plan to lure the walkers away from the community before they become a greater threat. Rick's brutal domination of the Alexandrians leads one to contemplate killing him while Morgan provokes him to question his conscience. Ultimately, the plan falls apart when a horn blares near Alexandria, attracting many walkers from the orderly 'parade.'"
            },
            {
                ep: 69,
                season: 6,
                season_ep: 2,
                title: "JSS",
                director: "Jennifer Lynch",
                air_date: "October 18, 2015",
                us_viewers: "12.18 millions",
                video: 'https://www.youtube.com/embed/EVTz6CVw11A',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/e9/AMC_TWD_JSS.png/revision/latest/scale-to-width-down/350?cb=20151019173005",
                plot: "Alexandria is invaded by the Wolves, who brutally slaughter people in the streets. Spencer opens fire on a truck approaching the wall, killing the driver and inadvertently activating the truck's horn. Morgan saves people while Carol fights her way to the armory and distributes guns to survivors. Carl tries to shelter Ron and Enid, but Ron refuses his protection and Enid flees Alexandria. As the Alexandrians begin fighting back, Morgan is attacked by a member of the Wolves he had previously met on the road and convinces him and his pack to retreat."
            },
            {
                ep: 70,
                season: 6,
                season_ep: 3,
                title: "Thank You",
                director: "Michael Slovis",
                air_date: "October 25, 2015",
                us_viewers: "13.14 millions",
                video: 'https://www.youtube.com/embed/zqs5rDtu9wc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/54/AMC_TWD_Thank_You.png/revision/latest/scale-to-width-down/350?cb=20151027184422",
                plot: "Glenn and Michonne race to lead a group ahead of a herd which has changed course for Alexandria. The herd catches up to them, and only Michonne, Heath and Scott make it back to the community. Failing to distract the herd, Glenn and Nicholas are surrounded by walkers, leading Nicholas to panic and kill himself. Rick circles around for an RV hoping to draw the herd back on the planned route, but he is attacked by the Wolves that Morgan dismissed from Alexandria. Rick kills them, but the shot-up RV won't start as the walker herd begins surrounding it."
            },
            {
                ep: 71,
                season: 6,
                season_ep: 4,
                title: "Here's Not Here",
                director: "Stephen Williams",
                air_date: "November 1, 2015",
                us_viewers: "13.34 millions",
                video: 'https://www.youtube.com/embed/6qrRGXFWAao',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/36/AMC_TWD_Here%27s_Not_Here.png/revision/latest/scale-to-width-down/350?cb=20151102093504",
                plot: "In flashbacks, Morgan is living in the woods after burning down his apartment in a fit of insanity. He stumbles upon a secluded cabin and shoots at its sole inhabitant, psychiatrist Eastman, who knocks Morgan out and locks him in a cell. The two gradually bond as Eastman teaches Morgan aikido and a philosophy that all life is precious. After Eastman is killed by a walker, Morgan leaves and discovers a sign that leads to Terminus. In the present, Morgan tells his story to a Wolf he had secretly taken prisoner, in hopes of inspiring him to change his ways."
            },
            {
                ep: 72,
                season: 6,
                season_ep: 5,
                title: "Now",
                director: "Avi Youabian",
                air_date: "November 8, 2015",
                us_viewers: "12.44 millions",
                video: 'https://www.youtube.com/embed/qYdWe858jLk',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/39/AMC_TWD_Now.png/revision/latest/scale-to-width-down/350?cb=20151109105621",
                plot: "In flashbacks, Morgan is living in the woods after burning down his apartment in a fit of insanity. He stumbles upon a secluded cabin and shoots at its sole inhabitant, psychiatrist Eastman, who knocks Morgan out and locks him in a cell. The two gradually bond as Eastman teaches Morgan aikido and a philosophy that all life is precious. After Eastman is killed by a walker, Morgan leaves and discovers a sign that leads to Terminus. In the present, Morgan tells his story to a Wolf he had secretly taken prisoner, in hopes of inspiring him to change his ways."
            },
            {
                ep: 73,
                season: 6,
                season_ep: 6,
                title: "Always Accountable",
                director: "Jeffrey F. January",
                air_date: "November 15, 2015",
                us_viewers: "12.87 millions",
                video: 'https://www.youtube.com/embed/f3Kl-SckQnw',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/64/AMC_TWD_Always_Accountable.png/revision/latest/scale-to-width-down/350?cb=20151116091605",
                plot: "While helping lead the walker herd away from Alexandria, Daryl is separated from Sasha and Abraham when they're ambushed by a group of strangers. Daryl is captured by a trio of survivors, who suspect he is one of the assailants. Daryl tries to recruit his captors, but they steal his crossbow and motorcycle before fleeing. Abraham and Sasha reunite with Daryl; they begin to head back to Alexandria in a fuel truck."
            },
            {
                ep: 74,
                season: 6,
                season_ep: 7,
                title: "Heads Up",
                director: "David Boyd",
                air_date: "November 22, 2015",
                us_viewers: "13.22 millions",
                video: 'https://www.youtube.com/embed/1xARrXgEElU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/14/AMC_TWD_Heads_Up.png/revision/latest/scale-to-width-down/350?cb=20151123085845",
                plot: "After hiding from the walker herd, Glenn encounters Enid and convinces her to accompany him back to Alexandria. Ron sneaks into the armoury and steals ammunition. Carol confronts Morgan, suspecting that he is holding a prisoner. Glenn and Enid release several balloons, leading Maggie to realize Glenn is alive. However, at that moment, the damaged clock tower collapses, opening a breach in Alexandria's wall."
            },
            {
                ep: 75,
                season: 6,
                season_ep: 8,
                title: "Start to Finish",
                director: "Michael E. Satrazemis",
                air_date: "November 29, 2015",
                us_viewers: "13.98 millions",
                video: 'https://www.youtube.com/embed/xIH1lAhov1Y',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/89/AMC_TWD_Start_to_Finish.png/revision/latest/scale-to-width-down/350?cb=20151130140027",
                plot: "With the wall breached, walkers invade Alexandria. Rick, Michonne, Carl, Gabriel, and Deanna take refuge in Jessie's house; they discover Deanna has been bitten. Carol takes shelter in Morgan's house and discovers Denise treating the captured Wolf. Carol attempts to kill the Wolf, but Morgan stops her, only to be immediately knocked out by the Wolf, who takes Denise hostage and escapes. Succumbing to infection, Deanna stages a last stand as Rick's group disguises themselves as walkers and maneuvers through the walker horde. In a post-credits scene, Daryl, Abraham and Sasha are confronted by the Saviors, who tell them that all of their possessions now belong to Negan."
            },
            {
                ep: 76,
                season: 6,
                season_ep: 9,
                title: "No Way Out",
                director: "Greg Nicotero",
                air_date: "February 14, 2016",
                us_viewers: "13.74 millions",
                video: 'https://www.youtube.com/embed/-338CUs5LTY',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/80/AMC_TWD_No_Way_Out.png/revision/latest/scale-to-width-down/350?cb=20160215114828",
                plot: "After eliminating the Saviors patrol, Abraham, Sasha, and Daryl continue toward Alexandria. While saving Denise from walkers, the Wolf is shot by Carol and killed by walkers. Sam and Jessie are killed by walkers while moving through the herd. In response, Ron tries to shoot Rick, but is killed by Michonne; Carl is shot in the eye as the handgun discharges. Rick inspires others to make a desperate stand against the herd; they are about to be overwhelmed when the walkers are diverted by burning fuel brought by Daryl, Sasha and Abraham."
            },
            {
                ep: 77,
                season: 6,
                season_ep: 10,
                title: "The Next World",
                director: "Kari Skogland",
                air_date: "February 21, 2016",
                us_viewers: "13.48 millions",
                video: 'https://www.youtube.com/embed/JvplELFiT1Q',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/b/ba/AMC_TWD_The_Next_World.png/revision/latest/scale-to-width-down/350?cb=20160222104858",
                plot: "Some two months after battling the walkers in Alexandria, Rick and Daryl head out for a supply run and encounter a smooth-talking man known as Jesus, who steals their truck; they bring him back to Alexandria after a tussle. Meanwhile, Michonne follows Spencer into the woods and aids him in dispatching and burying the walker that once was his mother, Deanna."
            },
            {
                ep: 78,
                season: 6,
                season_ep: 11,
                title: "Knots Untie",
                director: " Michael E. Satrazemis",
                air_date: "February 28, 2016",
                us_viewers: "12.79 millions",
                video: 'https://www.youtube.com/embed/nR-Dsdt8_bc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/38/AMC_TWD_Knots_Untie.png/revision/latest/scale-to-width-down/350?cb=20160229092530",
                plot: "Rick's group travels to The Hilltop with Jesus to trade and alleviate Alexandria's food shortage. Talks are interrupted when a Hilltop resident attempts to assassinate Hilltop's leader, Gregory, on Negan's orders. Jesus explains that Negan's people have been extorting Hilltop for food, medicine and supplies under the threat of an attack. Maggie makes a deal with Gregory to kill Negan, take out the Saviors, and return a Hilltop hostage in exchange for half of their supplies."
            },
            {
                ep: 79,
                season: 6,
                season_ep: 12,
                title: "Not Tomorrow Yet",
                director: "Greg Nicotero",
                air_date: "March 6, 2016",
                us_viewers: "12.82 millions",
                video: 'https://www.youtube.com/embed/7aNFuKsN3-M',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/5c/AMC_TWD_Not_Tomorrow_Yet.png/revision/latest/scale-to-width-down/350?cb=20160307110321",
                plot: "Rick campaigns for a pre-emptive attack to kill the Saviors, leaving Carol haunted by the lives she has taken. Using a ruse to kill the guards at the compound, they secure the Hilltop hostage, Craig, and proceed to methodically murder several Saviors before an alarm is triggered. Jesus and Tara send Andy back to the Hilltop with Craig to honor their deal, while Carol prevents Maggie from joining the fight. The next morning, Tara and Heath depart on a supply run. A lone surviving Savior named Primo tries to escape; while Daryl beats him, a woman's voice comes over a walkie-talkie, claiming that they have Maggie and Carol."
            },
            {
                ep: 80,
                season: 6,
                season_ep: 13,
                title: "The Same Boat",
                director: "Greg Nicotero",
                air_date: "March 13, 2016",
                us_viewers: "12.53 millions",
                video: 'https://www.youtube.com/embed/DGx2cvgSTn0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/29/AMC_TWD_The_Same_Boat.png/revision/latest/scale-to-width-down/350?cb=20160314120242",
                plot: "Carol and Maggie are captured by Paula, Michelle, Molly and Donnie, who observe Primo taken hostage by Rick's group. Feeling themselves at a disadvantage, they withdraw to a slaughterhouse to interrogate Carol and Maggie while awaiting reinforcements. When unguarded, Carol and Maggie free themselves and kill their four captors; they dispatch the reinforcements who arrive just ahead of their group. Rick kills Primo when he claims to be Negan."
            },
            {
                ep: 81,
                season: 6,
                season_ep: 14,
                title: "Twice as Far",
                director: "Alrick Riley",
                air_date: "March 20, 2016",
                us_viewers: "12.69 millions",
                video: 'https://www.youtube.com/embed/yQI6kb_zlBw',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/47/AMC_TWD_Twice_as_Far.png/revision/latest/scale-to-width-down/350?cb=20160321121006",
                plot: "Abraham and Eugene go on a patrol and find a facility where Eugene can craft ammunition; Abraham leaves after Eugene claims he no longer requires Abraham's protection. Daryl, Rosita, and Denise travel to an apothecary to scavenge medicines. Denise is killed by Dwight and the Saviors, who ambush Daryl and Rosita while holding Eugene hostage. A gun battle ensues, and Eugene is injured before Dwight retreats with the surviving members of his group. Carol sneaks out of Alexandria, leaving a note for Tobin expressing her wishes not to be pursued."
            },
            {
                ep: 82,
                season: 6,
                season_ep: 15,
                title: "East",
                director: "Michael E. Satrazemis",
                air_date: "March 27, 2016",
                us_viewers: "12.38 millions",
                video: 'https://www.youtube.com/embed/SHtwDxHPO1o',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/a/a9/AMC_TWD_East.png/revision/latest/scale-to-width-down/350?cb=20170605033229",
                plot: "While Alexandria is locked-down against the Savior threat, Carol is caught by a group of Saviors who want to use her to get into the community. She kills most of them, but one, Roman, survives and pursues her on foot. Rick and Morgan follow a blood trail they believe is Carol's, until Morgan sends Rick back due to his murderous reaction toward a non-hostile survivor. Aided by Glenn, Michonne and Rosita, Daryl hunts Dwight to avenge Denise, but the four of them are captured in the woods by Dwight and the Saviors."
            },
            {
                ep: 83,
                season: 6,
                season_ep: 16,
                title: "Last Day on Earth",
                director: "Greg Nicotero",
                air_date: "April 3, 2016",
                us_viewers: "14.19 millions",
                video: 'https://www.youtube.com/embed/3uZFCJsbkh4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/10/18b54413afca9c9518660f86cf231c86.png/revision/latest/scale-to-width-down/350?cb=20160404193634",
                plot: "Roman finds Carol and shoots her twice, but is killed by Morgan before he can finish her off; two strangers find Carol and Morgan and offer to take them to their community for refuge. Rick's group try to get Maggie to Hilltop for medical attention, but find all of the routes blocked by the Saviors. Although Eugene volunteers to distract the Saviors while the rest of the group gets Maggie to Hilltop on foot, everyone is captured. Negan, who was not Primo, arrives and coerces the group's loyalty. As punishment for their actions, he bludgeons an unseen member of Rick's group to death with his barbed-wire laced baseball bat 'Lucille'."
            },
        ]
    },
    {
        num: "7 (2016–17)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/6/6d/Walking_Dead_S7_Poster.jpg/220px-Walking_Dead_S7_Poster.jpg",
        description: "Negan murders Glenn and Abraham to coerce Rick's loyalty. Rick initially submits, but Michonne persuades him to fight back, and recruits a community called the Scavengers for help. Meanwhile, Rosita and Eugene make a bullet to kill Negan. When this fails, Negan forcibly recruits Eugene as a Savior. Separately, Carol and Morgan befriend Ezekiel of the Kingdom, another community, while Maggie and Sasha rally the Hilltop. Negan, the Saviors and the turncoat Scavengers attack Alexandria, but it is repelled by Sasha's sacrifice and the aid of Kingdom and Hilltop soldiers.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist and leader of Alexandria, who is forced to adapt under the rule of Negan."
            },
            {
                character: "Michonne",
                actor: "Danai Gurira",
                description: "Michonne, a katana-wielding warrior, who has opened up from her previous solitary life and has recently begun a relationship with Rick."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, Maggie's resourceful husband, who stands as the group's moral compass."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: "Carl Grimes, Rick's teenage son, who struggles to maintain his renewed morality that he achieved from residing in Alexandria."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, the group's primary hunter and a recruiter for Alexandria."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, an empowered member of the group, whose several tragedies force her to question her ruthless methods."
            },
            {
                character: "Maggie Greene",
                actor: "Lauren Cohan",
                description: "Maggie Rhee, Glenn's strong-willed and pregnant wife."
            },
            {
                character: "Sasha Williams",
                actor: "Sonequa Martin-Green",
                description: "Sasha Williams, a former firefighter, Abraham's girlfriend and a guard of Alexandria, who has overcome various traumas."
            },
            {
                character: "Sergeant Abraham Ford",
                actor: "Michael Cudlitz",
                description: "Sgt. Abraham Ford, a former military sergeant, whose reevaluation of his life led him to break up with Rosita and pursue Sasha."
            },
            {
                character: "Eugine Porter",
                actor: "Josh McDermitt",
                description: "Eugene Porter, a survivor who struggles to prove his worth to the group after lying to them about knowing a possible cure to the walker virus."
            },
            {
                character: "Rosita Espinosa",
                actor: "Christian Serratos",
                description: "Rosita Espinosa, a pragmatic and protective member of the group, and ex-girlfriend of Abraham."
            },
            {
                character: "Tara Chambler",
                actor: "Alanna Masterson",
                description: "Tara Chambler, a caring member of the group, who found a community named Oceanside and struggles to keep it a secret."
            },
            {
                character: "Gabriel Stokes",
                actor: "Seth Gilliam",
                description: "Gabriel Stokes, a priest, who has managed to earn the group's trust after previously betraying them."
            },
            {
                character: "Morgan Jones",
                actor: "Lennie James",
                description: "Morgan Jones, the first survivor Rick had ever encountered, who is questioning the pacifist philosophy he had adopted."
            },
            {
                character: "Aaron",
                actor: "Ross Marquand",
                description: " Aaron, an Alexandrian recruiter, who brought Rick's group to Alexandria and serves as a bridge between the two factions."
            },
            {
                character: "Spenser Monroe",
                actor: "Austin Nichols",
                description: "Spenser Monroe, a guard of Alexandria and the only surviving member of his family."
            },
            {
                character: "Negan",
                actor: "Jeffrey Dean Morgan",
                description: "Jeffrey Dean Morgan as Negan, the manipulative and totalitarian leader of the Saviors who served as the primary antagonist of the season."
            },
            {
                character: "Dwight",
                actor: "Austin Amelio",
                description: "Dwight, a ruthless but reluctant member of the Saviors and one of Negan's top lieutenants, who forms a violent hostile rivalry with Daryl."
            },
            {
                character: "Paul 'Jesus' Rovia",
                actor: "Tom Payne",
                description: "Paul 'Jesus' Rovia, a scout for the Hilltop, who introduced Rick's group to their compound."
            },
            {
                character: "Gregory",
                actor: "Xander Berkeley",
                description: "Gregory, the selfish and arrogant leader of the Hilltop."
            },
        ],
        supporting_cast: [
            {
                character: "Enid",
                actor: "Katelyn Nacon",
                description: "Enid, an isolated teenager residing in Alexandria, who forms a special bond with Maggie and is starting to show feelings for Carl."
            },
            {
                character: "Tobin",
                actor: "Jason Douglas",
                description: "Tobin, the foreman of Alexandria's construction crew."
            },
            {
                character: "Eric Raleigh",
                actor: "Jordan Woods-Robinson",
                description: "Eric Raleigh, Aaron's boyfriend and his former recruiting partner."
            },
            {
                character: "Simon",
                actor: "Steven Ogg",
                description: "Simon, Negan's right-hand."
            },
            {
                character: "Sherry",
                actor: "Christine Evangelista",
                description: "Sherry, Dwight's ex-wife and now one of Negan's harem."
            },
            {
                character: "Gavin",
                actor: "Jayson Warner Smith",
                description: "Gavin, a Savior lieutenant who deal directly with The Kingdom."
            },
            {
                character: "Gary",
                actor: "Mike Seal",
                description: "Gary, one of Negan's top lieutenants."
            },
            {
                character: "Laura",
                actor: "Lindsey Register ",
                description: "Laura, one of Negan's top lieutenants.."
            },
            {
                character: "Ezekiel",
                actor: "Khary Payton",
                description: "Ezekiel, a former zookeeper and the flamboyant leader of the Kingdom."
            },
            {
                character: "Jerry",
                actor: "Cooper Andrews",
                description: "Jerry, Ezekiel's wise-cracking personal bodyguard."
            },
            {
                character: "Richard",
                actor: "Karl Makinen",
                description: "Richard, Ezekiel's right-hand-man"
            },
            {
                character: "Benjamin",
                actor: "Logan Miller",
                description: "Benjamin, a young member of The Kingdom who Morgan takes under his wing."
            },
            {
                character: "Henry",
                actor: "Macsen Lintz",
                description: "Henry, a resident of the Kingdom and younger brother of Benjamin."
            },
            {
                character: "Natania",
                actor: "Deborah May",
                description: "Natania, the leader of Oceanside."
            },
            {
                character: "Cyndie",
                actor: "Sydney Park ",
                description: "Natania's granddaughter."
            },
            {
                character: "Rachel",
                actor: "Mimi Kirkland ",
                description: "Rachel, Natania's granddaughter and Cyndie's younger sister."
            },
            {
                character: "Jadis",
                actor: "Pollyanna McIntosh ",
                description: "Jadis, the unusual leader of The Scavengers."
            },
            {
                character: "Brion",
                actor: "Thomas Francis Murphy ",
                description: "Brion, a high ranking member of The Scavengers."
            },
            {
                character: "Tamiel",
                actor: "Sabrina Gennarino ",
                description: "Tamiel, a high ranking member of The Scavengers."
            },
            {
                character: "Farron",
                actor: "Anja Akstin  ",
                description: "Farron, a member of the Scavengers, who forms a brief rivalry with Michonne."
            },
        ],
        episodes: [
            {
                ep: 84,
                season: 7,
                season_ep: 1,
                title: "The Day Will Come When You Won't Be",
                director: "Greg Nicotero",
                air_date: "October 23, 2016",
                us_viewers: "17.03 millions",
                video: 'https://www.youtube.com/embed/d3LDG5CCOPQ',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/13/Immortalized_101_MPX_1920x1080.jpg/revision/latest/scale-to-width-down/350?cb=20161025085529",
                plot: "Negan's victim is revealed to be Abraham, who is beaten to death in front of Rick's group. Daryl punches Negan out of anger, prompting Negan to also murder Glenn. After several tests, Negan ultimately breaks Rick's resolve by nearly forcing him to hack off Carl's arm. Negan and his crew then leave with Daryl as hostage, while Sasha volunteers to take Maggie to Hilltop to recover, along with the bodies of Glenn and Abraham."
            },
            {
                ep: 85,
                season: 7,
                season_ep: 2,
                title: "The Well",
                director: " Greg Nicotero",
                air_date: "October 30, 2016",
                us_viewers: "12.46 millions",
                video: 'https://www.youtube.com/embed/0j0yHV6EnY8',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/32/TWD_702_D1.jpg/revision/latest/scale-to-width-down/350?cb=20161031060820",
                plot: "Carol and Morgan arrive at the Kingdom, a well-established community run by flamboyant former zookeeper 'King' Ezekiel. The Kingdom, like Hilltop, has been producing for the Saviors under the threat of violence, although Ezekiel has kept this arrangement secret from most residents of the Kingdom. Carol recuperates and eagerly prepares to abandon the community, but opts to stay in an isolated house nearby after bonding with Ezekiel."
            },
            {
                ep: 86,
                season: 7,
                season_ep: 3,
                title: "The Cell",
                director: "Alrick Riley ",
                air_date: "November 6, 2016",
                us_viewers: "11.72 millions",
                video: 'https://www.youtube.com/embed/1ltn9lqppaM',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/e9/TWD_703_D1.jpg/revision/latest/scale-to-width-down/350?cb=20161107043828",
                plot: "Daryl is locked in a cell at the Sanctuary, where Negan and Dwight constantly torture him in an effort to break him down to obedience. Negan sends Dwight on a mission to retrieve an escaped Savior, who says he would rather die than return to the Sanctuary. Dwight, therefore, ultimately mercy-kills the man. Daryl is given the opportunity to become a Savior but adamantly refuses."
            },
            {
                ep: 87,
                season: 7,
                season_ep: 4,
                title: "Service",
                director: "David Boyd ",
                air_date: "November 13, 2016",
                us_viewers: "11.40 millions",
                video: 'https://www.youtube.com/embed/o1ANTnMvZ-8',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/01/TWD_704_D1.jpg/revision/latest/scale-to-width-down/350?cb=20161114090348",
                plot: "As the grieving survivors struggle to come to terms with life under Negan's rule, Negan and the Saviors arrive at Alexandria days ahead of schedule for their first offering and take most of Alexandria's furniture and medicine, and all their firearms. Feeling powerless, Rick informs the survivors that he is no longer in charge and they must learn to live by Negan's terms. Rosita finds an empty cartridge case and brings it to Eugene, tasking him to craft a live, usable cartridge for a gun she found in the woods."
            },
            {
                ep: 88,
                season: 7,
                season_ep: 5,
                title: "Go Getters",
                director: "Darnell Martin",
                air_date: "November 20, 2016",
                us_viewers: "11.00 millions",
                video: 'https://www.youtube.com/embed/XDKGh3UqpVg',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/51/Sasha_jesus.jpg/revision/latest/scale-to-width-down/350?cb=20161121041633",
                plot: "Carl accompanies Enid to Hilltop to visit Maggie, who is recovering there with Sasha. Gregory is furious with Maggie and Sasha for not fulfilling their deal to kill the Saviors, and demands they leave. However, after they help defend Hilltop from a walker attack, Jesus convinces Gregory to let them stay. While the Saviors raid Hilltop's supplies, Sasha asks Jesus if he can find where Negan lives, which he agrees to do. Jesus then sneaks onto one of the Saviors' trucks, where he finds Carl hiding."
            },
            {
                ep: 89,
                season: 7,
                season_ep: 6,
                title: "Swear ",
                director: "Michael E. Satrazemis",
                air_date: "November 27, 2016",
                us_viewers: "10.40 millions",
                video: 'https://www.youtube.com/embed/hWHf6cPAURU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/36/TWD_706_D1.jpg/revision/latest/scale-to-width-down/350?cb=20161128050235",
                plot: "Two weeks after the attack at the Saviors' satellite station outpost, Tara is separated from Heath when she falls off a bridge during a walker attack. She washes up on a beach, where she is revived by a girl named Cyndie. Tara follows Cyndie to her community, Oceanside, a secluded group consisting of heavily-armed women and children; any men in the group had been slaughtered by the Saviors. Cyndie helps Tara find her way back to Alexandria and makes her swear to never mention Oceanside to anyone."
            },
            {
                ep: 90,
                season_ep: 7,
                title: "Sing Me a Song",
                director: "Rosemary Rodriguez",
                air_date: "December 4, 2016",
                us_viewers: "10.48 millions",
                video: 'https://www.youtube.com/embed/DG3InkCTwrU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/01/707_Rick_and_Aaron.jpg/revision/latest/scale-to-width-down/350?cb=20161205060604",
                plot: "Upon nearing the Sanctuary, Jesus jumps off the Saviors' truck to recon the area, but Carl stays behind to kill Negan on his own. Dwight subdues Carl, but Negan is impressed by Carl's bravery and tours him around Sanctuary. Rosita and Eugene manage to craft a live cartridge, while Spencer scavenges for supplies in the woods. Upon returning to Alexandria, the trio finds Negan and the Saviors are there."
            },
            {
                ep: 91,
                season: 7,
                season_ep: 8,
                title: "Hearts Still Beating",
                director: "Michael E. Satrazemis",
                air_date: "December 11,, 2016",
                us_viewers: "10.58 millions",
                video: 'https://www.youtube.com/embed/cGHZ8FJrfg4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/a/a7/TWD_708_D1.jpg/revision/latest/scale-to-width-down/350?cb=20161212053150",
                plot: "With help from Jesus and an anonymous source, Daryl finally escapes from the Sanctuary. During a discussion about Rick's leadership, Negan guts and kills Spencer, enraging Rosita, who shoots at Negan but hits Lucille instead. As punishment, Arat kills Olivia. Negan and the Saviors then leave with Eugene as hostage. After a talk with Michonne, Rick is finally motivated to fight the Saviors. Rick's group travels to Hilltop to reunite with Maggie, Sasha, and Enid; Daryl and Jesus emerge, and the group embraces."
            },
            {
                ep: 92,
                season: 7,
                season_ep: 9,
                title: "Rock in the Road",
                director: "Greg Nicotero",
                air_date: "February 12, 2017",
                us_viewers: "12.00 millions",
                video: 'https://www.youtube.com/embed/VX92T6HCTak',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/50/Rock_in_the_Road.jpg/revision/latest/scale-to-width-down/350?cb=20170213041558",
                plot: "After Hilltop rallies behind Rick's group in the fight against the Saviors, Jesus introduces the group to the Kingdom, where they meet 'King' Ezekiel and reunite with Morgan. Although Ezekiel hesitates to join the proposed alliance, he offers Daryl asylum at the Kingdom. In Alexandria, a group of Saviors raids the community in search of Daryl but leaves after they are unable to find him. Rick's group pursues Father Gabriel, who had taken the group's supplies and left clues leading to a dilapidated yard. Upon their arrival, the group is surrounded by the Scavengers."
            },
            {
                ep: 93,
                season: 7,
                season_ep: 10,
                title: "New Best Friend",
                director: "Jeffrey F. January",
                air_date: "February 19, 2017",
                us_viewers: "11.08 millions",
                video: 'https://www.youtube.com/embed/5SKt2n5YhiM',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/0f/New_Best_Friends.jpg/revision/latest/scale-to-width-down/350?cb=20170220033532",
                plot: "Rick manages to convince the Scavengers to join Alexandria in the fight against the Saviors, but their leader, Jadis, demands Rick's group deliver them guns in exchange for their assistance. Richard plans to have Carol killed by the Saviors, believing that her death would motivate Ezekiel to fight. When Daryl learns of Richard's plans, he threatens to kill him should Carol be harmed in any way. After reuniting with Carol and lying to her about Glenn and Abraham's fates, Daryl travels to Hilltop to prepare for battle against the Saviors."
            },
            {
                ep: 94,
                season: 7,
                season_ep: 11,
                title: "Hostiles and Calamities",
                director: " Kari Skogland",
                air_date: "February 26, 2017",
                us_viewers: "12.79 millions",
                video: 'https://www.youtube.com/embed/GSgpgQTKDr4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/9e/TWD_711_D1.jpg/revision/latest/scale-to-width-down/350?cb=20170227115544",
                plot: "Eugene settles in quickly at the Sanctuary, as he's rewarded for his intelligence and willingness to submit to Negan's demands. Eugene bonds with two of Negan's wives. At their request, he makes poison capsules; however, he refuses to give them the capsules after learning of their intentions to kill Negan. Dwight discovers a note from Sherry that reveals she helped Daryl escape from the Sanctuary and then fled to parts unknown. Dwight frames Dr. Emmett Carson for Daryl and Sherry's disappearances, leading Negan to murder Carson by hurling him into a furnace."
            },
            {
                ep: 95,
                season: 7,
                season_ep: 12,
                title: "Say Yes",
                director: "Greg Nicotero",
                air_date: "March 5, 2017",
                us_viewers: "10.16 millions",
                video: 'https://www.youtube.com/embed/wacB5sp0mt0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/38/TWD_712_D1.jpg/revision/latest/scale-to-width-down/350?cb=20170306061509",
                plot: "Rick and Michonne embark on a hunt for guns to bring to the Scavengers and find an abandoned school carnival, where they acquire dozens of guns. They bring the guns back to the Scavengers, but Jadis is unsatisfied and demands more. Tara contemplates whether or not to tell Rick about Oceanside, knowing Rick's group's need for weapons and reinforcements. Frustrated with the delay, Rosita travels to Hilltop and meets with Sasha; they make a pact to kill Negan together."
            },
            {
                ep: 96,
                season: 7,
                season_ep: 13,
                title: "Bury Me Here",
                director: "Alrick Riley",
                air_date: "March 12, 2017",
                us_viewers: "10.68 millions",
                video: 'https://www.youtube.com/embed/RLniUYBB9qk',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/88/Bury_Me_Here.jpg/revision/latest/scale-to-width-down/350?cb=20170313023753",
                plot: "Ezekiel and his group meet the Saviors for the Kingdom's weekly tribute. After the Saviors notice a single cantaloupe is missing, Jared shoots Benjamin, who bleeds to death. Morgan, who finds the missing cantaloupe hidden in the street and learns that Richard sabotaged the drop-off in an effort to get himself killed and become a martyr for war, Morgan strangles Richard to death for causing Benjamin's murder. Morgan reveals the truth about Glenn, Abraham, Spencer, and Olivia to Carol, leading her to return to the Kingdom prepared to fight the Saviors alongside Ezekiel."
            },
            {
                ep: 97,
                season: 7,
                season_ep: 14,
                title: "The Other Side",
                director: "Michael E. Satrazemis",
                air_date: "March 19, 2017",
                us_viewers: "10.32 millions",
                video: 'https://www.youtube.com/embed/GaneLkdlU6c',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/20/The_Other_Side.jpg/revision/latest/scale-to-width-down/350?cb=20170320034657",
                plot: "The Saviors raid Hilltop unexpectedly, forcing Daryl and Maggie into hiding; the Saviors leave with Dr. Harlan Carson in tow to replace his now-deceased brother as their doctor. While sneaking into the Sanctuary on a secret mission, Sasha and Rosita encounter Eugene and urge him to escape, but he refuses. Sasha then locks Rosita out, telling her to go back to Alexandria because the group needs her. As Sasha breaks into the Sanctuary to kill Negan herself, Rosita flees and notices someone watching her."
            },
            {
                ep: 98,
                season: 7,
                season_ep: 15,
                title: "Something They Need",
                director: "Micael Slovis",
                air_date: "March 26, 2017",
                us_viewers: "10.54 millions",
                video: 'https://www.youtube.com/embed/SntyJOY70cs',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/ef/TWD_715_D1.jpg/revision/latest/scale-to-width-down/350?cb=20170327204247",
                plot: "Tara leads the group to Oceanside in hopes of convincing that community to join the fight against the Saviors. Natania refuses to have her people fight but ultimately capitulates to Rick's group's demands to take their guns. After imprisoning Sasha, Negan reveals he is aware of Rick's plans to fight him and encourages Sasha to join him. She confides in Eugene and asks him for a weapon, then a way to kill herself; in response, he gives her one of the poison capsules he had made. Upon their return to Alexandria, Rick's group is greeted by Rosita, who after running into Dwight while fleeing the Sanctuary, reveals Dwight's intentions of helping take down Negan."
            },
            {
                ep: 99,
                season: 7,
                season_ep: 16,
                title: "The First Day of the Rest of Your Life",
                director: "Greg Nicotero",
                air_date: "April 2, 2017",
                us_viewers: "11.31 millions",
                video: 'https://www.youtube.com/embed/AbmbDJwX9j0',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/66/716.jpg/revision/latest/scale-to-width-down/350?cb=20170707225840",
                plot: "Negan and the Saviors travel to Alexandria with Sasha in a coffin as a gimmick to confront Rick. On the way, Sasha commits suicide with the poison capsule Eugene had given her. At Alexandria, the Scavengers double-cross Rick's group, revealing they've been dealing with Negan all along. After a standoff, a gun fight ensues, with the unexpected arrival of Kingdom and Hilltop fighters forcing Negan and the Saviors and the Scavengers to retreat. Alexandria, the Kingdom, and Hilltop are hit badly, but are prepared for all-out war against their enemies, while the undead Sasha is put down by Maggie and Jesus."
            },
        ]
    },
    {
        num: "8 (2017–18)",
        photo: "//upload.wikimedia.org/wikipedia/en/thumb/1/1c/Walking_Dead_S8_Poster.jpg/220px-Walking_Dead_S8_Poster.jpg",
        description: "Rick, Maggie, and Ezekiel rally their communities into war against Negan and the Saviors. Losses are heavy on both sides: many of the Kingdom soldiers are killed, Alexandria falls to a Savior attack, and Carl is bitten by a walker. Before euthanizing himself, Carl convinces Rick to end the war and restart society anew. Negan attempts to wipe out Rick and his allies, but Eugene disrupts his plan and Negan is wounded and captured by Rick. Against Maggie's wishes, Negan is spared and imprisoned, ending the war.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist, a former sheriff and the leader of Alexandria, who is leading a new alliance to fight Negan and the Saviors."
            },
            {
                character: "Michonne",
                actor: "Danai Gurira",
                description: "Michonne, Rick's katana-wielding girlfriend, who acts as a mother figure to Carl and Judith."
            },
            {
                character: "Glenn Rhee",
                actor: "Steven Yeun",
                description: "Glenn Rhee, Maggie's resourceful husband, who stands as the group's moral compass."
            },
            {
                character: "Carl Grimes",
                actor: "Chandler Riggs",
                description: "Carl Grimes, Rick's bold and courageous teenage son."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, Rick's right-hand man, the group's primary hunter and a recruiter for Alexandria."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, a fierce survivor who is spurred into fighting the Saviors as revenge for the deaths of her friends."
            },
            {
                character: "Maggie Greene",
                actor: "Lauren Cohan",
                description: "Maggie Rhee, the pregnant widow of Glenn and a leading figure of the Hilltop."
            },
            {
                character: "Sasha Williams",
                actor: "Sonequa Martin-Green",
                description: "Sasha Williams, a former firefighter, Abraham's girlfriend and a guard of Alexandria, who has overcome various traumas."
            },
            {
                character: "Sergeant Abraham Ford",
                actor: "Michael Cudlitz",
                description: "Sergeant Abraham Ford, a former military sergeant, whose reevaluation of his life led him to break up with Rosita and pursue Sasha."
            },
            {
                character: "Eugine Porter",
                actor: "Josh McDermitt",
                description: "Eugine Porter, a timorous former member of the group whose resourcefulness leads Negan to take him under his wing."
            },
            {
                character: "Rosita Espinosa",
                actor: "Christian Serratos",
                description: "Rosita Espinosa, an impulsive member of the group, who is motivated to avenge her ex-boyfriend Spencer and Abraham's death."
            },
            {
                character: "Tara Chambler",
                actor: "Alanna Masterson",
                description: "Tara Chambler, a caring, witty member of the group and supply runner for Alexandria who serves as a liaison with Oceanside."
            },
            {
                character: "Gabriel Stokes",
                actor: "Seth Gilliam",
                description: "Gabriel Stokes, a priest who has become hardened from his experiences with Rick's group."
            },
            {
                character: "Morgan Jones",
                actor: "Lennie James",
                description: "Morgan Jones, the first survivor Rick had ever encountered, who now resides in the Kingdom and fights for his sanity."
            },
            {
                character: "Aaron",
                actor: "Ross Marquand",
                description: "Aaron, an Alexandrian recruiter who brought Rick's group to Alexandria and is currently in the fight against the Saviors."
            },
            {
                character: "Negan",
                actor: "Jeffrey Dean Morgan",
                description: "Negan, the leader of the Saviors who serves as the season's primary antagonist."
            },
            {
                character: "Dwight",
                actor: "Austin Amelio",
                description: "Dwight, a former subordinate of Negan who now works for Rick as a double agent against the Saviors."
            },
            {
                character: "Paul 'Jesus' Rovia",
                actor: "Tom Payne",
                description: "Paul 'Jesus' Rovia, a scout for the Hilltop."
            },
            {
                character: "Gregory",
                actor: "Xander Berkeley",
                description: "Gregory, the selfish and hypocritical leader of the Hilltop whose influence diminished with Maggie's prominence."
            },
            {
                character: "Ezekiel",
                actor: "Khary Payton",
                description: "Ezekiel, the charismatic leader of the Kingdom who allies with Rick against the Saviors."
            },
            {
                character: "Simon",
                actor: "Steven Ogg",
                description: "Simon, a former mortgage broker and Negan's second-in-command, he does not hide his intentions to overthrow Negan."
            },
            {
                character: "Enid",
                actor: "Katelyn Nacon",
                description: " Enid, a former member of Alexandria who moved to Hilltop to be with Maggie, and has formed a relationship with Carl."
            },
            {
                character: "Jadis",
                actor: "Pollyanna McIntosh ",
                description: "Jadis / Anne, the deceptive leader of the Scavengers who betrayed Rick's group, and maintains a neutral stance in the war."
            },
        ],
        supporting_cast: [
            {
                character: "Tobin",
                actor: "Jason Douglas",
                description: "Tobin, the foreman of Alexandria's construction crew."
            },
            {
                character: "Eric Raleigh",
                actor: "Jordan Woods-Robinson",
                description: "Eric Raleigh, Aaron's boyfriend and his former recruiting partner."
            },
            {
                character: "Gavin",
                actor: "Jayson Warner Smith",
                description: "Gavin, a Savior lieutenant who deal directly with The Kingdom."
            },
            {
                character: "Gary",
                actor: "Mike Seal",
                description: "Gary, one of Negan's top lieutenants."
            },
            {
                character: "Laura",
                actor: "Lindsey Register ",
                description: "Laura, one of Negan's top lieutenants.."
            },

            {
                character: "Jerry",
                actor: "Cooper Andrews",
                description: "Jerry, Ezekiel's wise-cracking personal bodyguard."
            },
            {
                character: "Morales",
                actor: "Juan Pareja",
                description: "Morales, a survivor from Rick's original Atlanta camp who joined the Saviors."
            },
            {
                character: "Jared",
                actor: "Joshua Mikel",
                description: "Jared, Benjamin's killer, and a hostile member of the Saviors who antagonizes Morgan."
            },
            {
                character: "Henry",
                actor: "Macsen Lintz",
                description: "Henry, a resident of the Kingdom and younger brother of Benjamin."
            },
            {
                character: "Natania",
                actor: "Deborah May",
                description: "Natania, the leader of Oceanside."
            },
            {
                character: "Cyndie",
                actor: "Sydney Park ",
                description: "Natania's granddaughter."
            },
            {
                character: "Rachel",
                actor: "Mimi Kirkland ",
                description: "Rachel, Natania's granddaughter and Cyndie's younger sister."
            },

            {
                character: "Brion",
                actor: "Thomas Francis Murphy ",
                description: "Brion, a high ranking member of The Scavengers."
            },
            {
                character: "Tamiel",
                actor: "Sabrina Gennarino ",
                description: "Tamiel, a high ranking member of The Scavengers."
            },
            {
                character: "Siddiq",
                actor: "Avi Nash ",
                description: "Siddiq, a mysterious vagabond survivor who befriends Carl."
            },
            {
                character: "Georgie",
                actor: "Jayne Atkinson  ",
                description: "Georgie, the leader of a mysterious humanitarian group."
            },
        ],
        episodes: [
            {
                ep: 100,
                season: 8,
                season_ep: 1,
                title: "Mercy",
                director: "Greg Nicotero",
                air_date: "October 22, 2017",
                us_viewers: "11.44 millions",
                video: 'https://www.youtube.com/embed/B6c87OLUtWQ',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/7c/801_M.jpg/revision/latest/scale-to-width-down/350?cb=20171023054816",
                plot: "Rick, Maggie, and Ezekiel rally their communities together to take down Negan. Gregory attempts to have the Hilltop residents side with Negan, but they all firmly stand behind Maggie. The group attacks the Sanctuary, taking down its fences and flooding the compound with walkers. With the Sanctuary overrun, everyone leaves except Gabriel, who reluctantly stays to save Gregory, but is left behind when Gregory abandons him. Surrounded by walkers, Gabriel hides in a trailer, where he is trapped inside with Negan."
            },
            {
                ep: 101,
                season: 8,
                season_ep: 2,
                title: "The Damned",
                director: "Rosemary Rodrigues",
                air_date: "October 29, 2017",
                us_viewers: "8.92 millions",
                video: 'https://www.youtube.com/embed/Q6fhbkxpBMQ',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/a/a3/802.jpg/revision/latest/scale-to-width-down/350?cb=20171030094238",
                plot: "Rick's forces split into separate parties to attack several of the Saviors' outposts, during which many members of the group are killed; Eric is critically injured and rushed away by Aaron. Jesus stops Tara and Morgan from executing a group of surrendered Saviors. While clearing an outpost with Daryl, Rick is confronted and held at gunpoint by Morales, a survivor he met in the initial Atlanta camp, who is now with the Saviors."
            },
            {
                ep: 102,
                season: 8,
                season_ep: 3,
                title: "Monsters",
                director: "Greg Nicotero ",
                air_date: "November 5, 2017",
                us_viewers: "8.52 millions",
                video: 'https://www.youtube.com/embed/uykcnGzY7tY',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/f2/803.jpg/revision/latest/scale-to-width-down/350?cb=20171106031552",
                plot: "Daryl finds Morales threatening Rick and kills him; the duo then pursue a group of Saviors who are transporting weapons to another outpost. Gregory returns to Hilltop, and after a heated argument, Maggie ultimately allows him back in the community. Eric dies from his injuries, leaving Aaron distraught. Despite Tara and Morgan's objections, Jesus leads the group of surrendered Saviors to Hilltop. Ezekiel's group attacks another Savior compound, during which Kingdom fighters are annihilated while protecting Ezekiel."
            },
            {
                ep: 103,
                season: 8,
                season_ep: 4,
                title: "Some Guy",
                director: "Dan Liu ",
                air_date: "November 12, 2017",
                us_viewers: "8.69 millions",
                video: 'https://www.youtube.com/embed/fuFmxDiES0k',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/29/804.jpg/revision/latest/scale-to-width-down/350?cb=20171113062730",
                plot: "Ezekiel's group is overwhelmed by the Saviors, who kill all of them except for Ezekiel himself and Jerry. Carol clears the inside of the compound, killing all but two Saviors, who almost escape but are eventually caught by Rick and Daryl. En route to the Kingdom, Ezekiel, Jerry, and Carol are surrounded by walkers, but Shiva sacrifices herself to save them. The trio returns to the Kingdom, where Ezekiel's confidence in himself as a leader has diminished."
            },
            {
                ep: 104,
                season: 8,
                season_ep: 5,
                title: "The Big Scary U",
                director: "Michael E. Satrazemis",
                air_date: "November 19, 2017",
                us_viewers: "7.85 millions",
                video: 'https://www.youtube.com/embed/-BoA63MrWDA',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/3b/805.jpg/revision/latest/scale-to-width-down/350?cb=20171120053908",
                plot: "After confessing their sins to each other, Gabriel and Negan manage to escape from the trailer. Simon and the other lieutenants grow suspicious of each other, knowing that Rick’s forces must have inside information. The workers in the Sanctuary become increasingly frustrated with their living conditions, and a riot nearly ensues, until Negan returns and restores order. Gabriel is locked in a cell, where Eugene discovers him sick and suffering. Meanwhile, Rick and Daryl argue over how to take out the Saviors, leading Daryl to abandon Rick."
            },
            {
                ep: 105,
                season: 8,
                season_ep: 6,
                title: "The King, the Widow, and Rick ",
                director: "John Polson",
                air_date: "November 26, 2017",
                us_viewers: "8.28 millions",
                video: 'https://www.youtube.com/embed/DPmuk3tKUsg',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/6a/806.jpg/revision/latest/scale-to-width-down/350?cb=20171127062245",
                plot: "Rick visits Jadis in hopes of convincing her to turn against Negan; Jadis refuses, and locks Rick in a shipping container. Carl encounters Siddiq in the woods and recruits him to Alexandria. Daryl and Tara plot to deviate from Rick’s plans by destroying the Sanctuary. Ezekiel isolates himself at the Kingdom, where Carol tries to encourage him to be the leader his people need. Maggie has the group of captured Saviors placed in a holding area and forces Gregory to join them as punishment for betraying Hilltop."
            },
            {
                ep: 106,
                season: 8,
                season_ep: 7,
                title: "Time for After",
                director: "Lary Teng",
                air_date: "December 3, 2017",
                us_viewers: "7.47 millions",
                video: 'https://www.youtube.com/embed/QGuP2ca3tL8',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/60/807.jpg/revision/latest/scale-to-width-down/350?cb=20171204045943",
                plot: "After learning of Dwight's association with Rick's group, Eugene affirms his loyalty to Negan and outlines a plan to get rid of the walkers surrounding the Sanctuary. With help from Morgan and Tara, Daryl drives a truck through the Sanctuary’s walls, flooding its interior with walkers, killing many Saviors. Rick finally convinces Jadis and the Scavengers to align with him, and they plan to force the Saviors to surrender. However, when they arrive at the Sanctuary, Rick is horrified to see the breached walls and no sign of the walker herd."
            },
            {
                ep: 107,
                season: 8,
                season_ep: 8,
                title: "How It's gotta Be",
                director: "Michael E. Satrazemis",
                air_date: "December 10,, 2017",
                us_viewers: "7.89 millions",
                video: 'https://www.youtube.com/embed/uRwyL4xE0YU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/21/808.jpg/revision/latest/scale-to-width-down/350?cb=20171211055727",
                plot: "Eugene's plan allows the Saviors to escape the Sanctuary, and separately, the Saviors waylay the Alexandria, Hilltop, and Kingdom forces. The Scavengers abandon Rick, after which he returns to Alexandria. Aaron and Enid are ambushed by Oceanside soldiers, leading Enid to kill Natania. Ezekiel ensures that the Kingdom residents are able to escape before locking himself in the community with the Saviors. Eugene aids Gabriel and Doctor Carson in escaping the Sanctuary in order to ease his conscience. Negan attacks Alexandria, but Carl devises a plan to allow the Alexandria residents to escape into the sewers. Carl reveals he was bitten by a walker while escorting Siddiq to Alexandria."
            },
            {
                ep: 108,
                season: 8,
                season_ep: 9,
                title: "Horror",
                director: "Greg Nicotero",
                air_date: "February 25, 2018",
                us_viewers: "8.28 millions",
                video: 'https://www.youtube.com/embed/L5W5fmFf0aQ',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/4e/809-0.jpg/revision/latest/scale-to-width-down/350?cb=20180226074553",
                plot: "Realizing his time alive is limited, Carl writes several letters to his loved ones. After the Saviors leave Alexandria, the survivors make for the Hilltop while Rick and Michonne stay behind to say their final goodbyes to a dying Carl, who pleads with Rick to build a better future alongside the Saviors. Morgan and Carol launch a rescue mission for Ezekiel and successfully retake the Kingdom from the invading Saviors; their lieutenant, Gavin, is killed by Benjamin's vengeful younger brother, Henry."
            },
            {
                ep: 109,
                season: 8,
                season_ep: 10,
                title: "The Lost and the Plunderers",
                director: "David Boyd",
                air_date: "March 4, 2018",
                us_viewers: "6.82 millions",
                video: 'https://www.youtube.com/embed/hYVKsDjuq_U',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/91/810.jpg/revision/latest/scale-to-width-down/350?cb=20180305064217",
                plot: "Aaron and Enid try to convince Oceanside to join the fight against the Saviors, but they refuse; Enid returns to Hilltop while Aaron opts to stay at Oceanside until he can convince them to join. Upon learning of the Scavenger’s siding with Rick, Negan orders Simon to kill only one of Jadis’ people. Rick and Michonne travel to the junkyard to try to regain help from the Scavengers, but they are too late; Simon had ordered the Saviors to slaughter the entire group; Jadis, who managed to escape lures her reanimated comrades into a waste shredder to protect herself."
            },
            {
                ep: 110,
                season: 8,
                season_ep: 11,
                title: "Dead or Alive or",
                director: " Michael E. Satrazemis",
                air_date: "March 11, 2018",
                us_viewers: "6.60 millions",
                video: 'https://www.youtube.com/embed/ppZEtmvy3Qo',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/e9/811_Alexandrians_in_the_woods.jpg/revision/latest/scale-to-width-down/350?cb=20180306041749",
                plot: "The Saviors hunt the surviving Alexandrians as they make their way to the Hilltop; Dwight affirms his loyalty to Rick's group as he distracts the Saviors and helps lead the group to safety. Eugene leads a crew of Saviors in crafting bullets at a new outpost while Negan plans to taint the Saviors' weapons with walker blood, in order to make the others 'turn' instead of killing them. Doctor Carson tries to help a feverish and nearly blind Gabriel to safety, but the Saviors eventually catch up, killing Carson and recapturing Gabriel."
            },
            {
                ep: 111,
                season: 8,
                season_ep: 12,
                title: "The Key",
                director: "Greg Nicotero",
                air_date: "March 18, 2018",
                us_viewers: "6.66 millions",
                video: 'https://www.youtube.com/embed/-eSlCIeUQQw',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/53/812.jpg/revision/latest/scale-to-width-down/350?cb=20180319045437",
                plot: "Maggie, Enid, Michonne and Rosita encounter a seemingly benevolent woman named Georgie, who gives them food and documents in exchange for phonograph records; Georgie claims the documents to be 'a key to the future'. Negan leads the Saviors towards the Hilltop to send a warning via their newly tainted weapons; Rick pursues the Saviors and chases Negan into a building. Negan eventually escapes, only to be captured at gunpoint by Jadis. Unable to find Negan, Simon instructs the Saviors to attack the Hilltop and 'expunge' the community for good."
            },
            {
                ep: 112,
                season: 8,
                season_ep: 13,
                title: "Do Not Send Us Astray",
                director: "Jeffrey F. January",
                air_date: "March 25, 2018",
                us_viewers: "6.77 millions",
                video: 'https://www.youtube.com/embed/LaYRaqGllMc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/29/813.jpg/revision/latest/scale-to-width-down/350?cb=20180326050348",
                plot: "The Saviors attack the Hilltop with their tainted weapons, leading to a battle in which both sides suffer heavy casualties. Tara is non-fatally shot by Dwight in an effort to prevent Simon from killing her. Overnight, the injured die from their tainted wounds and attack the sleeping survivors after reanimating. Henry tries to take revenge for the murder of his brother, leading to the breakout of the Savior prisoners and the disappearance of Henry. Having seen the Saviors' callous attitude for themselves, Alden and several other Saviors choose to remain at the Hilltop rather than return to the Saviors."
            },
            {
                ep: 113,
                season: 8,
                season_ep: 14,
                title: "Still Gotta Mean Something",
                director: "Michael E. Satrazemis",
                air_date: "April 1, 2017",
                us_viewers: "6.30 millions",
                video: 'https://www.youtube.com/embed/Y4aef3dXiKU',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/dd/TWD_814_Apr18_D1_big.jpg/revision/latest/scale-to-width-down/350?cb=20180402062315",
                plot: "Carol and Morgan search for Henry while Rick hunts the escaped Savior prisoners; Morgan abandons Carol and joins Rick, and together, they find and kill the prisoners. Jadis tortures Negan until he informs her that he had nothing to do with Simon massacring her people; a helicopter flies nearby, but Jadis fails to catch its attention. Daryl and Rosita plot to stop Eugene from crafting ammunition for the Saviors. Carol finds Henry alive in the woods and they return to Hilltop. Upon Rick and Morgan's return, Michonne encourages Rick to read Carl's letter to him."
            },
            {
                ep: 114,
                season: 8,
                season_ep: 15,
                title: "Worth",
                director: "Micael Slovis",
                air_date: "April 8, 2018",
                us_viewers: "6.67 millions",
                video: 'https://www.youtube.com/embed/1artEa8gWP4',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/13/815.jpg/revision/latest/scale-to-width-down/350?cb=20180409051659",
                plot: "Negan returns to the Sanctuary and regains control of the Saviors. Dwight secretly prepares notes to Rick about Negan's plans, and later sends Gregory to deliver the notes. Daryl and Rosita capture Eugene from his outpost, but he manages to escape and continues pushing his workers to craft bullets. Dwight lures Simon into a meeting where Negan accosts him for going against his orders with the Scavengers, and kills him in a fist fight. Negan then reveals that Laura informed him of Dwight's siding with Rick, and that his planning was a ruse upon knowing of Dwight's disloyalty. Negan is contacted by Michonne - who reads Carl's letter to him at the request of making peace; Negan remains intent on killing Rick and his allies once and for all."
            },
            {
                ep: 115,
                season: 8,
                season_ep: 16,
                title: "Wrath",
                director: "Greg Nicotero",
                air_date: "April 15, 2018",
                us_viewers: "7.92 millions",
                video: 'https://www.youtube.com/embed/RjWVwWy46gc',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/a/a4/TWD_816.jpg/revision/latest/scale-to-width-down/350?cb=20180416032919",
                plot: "Rick's group follows the false plans given to them by Gregory, leading them into a trap. As the Saviors fire, their weapons backfire due to their ammo being sabotaged by Eugene. The surviving Saviors surrender, while Rick chases down Negan; the two brawl and Rick manages to slice Negan's neck, but immediately has Siddiq tend to the wound, knowing that Carl wanted Negan to survive. Meanwhile, an attack at the Hilltop is stopped with help from Aaron and the Oceanside soldiers. The survivors regroup and rebuild their communities, but Rick's decision to spare Negan angers Maggie and she vows to take action against Rick in the future."
            },
        ]
    },
    {
        num: "9 (2018–19)",
        photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/06/The-walking-dead-season-9-key-art-rick-lincoln-michonne-gurira-full-size.jpg/revision/latest/scale-to-width-down/337?cb=20180906023903",
        description: "Rick, Maggie, and Ezekiel rally their communities into war against Negan and the Saviors. Losses are heavy on both sides: many of the Kingdom soldiers are killed, Alexandria falls to a Savior attack, and Carl is bitten by a walker. Before euthanizing himself, Carl convinces Rick to end the war and restart society anew. Negan attempts to wipe out Rick and his allies, but Eugene disrupts his plan and Negan is wounded and captured by Rick. Against Maggie's wishes, Negan is spared and imprisoned, ending the war.",
        main_cast: [
            {
                character: "Rick Grimes",
                actor: "Andrew Lincoln",
                description: "Rick Grimes, the series' protagonist, a former sheriff and the leader of Alexandria, who is leading a new alliance to fight Negan and the Saviors."
            },
            {
                character: "Michonne",
                actor: "Danai Gurira",
                description: "Michonne, Rick's katana-wielding girlfriend, who acts as a mother figure to Carl and Judith."
            },
            {
                character: "Daryl Dixon",
                actor: "Norman Reedus",
                description: "Daryl Dixon, Rick's right-hand man, the group's primary hunter and a recruiter for Alexandria."
            },
            {
                character: "Carol Peletier",
                actor: "Melissa McBride",
                description: "Carol Peletier, a fierce survivor who is spurred into fighting the Saviors as revenge for the deaths of her friends."
            },
            {
                character: "Maggie Greene/Rhee",
                actor: "Lauren Cohan",
                description: "Maggie Rhee, the pregnant widow of Glenn and a leading figure of the Hilltop."
            },
            {
                character: "Eugine Porter",
                actor: "Josh McDermitt",
                description: "Eugine Porter, a timorous former member of the group whose resourcefulness leads Negan to take him under his wing."
            },
            {
                character: "Rosita Espinosa",
                actor: "Christian Serratos",
                description: "Rosita Espinosa, an impulsive member of the group, who is motivated to avenge her ex-boyfriend Spencer and Abraham's death."
            },
            {
                character: "Tara Chambler",
                actor: "Alanna Masterson",
                description: "Tara Chambler, a caring, witty member of the group and supply runner for Alexandria who serves as a liaison with Oceanside."
            },
            {
                character: "Gabriel Stokes",
                actor: "Seth Gilliam",
                description: "Gabriel Stokes, a priest who has become hardened from his experiences with Rick's group."
            },
            {
                character: "Aaron",
                actor: "Ross Marquand",
                description: "Aaron, an Alexandrian recruiter who brought Rick's group to Alexandria and is currently in the fight against the Saviors."
            },
            {
                character: "Negan",
                actor: "Jeffrey Dean Morgan",
                description: "Negan, the leader of the Saviors who serves as the season's primary antagonist."
            },
            {
                character: "Paul 'Jesus' Rovia",
                actor: "Tom Payne",
                description: "Paul 'Jesus' Rovia, a scout for the Hilltop."
            },
            {
                character: "Enid",
                actor: "Katelyn Nacon",
                description: "Enid, a former member of Alexandria who moved to Hilltop to be with Maggie, and has formed a relationship with Carl."
            },
            {
                character: "Siddiq",
                actor: "Avi Nash ",
                description: "Siddiq, a mysterious vagabond survivor who befriends Carl."
            },
            {
                character: "Alden",
                actor: "Callan McAuliffe",
                description: "Alden, alse refered to as Al, was a member of the Saviors before defecting to the Militia following the attack on the Hilltop. Following the defeat of the Saviors, Alden chooses to remain at the Hilltop to help build up the community"
            },
        ],
        supporting_cast: [
            {
                character: "Ezekiel",
                actor: "Khary Payton",
                description: "Ezekiel, the charismatic leader of the Kingdom who allies with Rick against the Saviors."
            },
            {
                character: "Gregory",
                actor: "Xander Berkeley",
                description: "Gregory, the selfish and hypocritical leader of the Hilltop whose influence diminished with Maggie's prominence."
            },
            {
                character: "Jadis / Anne",
                actor: "Pollyanna McInthosh",
                description: "Jadis is a former leader of the Scavengers."
            },
            {
                character: "Eric Raleigh",
                actor: "Jordan Woods-Robinson",
                description: "Eric Raleigh, Aaron's boyfriend and his former recruiting partner."
            },
            {
                character: "Jerry",
                actor: "Cooper Andrews",
                description: "Jerry, Ezekiel's wise-cracking personal bodyguard."
            },
            {
                character: "Henry",
                actor: "Macsen Lintz",
                description: "Henry, a resident of the Kingdom and younger brother of Benjamin."
            },
            {
                character: "Cyndie",
                actor: "Sydney Park ",
                description: "Natalia's granddaughter."
            },
            {
                character: "Rachel",
                actor: "Mimi Kirkland ",
                description: "Rachel, Natalia's granddaughter and Cyndie's younger sister."
            },
            {
                character: "Rachel",
                actor: "Mimi Kirkland ",
                description: "Rachel, Natalia's granddaughter and Cyndie's younger sister."
            },
        ],
        episodes: [
            {
                ep: 116,
                season: 9,
                season_ep: 1,
                title: "A New Beginning",
                director: "Greg Nicotero",
                air_date: "October 7, 2018",
                us_viewers: "6.1 millions",
                video: 'https://www.youtube.com/embed/BwXHIkoVoWs',
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/cc/New_Beginning_photo.jpg/revision/latest/scale-to-width-down/350?cb=20181008033443",
                plot: "A year and a half has passed since the end of the War. In a rebuilt and thriving Alexandria, Rick, now with shorter and grayer hair, happily watches Michonne paint with Judith. They go outside the walls to see a flock of birds in the field.\n\t\tAt the Sanctuary, the walker-filled yard has been replaced with crops. Rosita helps Eugene with an experiment while Laura reports something to Daryl, who's now in charge. He goes to the yard and notices Arat and Justin trying to use a walker as a scarecrow, like they used to do, under the pretense to scare off the crows, but Daryl puts it down.\n\t\tOn the road, Tara is scouting when Eugene radios her, informing her that Daryl will be meeting the rest of the group so they can go to Washington D.C. to search for farming materials.\n\t\tElsewhere, Jesus and Aaron kill some walkers. Aaron asks Jesus if he can teach him some of his skills, to which he agrees to teach him in a class at the Hilltop.\n\t\tA while later, Daryl rides off to meet Rick, Michonne, Carol, Maggie and the others in downtown Washington D.C.\n\t\tRick and the group break into the Smithsonian to search for a covered wagon and farming equipment. As they walk over a fragile glass floor, they notice a group of walkers under it. Suddenly, a walker drops from a balcony onto it, cracking the pane, before Daryl puts it down.\n\t\tRick tells everyone to be safe and the group separates.\n\t\tIn the basement, Siddiq gets attacked by a walker whose head is full of spiders. He barely manages to kill it and admits to Rick he is more scared of the spiders, which Enid laughs at.\n\t\tIn a hallway, Gabriel drives a machete into a walker's head and leaves it hanging on a human evolution display. He and Anne smile at the irony of this.\n\t\tBy the stairs, Cyndie sees an old canoe and remembers an experience with her brother. Daryl relates to her and the two of them lift the canoe.\n\t\tBack in the basement, Rick's group finds packages of seeds and beans. Rick thanks Anne for the lead, while she tells Gabriel that she knew of this because she once brought her class back when she was teaching.\n\t\tWhile returning to the stairs, Maggie tells Michonne and Carol that Gregory called for an election at the Hilltop and lost, making Maggie the rightful leader. Michonne stops and looks at a display of politics and how to unite different colonies.\n\t\tShortly after, the whole group reunites and gingerly uses ropes to drag an old covered wagon down the stairs and over the glass floor. The glass finally gives way and Ezekiel falls through it, dangling by the rope. Before the walkers can bite him, Daryl shoots at one and Rick and the others finally pull him to safety. Carol joyfully kisses him to celebrate.\n\t\tThe group leaves D.C. and prepare to head back to their own communities.\n\t\tOn the road, Alden talks to Ken and Marco about blacksmithing at the Hilltop. In the back, Ezekiel proposes to Carol. She tells him to put the ring away and reminds him she doesn't want to be asked yet, especially on a horse. Ezekiel smiles and tells her he still loves her.\n\t\tRosita and Daryl catch up with everyone to inform them that the main bridge is out due to a storm. Rick tells Tara, Gabriel, Aaron and Anne to head back to Alexandria and the rest will go to an alternate route and spend the night at the Sanctuary.\n\t\tIn the woods, the wagon gets caught in the mud as walkers appear from the bushes. It finally budges and everyone rushes to gather the supplies until the walkers overwhelm them and they're forced to leave. Ken runs back to free his horses but is bitten in the arm by a walker and then kicked in the ribs by the horse.\n\t\tSiddiq and Enid try to save him but Ken succumbs to blood loss and dies from his injuries. A saddened Maggie sobs by his side before putting him down.\n\t\tAt night, in Hilltop, Maggie breaks the news of Ken's death to his parents, Tammy and Earl. An emotional Tammy scolds Maggie for getting her son killed, reminding her that she voted for her in the election. Earl tries to calm her down but Tammy doesn't listen and criticizes Maggie's decision to supply the Saviors. A shocked Maggie offers to help with the funeral but Tammy declines and denies her from being present.\n\t\tLater, the Hilltop gathers for Ken's funeral. Alden sings as Gregory gives a eulogy. Maggie holds her son, Hershel, and watches from the balcony.\n\t\tAt the Sanctuary, Rick and the group arrive to deliver supplies. Michonne points out graffiti that proclaims, 'We are still Negan', and Daryl demands Justin to clean it up. Rick promises to the Saviors that he’ll continue to support them so they can get back on their feet. Everyone applauds him and treat him like a celebrity.\n\t\tDaryl pulls Rick aside to tell him that he no longer wants to lead the place because he doesn't belong there and since it's factory, it can't produce crops. He suggests he return to Hilltop to check on Maggie and Hershel, but Rick argues he should return to Alexandria. 'Things have changed,' Rick says, but Daryl claims it's because Rick changed them, before going out.\n\t\tOutside, Carol follows Daryl and offers to take over the Sanctuary for him. She tells him about Zeke's proposal and says she wants to take her time. Daryl's surprised and asks if he should stay with her. She declines and rests her head on his shoulder.\n\t\tIn their trailer, Tammy mourns her son while Gregory gets Earl drunk and suggests Maggie doesn’t have to be the leader anymore.\n\t\tIn the Sanctuary, Rick and Michonne settle into bed and Michonne asks if they did the right thing by letting Negan live. However, Rick stands by his choice. She then proposes that they create a charter between the communities: laying out guidelines and punishment. Rick agrees and tells her how lucky he is to have found her. They kiss and make love.\n\t\tBack at the Hilltop, Maggie takes Hershel out for a stroll and runs into Gregory, who tells her someone may have defaced Glenn's grave. Upset, she rushes towards the grave and is attacked by a hooded stranger, who also knocks over Hershel’s stroller. Enid intervenes but gets pushed to the ground hard and is knocked out. Alden and Cyndie grab the assailant and Maggie rips off his hood to reveal a drunken Earl.\n\t\tMaggie rushes over to Gregory's place and accuses him of trying to get her killed. He angrily reminds her that he built this place and tries to stab her with a knife, but she overpowers him and holds it to his neck.\n\t\tThe next day, Carol tells Ezekiel she's staying at Sanctuary and instructs Jerry to take care of him as they head off.\n\t\tDaryl, Michonne and Rick arrive at the Hilltop to find the workers building gallows. Later, Rick asks Maggie to visit Alexandria but she says she can't because Negan's there. He asks for her help in fixing the bridge, which includes providing supplies to the Sanctuary. She says she'll only agree if the Saviors agree to provide the labor and fuel. Rick says he can’t and he's obliged to help, but Maggie disagrees and reminds her that he never ended up following her as he promised, but now he should.\n\t\tIn the night, the residents gather around the gallows as Maggie explains to her people that the punishment fits the crime. She looks on at Gregory, who has a noose around his neck and is sitting on a horse. Gregory pleads for someone to stop this, but no one moves. A couple of kids show up and Michonne yells for Maggie to stop but it's too late as Daryl smacks the horse and it rides off, leaving Gregory to hang to death to everyone's shock.\n\t\tMaggie tells her people that she wants this to be the last time they do something like this. A shocked Rick and Michonne look on as Maggie then orders Daryl to cut off the noose."
            },
            {
                ep: 117,
                season: 9,
                season_ep: 2,
                title: "The Bridge",
                director: "Daisy Mayer",
                air_date: "October 14, 2018",
                us_viewers: "",
                video: '',
                photo: "",
                plot: ""
            },
            {
                ep: 118,
                season: 9,
                season_ep: 3,
                title: "Warning Signs",
                director: "Dan Liu",
                air_date: "October 21, 2018",
                us_viewers: "",
                video: '',
                photo: "",
                plot: ""
            },
            {
                ep: 119,
                season: 9,
                season_ep: 4,
                title: "The Obligated",
                director: "Rosemary Rodriguez",
                air_date: "October 28, 2018",
                us_viewers: "",
                video: '',
                photo: "",
                plot: ""
            },
            {
                ep: 120,
                season: 9,
                season_ep: 5,
                title: "What Comes After",
                director: "Greg Nicotero",
                air_date: "November 4, 2018",
                us_viewers: "",
                video: '',
                photo: "",
                plot: ""
            },
            {
                ep: 121,
                season: 9,
                season_ep: 6,
                title: "Who Are You Now",
                director: "Daisy Mayer",
                air_date: "November 11, 2018",
                us_viewers: "",
                video: '',
                photo: "",
                plot: ""
            },
            {
                ep: 122,
                season: 9,
                season_ep: 7,
                title: "Stradivarius",
                director: "Michael Cudlitz",
                air_date: "November 18, 2018",
                us_viewers: "",
                video: '',
                photo: "",
                plot: ""
            },
            {
                ep: 123,
                season: 9,
                season_ep: 8,
                title: "Evolution",
                director: "Michael E. Satrazemis",
                air_date: "November 25, 2018",
                us_viewers: "",
                video: '',
                photo: "",
                plot: ""
            },
        ]
    },
];

module.exports = { seasons };
