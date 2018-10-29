const characters = [
    {
        main_characters: [
            {
                id: 1,
                name: "Rick Grimes",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/73/RickS9.jpg/revision/latest/scale-to-width-down/640?cb=20180907040437",
                actor: 'Andrew Lincoln',
                gender: 'Male',
                hair: 'Dark brown (Graying)',
                age: 'Mid 40s',
                occupation: ['King County Sheriff"s Deputy (Pre - Apocalypse)', 'Leader of the Atlanta Survivor Group (Post - Apocalypse)', 'Former Constable for the Alexandria Safe-Zone (Post - Apocalypse)', 'Leader of the Alexandria Safe-Zone (Post - Apocalypse', 'Co-Leader of the Militia (Post - Apocalypse)'],
                family: ['Lori Grimes - former wife', 'Carl Grimes - son (deceased)', 'Judith Grimes - adopted daughter', 'Michonne - girlfriend', 'Evie - sister or sister-in-law'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'What Comes After',
                status: {
                    alive: {
                        status: "Alive",
                        lifespan: "'Days Gone Bye' to 'What Comes After'"
                    },
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: "Rick Grimes, is a former sheriff's deputy from a small Georgia town. He is often described as an everyman — smart, calm, just, and a good friend, husband and father, but with his own set of flaws. Rick is a natural leader even when he might doubt himself, but these doubts contribute to the ups and downs his character experiences throughout the series. His overwhelming need to do the right thing and protect those who can't protect themselves may pull him away from his family, causing tension within his marriage with Lori and his relationship with his son, Carl.\nActing as a sheriff's deputy, Rick was shot in the line of duty shortly before the events of the apocalypse began. He finds himself waking up from a coma to a deserted hospital, unbelievable carnage, and his family home deserted. He eventually makes his way to Atlanta and then to the survivors' camp where his family is taking shelter, and quickly becomes the leader of those survivors. In his quest to lead them to safety, his son Carl is shot in a hunting accident, which brings the group to the Greene farm. While he is still optimistic about the general goodwill of other survivors when the group arrives at the farm, he is shaken by the circumstances which force them to leave, becoming a much darker, warier version of himself. Focused on protecting his family, he leads the group to the prison and clears it for occupation. While there are threats and incidents at the prison, including the death of Rick's wife Lori and the delusions Rick's grief causes, Rick and his group transform it into a relatively safe and productive community until they are forced out permanently by the Governor and his forces. Rick subsequently travels with Carl, not knowing if the other survivors, including his daughter Judith, are alive or dead. After almost being killed for meat by the cannibalistic inhabitants of Terminus, Rick's group is reunited and begins to travel toward Washington, D.C.\nRick and his group are on the verge of starvation when they are invited to join the Alexandria Safe Zone, and Rick becomes the leader there following the death of Deanna Monroe. Just as he has begun to regain hope for a future for his friends and children, he and the Alexandrians are thrown into a lethal conflict with the Saviors. After losing two of his closest allies, Rick is at his lowest, but eventually accepts his responsibility to work with his new allies and make a plan to bring down the Saviors. During the war against the saviors, Rick's emotions return to destabilize after the loss of his legitimate son Carl Grimes."
            },
            {
                id: 2,
                name: "Shane Walsh",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/54/Shane_9.png/revision/latest?cb=20101209134016&format=original",
                actor: 'Jon Bernthal',
                gender: 'Male',
                hair: 'Black',
                age: 'Mid to Late 30s',
                occupation: ['King County Sheriff"s Deputy (Pre - Apocalypse)', 'Former leader of the Atlanta Group (Post - Apocalypse)', 'Head of the Gun Training (Post - Apocalypse)'],
                family: ['Judith Grimes - daughter', 'Jean - grandmother', 'Lori Grimes - ex-girlfriend (deceased)', 'Patty Taylor - ex-girlfriend (deceased)'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'season 9',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Better Angels',
                        cause_of_death: 'Stabbed in the chest by Rick Grimes.(alive)\nShot in the head by Carl Grimes.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/8/84/Episode-12-rick-shane-stab9234698562.jpg/revision/latest/scale-to-width-down/350?cb=20120320013228', 'https://vignette.wikia.nocookie.net/walkingdead/images/a/a6/Shane_death.jpg/revision/latest/scale-to-width-down/350?cb=20151124172442']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Shane Walsh is a former sheriff's deputy from a small Georgia town. He was Rick's partner in the sheriff's department and his best friend since high school. Until Rick's arrival, Shane led the group of Atlanta survivors. Shane harbors feelings for Lori, and after the start of the apocalypse, when Lori believes Rick is dead, Shane starts a sexual relationship with her. When Rick finds them, Shane relinquishes the leadership position to Rick, while trying to hide his resentment towards Rick and his relationship with Lori. During season two, Shane gradually becomes more unhinged and shows bouts of irrational violence and bloodlust after allowing another survivor to die in an act of self-preservation. Shane eventually lures Rick away from the group to kill him, but Rick kills him first. Shane's reanimation after being stabbed was the first concrete indication to the survivors that it didn't matter how someone died: they would still come back as a walker.\nWhile Rick claims Lori's baby as his daughter, it is strongly implied that Judith is Shane's biological child. This is further supported when Rick specifically tells Michonne that he knows Judith isn't his, but still vows to protect her and treat her as if she was."
            },
            {
                id: 3,
                name: "Lori Grimes",
                photo: "http://www.femalefirst.co.uk/image-library/square/500/s/sarah-wayne-callies-interview-image.jpg",
                actor: 'Sarah Wayne Callies',
                gender: 'female',
                hair: 'brown',
                age: 'Early to Mid 30s',
                occupation: ['Housewife (Pre - Apocalypse)'],
                family: ['Rick Grimes - former husband', 'Carl Grimes - son (deceased)', 'Judith Grimes - daughter', 'Shane Walsh - ex-boyfriend (deceased)', 'Evie - sister or sister-in-law'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'The Day Will Come When You Won"t be',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Killer Within',
                        cause_of_death: 'Died from blood loss during a caesarean section by Maggie Rhee in order to deliver her baby, Judith.(alive)\nShot in the head by Carl Grimes.(before reanimation, off-screen)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/1/11/Lori_C-section_Death.png/revision/latest/scale-to-width-down/350?cb=20121105072010', 'https://vignette.wikia.nocookie.net/walkingdead/images/2/2c/Lori_after_c-section.png/revision/latest/scale-to-width-down/350?cb=20121105075642']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Lori Grimes is Rick's wife, and Carl and Judith's mother. Believing Rick to be dead, she begins a relationship with Shane, but is loyal to Rick once he returns, and she pushes Shane away from her and Carl, of whom she is fiercely protective. In the second season, she discovers she is pregnant, but is unsure who the father is. She attempts to comfort Shane so he will feel accepted in their group, but she is cautious about his reckless actions, and ultimately warns Rick that Shane is dangerous. At the same time, she is disturbed by her husband's gradual change in this more savage environment, and is shocked after learning he killed Shane. From their escape from the farm till their endeavor to take up residence at the prison, Lori becomes increasingly estranged from Rick and Carl, which she blames on herself. She becomes worried about her baby's survival, and when she goes into labor following a walker attack, Lori convinces Maggie to give her a C-section, despite the fact that it will prove fatal for her. Lori dies giving birth, and Carl is forced to shoot her to prevent reanimation.\nLori is later seen as reoccurring illusions for Rick during his group's stay at the prison."
            },
            {
                id: 4,
                name: "Carl Grimes",
                photo: "https://i1.wp.com/www.projectcasting.com/wp-content/uploads/2013/12/Carl-Atomic-Paw.jpg?resize=500%2C500",
                actor: 'Chandler Riggs',
                gender: 'male',
                hair: 'brown',
                age: '12 (season 1), 13(season 3), 14(season 4)',
                occupation: ['Middle school student (Pre - Apocalypse)', 'Member of the Militia (Post - Apocalypse'],
                family: ['Rick Grimes - father', 'Lori Grimes - mother', 'Michonne - stepmother', 'Judith Grimes - half-sister', 'Evie - aunt'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'Wrath (flashback)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Honor',
                        cause_of_death: 'Bitten on the rib by a walker.(caused)\nSelf-infliced gunshot to the head to prevent reanimation.(suicide, before reanimation, off-screen)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c4/Amc2.png/revision/latest/scale-to-width-down/350?cb=20180226114908', 'https://vignette.wikia.nocookie.net/walkingdead/images/5/58/Carl%27sDeath%283%29.png/revision/latest/scale-to-width-down/350?cb=20180106222814', 'https://vignette.wikia.nocookie.net/walkingdead/images/9/9f/Amc1.png/revision/latest/scale-to-width-down/350?cb=20180226062708']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Carl Grimes is the son of Rick and Lori, and Judith's older brother. Confronted with the harsh realities of his new world, he quickly learns to defend himself and even rescues Rick from a reanimated Shane. In the prison, when his mother dies during childbirth, he shoots her in the head to prevent her from turning. The ease with which he shoots a member of The Governor's militia troubles Rick, leading him to give up his authority over the group and teaching Carl to farm, renouncing violence. When The Governor attacks for the final time, he and Carl are separated from the rest of the group. With Rick severely injured and unconscious, Carl reveals his anger towards his father for failing to protect the group and his mother. He raids neighboring houses for supplies, but is nearly overcome by a walker. He returns to the house and reveals he still depends on his father, and can't bear to bring himself to shoot Rick if he does turn. Rick eventually recovers and they are reunited with Michonne, but are driven from the house by the Claimers. They later meet the Claimers again on the road, where one of the members nearly rapes Carl. After overcoming them with Daryl's help, they travel to Terminus and are captured. After the band of survivors reunites at Terminus, Carl devotes himself to caring for Judith. When he arrives at Alexandria, he is initially awkward with the other teenagers, but befriends Enid, a girl who was outside for a long time also, they spend time together in the woods running from walkers. During the attack of the zombies on Alexandria, Carl gets shot in his right eye by a stray bullet shot by Ron. Carl is saved by Denise, but loses his eye and faces a long recovery, during which he grows darker and more fierce. Negan calls him a future 'serial killer' in the season six finale, which could imply how seriously dangerous Carl may become. Carl, along with Glenn, Rosita, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Eugene and Aaron, are forced to kneel before Negan. In the season seven premiere, Negan begins to force Rick to cut Carl's arm off, but changes his mind once he sees Rick is broken. Carl later sneaks into the Sanctuary against his father's orders to try to kill Negan. While this proves unsuccessful, it does lead Negan to take an unlikely interest in Carl. Carl continues to work in and around Alexandria to try to defeat the Saviors, but begins to believe that Rick is wrong to want to completely destroy them, and wants to go back to welcoming other survivors and working together toward a better future. It is revealed in the season eight midseason finale that is trying to help a stranger named Siddiq and bring to Alexandria Safe-Zone, Carl has been bitten on the abdomen by a walker. He dies by shooting himself after.\nIn later episodes, it is revealed that Carl wrote letters to everyone he had connections to, including Negan. He asks for peace between the Alexandrians and the Saviors, which is quickly shut down by their respective leaders."
            },
            {
                id: 5,
                name: "Morgan Jones",
                photo: "https://thesupernaturalfoxsisters.files.wordpress.com/2015/03/rd-morgan-the-walking-dead-conquer.jpeg",
                actor: 'Lennia James',
                gender: 'male',
                hair: 'black',
                age: 'Mit to Late 40s',
                occupation: ['Former Soldier for the Kingdom (Post - Apocalypse)', 'Former member of the Militia (Post - Apocalypse)'],
                family: ['Jenny Jones - former wife (deceased)', 'Duane Jones - son (deceased)'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'Wrath',
                status: {
                    alive: {
                        status: "Alive",
                        lifespan: "'Days Gone Bye' to 'Wrath'"
                    },
                    dead: ""
                },
                ethnicity: 'African - American',
                description: "Morgan Jones is a survivor staying in Rick Grimes' hometown with his son, Duane. Initially, he suffers from the loss of his wife Jenny at the start of the apocalypse, unwilling to move on while her reanimated body roamed the town. He helps Rick recover after he wakes from his coma, and promises to contact him over radio as Rick continued towards Atlanta. Later, Morgan could not take action to prevent walker Jenny from biting Duane, and he becomes obsessed with clearing walkers from the town. Rick meets him again while scavenging for supplies, and asks him to join them, but Morgan refuses. After he accidentally burned down his home in a fit, Morgan takes to following Rick and eventually encounters a former prison psychologist named Eastman, who helps Morgan find inner peace through the use of aikido. This not only gives Morgan a new mode of self-defense, but also imparts a new dedication to respecting the value of human life. Morgan follows Rick's group from Terminus to Alexandria, where he finds their violent ways, particularly of Carol's, distressing and tries to help show them a better way to deal with the humans that want to harm them. After being asked to locate a missing Carol and becoming a part of the Kingdom, Morgan finally comes to the realization that you have to kill sometimes, and kills Richard in a rage. Morgan helps in the fight against the Saviors and Scavengers, but the violence and the familiar feeling of instability become too much for him, and he once again leaves to be on his own and leads him to Fear The Walking Dead."
            },
            {
                id: 6,
                name: "Dale Horvath",
                photo: "http://images5.fanpop.com/image/photos/29500000/Judge-Jury-Executioner-2x11-the-walking-dead-29592366-500-500.jpg",
                actor: 'Jeffrey DeMunn',
                gender: 'male',
                hair: 'white/grey',
                age: '64',
                occupation: ['Pensioner (Pre - Apocalypse)'],
                family: ['Irma Horvath - wife (deceased)', 'unborn child (deceased)'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'Judge, Jury, Executioner',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Judge, Jury, Executioner',
                        cause_of_death: 'Disemboweled by a walker on Hershal Greene"s farm.(caused)\nShot in the head by Daryl Dixon.(out of mercy)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/d/df/Episode-11-dale-walker.jpg/revision/latest/scale-to-width-down/350?cb=20120305153133', 'https://vignette.wikia.nocookie.net/walkingdead/images/8/8d/Episode-11-dale-guts.jpg/revision/latest/scale-to-width-down/350?cb=20120305153115', 'https://vignette.wikia.nocookie.net/walkingdead/images/9/92/Daledeath.jpg/revision/latest/scale-to-width-down/350?cb=20120320015924']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Dale Horvath is an older man and former car salesman. His age, calm affect, worldly experience, and RV provide the nucleus around which the small community of survivors has formed. He is wise, and the respected elder of the group. He is also rather feisty and not afraid to speak his mind or call others out for mistakes in judgment. Dale manages to talk Andrea out of a suicide attempt by putting himself at risk, as well. Dale becomes wary of Shane, after witnessing that Shane contemplated assassinating Rick beforehand as well as guessing that Shane killed Otis while retrieving medical supplies for Carl. Dale becomes upset at the group when they decide to kill Randall to avoid any risks he might have posed and argues for sparing his life, leading to the execution being postponed. Dale is killed by a walker, who was accidentally lured by Carl earlier that day. Dale's death causes the group to reevaluate their unity and allow Randall to live."
            },
            {
                id: 7,
                name: "Glenn Rhee",
                photo: "https://3.bp.blogspot.com/-CMbgR0H4MWk/V8Mat66kEUI/AAAAAAAAAGc/OCHqJrSzUbwS8Mh6qupTPOs8cRY8kClkgCLcB/s1600/Glenn%2BRhee.jpg",
                actor: 'Steven Yeun',
                gender: 'male',
                hair: 'black',
                age: 'Mid 20s',
                occupation: ['Pizza delivery boy (Pre - Apocalypse)', 'Supply runner for the Atlanta Survivor Group (Post - Apocalypse)', 'Former prison council member (Post - Apocalypse)', 'supply runner for the Alexandria Safe-Zone(Post - Apocalypse'],
                family: ['Maggie Rhee - former wife', 'Hershal Greene - father-in-law', 'Beth Greene - sister-in-law', 'Shawn Greene - step-brother-in-law', 'Josephine Greene - mother-in-law', 'Hershal Rhee - son'],
                first_appearance: 'Days Gone Bye (voice only), Guts',
                last_appearance: 'The Cell (photography/corpse)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'The Day Will Come When You Won"T Be',
                        cause_of_death: 'Head smashed by Negan using his baseball bat, Lucille.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/e/ec/GlennDeaths.jpg/revision/latest/scale-to-width-down/297?cb=20171031140751']
                    }
                },
                ethnicity: 'Korean - American',
                description: "Glenn Rhee is a former pizza delivery boy from Atlanta. He is keenly aware of the extreme danger of his missions on behalf of the group, but because of his loyalty to the group he is willing to take the risks. His knowledge of every shortcut in Atlanta proves extremely useful, and he is an excellent scavenger. Glenn thinks well on his feet and shows great compassion and humanity. He develops a passionate relationship with Maggie while living on the Greene farm and later marries her while they are living in the prison. He becomes more confident and displays more courage and ingenuity, as well as leadership qualities later. After being infected with the illness spreading in the prison, he recovers through Hershel and Bob's care. When The Governor attacks the prison, he is unable to find Maggie and goes on a search for her with Tara Chambler. The two encounter Abraham Ford, Eugene Porter and Rosita Espinosa, who plan to bring Eugene to Washington, D.C. to find a cure for the apocalypse. After reuniting with his wife, they journey on their mission to D.C., although Eugene eventually reveals he was a fraud hoping for protection. After his half-sister-in-law, Beth's death, he moves forward with plans to find a safe haven for the group and continues to comfort Maggie in her loss. Glenn continues to be the voice of reason after Beth's death, and moral support for the group. When they arrive at Alexandria, he is assigned to be one of the runners, and he and fellow runner Nicholas become rivals. After Nicholas causes the death of one of the other runners, their feud eventually culminates in Nicholas trying to shoot Glenn, and the two of them getting in a fight. Glenn is unable to kill Nicholas, and the two form a fragile peace. Glenn is seemingly killed when Nicholas commits suicide and the two fall into a horde of walkers, but he was able to use Nicholas's body as a shield and escape under a nearby dumpster. When he arrives back home, he learns that Maggie is expecting their first child. Glenn is part of the raid on the Savior outpost and is forced to kill his first living human, which he finds very difficult. When Maggie experiences complications in her pregnancy, Glenn is captured and, along with Rosita, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan as punishment for the raid. Negan's wrath lands on Abraham, and Daryl's reaction to Abraham's death causes Negan to additionally bludgeon Glenn to death. His remains are taken by Maggie and Sasha to the Hilltop, where he and Abraham are buried together."
            },
            {
                id: 8,
                name: "Andrea",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/3f/Andreaportrait.jpg/revision/latest?cb=20120914133856&format=original",
                actor: 'Laurie Holden',
                gender: 'female',
                hair: 'blonde',
                age: '36 (season 1), 37 (season 3)',
                occupation: ['Civil rights lawyer (Pre - Apocalypse)'],
                family: ['Amy - sister (deceased)', 'Phillip Blake - ex-boyfriend (deceased)'],
                first_appearance: 'Guts',
                last_appearance: 'Welcome to the Tombs',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Welcome to the Tombs',
                        cause_of_death: 'Bitten on the neck by a zombified Milton Mamet.(caused, off-screen, alive).\nSelf-inflicted gunshot to the head.(suicide, before reanimation, off-screen)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/b/bc/AndreaBitten.png/revision/latest/scale-to-width-down/350?cb=20130729212025']
                    }
                },
                ethnicity: 'Caucasion - American',
                description: "Andrea, portrayed by Laurie Holden, is a former civil rights attorney who is extremely protective of her younger sister, Amy. Following Amy's death, she considers suicide, but decides to remain with the group. With the others, they find a farm owned by Hershel Greene. At the farm, she continued to confide and seek comfort in Dale, and gained survivalist skills through Shane. After escaping Hershel's overrun farm, she is rescued by Michonne and is brought by Merle to Woodbury, where she begins a romantic relationship with The Governor. She is eventually caught in the crossfire between Rick and The Governor, and attempts to mend relations, but later turns on The Governor after learning that he intends to attack the prison. She is captured by The Governor and left in a room with a dying Milton, who bites her before she is able to free herself. She is discovered by Michonne, Rick, and the others, and makes amends before taking her own life."
            },
            {
                id: 9,
                name: "Merle Dixon",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/29/Merleportrait.jpg/revision/latest?cb=20120914134158&format=original",
                actor: 'Michael Rooker',
                gender: 'male',
                hair: 'brown(greying)',
                age: 'Early to Mid 50s',
                occupation: ['Former military serviceman (Pre - Apocalypse)', 'former drug dealer and leader of the Savage Sonds Motorcycle Club (Pre - Apocalypse)', 'former supply runner for the Atlanta Group (Post - Apocalypse)', 'former Woodbury guard (Post - Apocalypse)', 'former lieutenant of the Woodbury Army (Post - Apocalypse)'],
                family: ['Daryl Dixon - brother', 'Will Dixon - father (deceased)', 'Jess Collines - half-uncle (deceased)'],
                first_appearance: 'Guts',
                last_appearance: 'This Sorrowful Life',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'This Sorrowful Life',
                        cause_of_death: 'Shot in the heart by The Governor.(alive)\nRepeatedly stabbed in the head by Daryl Dixon.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c2/Vlcsnap-2014-01-25-14h25m07s154.png/revision/latest/scale-to-width-down/350?cb=20140125192616', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c9/Vlcsnap-2014-01-25-14h33m40s162.png/revision/latest/scale-to-width-down/350?cb=20140125193501']
                    }
                },
                ethnicity: 'Caucasion - American',
                description: "Merle Dixon is Daryl Dixon's older brother. A racist and misogynist, Merle grew up in an abusive household. His first meeting with Rick quickly escalates to conflict and Merle is subdued and handcuffed to a pipe, but the keys are lost. The group has to leave him there, but Rick leads a rescue party only to find that Merle has cut himself free and disappeared. Merle returns in 'Walk with Me,' alive, one-handed, and residing at Woodbury, a thriving settlement run by the malicious Governor, where Merle serves as his lieutenant and enforcer. He escapes Woodbury with Daryl, but struggles to integrate into the prison. He attempts to secure peace with The Governor by kidnapping Michonne, but relents and lets her go before returning to Woodbury and luring a pack of zombies to attack in an attempt to assassinate The Governor. He fails and is killed and left to reanimate. He is later discovered by Daryl, who kills him."
            },
            {
                id: 10,
                name: "Carol Peletier",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/40/22310573_1868202143494082_6179600102262899986_n.jpg/revision/latest/scale-to-width-down/342?cb=20171007175444",
                actor: 'Melissa McBride',
                gender: 'female',
                hair: 'grey',
                age: 'Mid to Late 40s',
                occupation: ['housewife (Pre - Apocalypse)', 'former prison Council Member (Post - Apocalypse)', 'former Cook for the Alexandria Safe-Zone (Post - Apocalypse)', 'Kingdom Soldier (Post - Apocalypse)', 'member of the Militia ( Post - Apocalypse)', 'Leader of the Sanctuary (Post - Apocalypse)'],
                family: ['Ed Peletier - former husband', 'Sophia Peletier - daughter (deceased)', 'Lizzie Samuels - adopted daughter (deceased)', 'Mika Samuels - adopted daughter (deceased)', 'Tobin - ex-boyfriend', 'Ezekiel - boyfriend',],
                first_appearance: 'Tell it to the Frogs',
                last_appearance: 'season 9',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Tell it to the Frogs' to present"
                    },
                    dead: ''
                },
                ethnicity: 'Caucasion - American',
                description: "Carol Peletier, portrayed by Melissa McBride, is Sophia's protective mother and Ed's abused wife. Before the outbreak, she was a meek housewife, and in the beginning of the apocalypse she often depended on others for survival and appeared weak, despite showing compassion and kindness to others, particularly Daryl, and putting the good of the group ahead of her own needs. After Sophia's death, Carol gradually undergoes a transformation from a former victim of domestic abuse to a hardened and pragmatic warrior. She manages to survive under difficult circumstances, and soon begins sharing her survival tactics with others. Her story time program at the prison is revealed as a cover for teaching a group of young children self-defense and a weapons training course. When the father of two children, Lizzie and Mika, dies following a walker attack, she becomes their adoptive mother by the father's wishes. Carol begins taking bold risks in order to survive, especially during the epidemic that breaks out, killing the severely ill Karen and David mercifully to prevent any others from dying. After Tyreese's devastated reaction at losing Karen, Rick banishes Carol from the prison with a car and some supplies. When she sees smoke from the prison's destruction, she heads back and encounters Tyreese traveling with Lizzie, Mika, and Rick and Lori's infant daughter Judith. Carol is further hardened when she is forced to kill Lizzie, who has murdered her sister Mika to convince Carol and Tyreese that turning into a walker is just a change, not death. Carol eventually confesses Tyreese that she was responsible for Karen and David's deaths and Tyreese forgives her. With Judith, the two move towards Terminus only to discover its true nature. Carol successfully destroys Terminus and saves her friends. Rick asks her to rejoin the group and she accepts. She joins Daryl on a rescue mission for Beth in Atlanta, but Beth is killed, leaving Carol devastated. Carol arrives with the group at Alexandria and pretends to be a weak housewife so that the Alexandrians underestimate her, particularly so that she can steal guns from the armory. Young Sam Anderson takes a liking to her despite her efforts to get rid of him, and their odd friendship is what brings to light the abuse Sam, his mother, and his brother face at the hands of his father. Carol believes that the Alexandrians are weak and that they may need to take the settlement for themselves, but after reflecting on her views with Morgan, Carol realizes she had killed about twenty-five people since the beginning of the apocalypse and becomes distraught. She leaves Alexandria and, along with Morgan, discovers the Kingdom. At the Kingdom she is able to receive medical treatment from multiple gunshot wounds. After learning of the deaths of Glenn and Abraham, Carol joins the fight against the Saviors."
            },
            {
                id: 11,
                name: "Daryl Dixon",
                photo: "https://1.bp.blogspot.com/-ilKQ0Wbs4w0/V8MZltkneoI/AAAAAAAAAGY/ANsX5XIc4ZMKrHTNdtwi9tIMqxwb_AW9ACLcB/s1600/Daryl%2BDixon.jpg",
                actor: 'Norman Reedus',
                gender: 'male',
                hair: 'brown',
                age: 'Early to Mid 40s',
                occupation: ['Hunter for the Atlanta Survivor Group', 'former prison Council Member', 'former recruiter for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Merle Dixon - brother (deceased)', 'Will Dixon - father (deceased)', 'Jess Collins - half-uncle (deceased)'],
                first_appearance: 'Tell it to the Frogs',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Tell it to the Frogs' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasion - American',
                description: "Daryl Dixon is Merle's younger brother. A Southern redneck with a tough background, Daryl is a survivalist and member of the Atlanta band, who quickly becomes one of Rick's closest confidantes and a leader within the group, a role he is not entirely comfortable with. He develops a close relationship with Carol Peletier in the second season after spending a large amount of time searching for her missing daughter Sophia. Following Shane's death, Daryl becomes Rick's right-hand man. After the fall of the prison, he escapes with Beth, who is later kidnapped while he fights off a group of walkers. He joins a nomadic group (the Claimers) before turning on them to save Rick, Carl, and Michonne. In season five, he goes with Carol to Atlanta in an attempt to rescue Beth, but is forced to return with Noah when Carol is also taken to Grady Memorial Hospital. He returns with the group to break Beth and Carol out and is clearly devastated at Beth's death. He becomes more distant. Once the group arrives at Alexandria, Daryl has a hard time acclimating but befriends recruiter Aaron and eventually becomes a recruiter himself. Daryl and Aaron later discover Morgan in the woods and bring him to Alexandria. After an enormous herd of walkers is discovered near Alexandria, Daryl's role is to drive them away along with Sasha and Abraham. Daryl is driven away from Sasha and Abraham and has a small encounter with three strangers; Dwight, Sherry, and Tina. He is captured by them, who believe him to be a Savior. After Tina is killed, Dwight and Sherry steal Daryl's crossbow and motorcycle. Daryl is later found attempting to rescue Glenn and Michonne, who have been captured by Saviors. He is caught by Dwight, and shot near the shoulder. Daryl, along with Glenn, Rosita, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Aaron, and Eugene are forced to kneel before Negan. Daryl is one of the members of the group forced to kneel for Negan during his infamous 'Eeny, meeny, miny, moe' speech. After the death of Abraham at Negans hands, Daryl becomes outraged when Negan forces a terrified Rosita to look at the remains of Abraham on his bat, Lucille. Daryl lashes out at Negan in retaliation and punches him. Much to Daryl's horror, this causes Negan to further punish the group, responding to this outburst by killing Glenn. Negan takes Daryl back to the Sanctuary as prisoner, where he is tortured physically and psychologically in attempts to convince Daryl to join the Saviors. In 'Hearts Still Beating,' Sherry helps Daryl escape from the Sanctuary. He is hidden among the allied groups to avoid being caught, and is an integral part of the All Out War against the Saviors.\nDaryl Dixon is a television show only character, as he is not in the comics. His role was specifically created for his actor."
            },
            {
                id: 12,
                name: "Maggie Greene / Rhee",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/d4/Maggie_S9.jpg/revision/latest?cb=20180907040520&format=original",
                actor: 'Lauren Cohan',
                gender: 'female',
                hair: 'dark brown',
                age: '22 (season 2), 23 (season 3), 24 (season 4), 25 (season 9)',
                occupation: ['College Student (Pre - Apocalypse)', 'Farm Hand on the Greene Family Farm (Pre and Post - Apocalypse)', 'former Govern Assistant for the Alexandria Safe-Zone', 'leader of the Hilltop Colony', 'Co-Leader of the Militia'],
                family: ['Glenn Rhee - former husband (deceased)', 'Hershal Greene - father (deceased)', 'Josephine Greene - mother (deceased)', 'Annette Greene - step-mother (deceased)', 'Beth Greene - half-sister (deceased)', 'Shawn Greene - step-brother (deceased', 'Arnold Greene - cousin (deceased)', 'Hershal Rhee - son'],
                first_appearance: 'Blodletting',
                last_appearance: 'Who Are You Now',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Bllodletting' to 'Who Are You Now'",
                    },
                    dead: ''
                },
                ethnicity: 'Irish - American',
                description: "Maggie Greene is Hershel's daughter and Beth's elder half-sister. A tomboy at heart, she scavenges supplies from the local town. She develops strong feelings for Glenn, impressed by his bravery and loyalty to the group. After the fall of the farm, she settles 8 months later at the prison with the rest of the group. She and Glenn are later captured and interrogated by Merle and The Governor, who forces her to undress and threatens her with rape to intimidate Glenn into giving up information. After a rescue mission, she continues to be proactive in defending the prison during The Governor's attacks, killing several snipers and soldiers to protect the prison survivors. She soon marries Glenn. When Glenn is infected by the deadly influenza virus that has spread across the prison and her father risks exposure by caring for the sick, she is angry and frustrated but is able to help when she rushes in to rescue her father and husband from the reanimated infected that overrun the quarantine zone. The Governor returns to the prison and Maggie witnesses her father's execution in horror. She defends the prison against The Governor's militia before escaping the overrun compound with Sasha and Bob, unsure if Glenn and her sister are alive or not. Deciding that Glenn is alive, Maggie searches for and finds him, and joins the mission to D.C. for a cure. She receives news that her sister is still alive, only to be left heartbroken once she arrives too late to meet her, as Beth has just died. Maggie becomes depressed after her sister's death, but begins to recover before the group arrived at Alexandria. Once in Alexandria, Maggie acts as Deanna's assistant. She tries to persuade Deanna not to exile Rick and also prevents Sasha from killing Gabriel. Maggie later discovers she is pregnant and worries with the possibility of Glenn's death. When they reunite, she joins the group to go to the Hilltop Colony where she negotiates a deal with Gregory for half of their supplies. When Rick initiates a plan to take out the Saviors, Maggie and Carol are captured by a female group of Saviors and Maggie is forced to kill them, as well as some others, to protect herself and the baby. She forms a maternal bond with Enid. When Enid gives Maggie a haircut, she collapses on the floor in pain and she is taken with a group to reach the Hilltop to see a doctor. Maggie, along with Glenn, Rosita, Daryl, Michonne, Abraham, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan before they can reach the Hilltop. Maggie is forced to watch as Negan kills Glenn as punishment for Daryl's strike. A devastated Maggie tells Rick to prepare to fight Negan as she attempts to collect Glenn's body. Glenn's death ultimately helps Maggie grow stronger. Maggie moves to the Hilltop for medical treatment along with Sasha and Enid, and eventually takes leadership over Gregory. At the end of the All Out War arc, Maggie is secretly plotting behind Rick's back alongside Daryl and Jesus to kill Negan (who is spared by Rick earlier) in the future."
            },
            {
                id: 13,
                name: "Hershel Greene",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/35/HershelCastPhoto4.jpg/revision/latest?cb=20130926174641&format=original",
                actor: 'Scott Wilson',
                gender: 'male',
                hair: 'white',
                age: 'Early to Mid 70s',
                occupation: ['Veterinarian (Pre - Apocalypse', 'Group Medic/Former Prison Council Member (Post - Apocalypse'],
                family: ['Josephine Greene - former wife (deceased)', 'Annette Greene - former wife (deceased)', 'Maggie Rhee - daughter', 'Beth Greene -daughter(deceased)', 'Shawn Greene - step-son (deceased', 'Glenn Rhee - son-in-law', 'Arnold Greene - nephew (deceased)'],
                first_appearance: 'Blootletting',
                last_appearance: 'season 9',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: '"Too Far Gone" (alive), "After"(zombified)',
                        cause_of_death: 'Decapitated by The Governor. (alive)\nStabbed in the head by Michonne(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/9/94/TFG_Hershel_Neck_Slice.png/revision/latest/scale-to-width-down/350?cb=20131202061312', 'https://vignette.wikia.nocookie.net/walkingdead/images/f/fe/LastofHershel.png/revision/latest/scale-to-width-down/350?cb=20131202153803', 'https://vignette.wikia.nocookie.net/walkingdead/images/0/09/Hershel%27s_Head.png/revision/latest/scale-to-width-down/350?cb=20140210040908']
                    }
                },
                ethnicity: 'Irish - American',
                description: "Hershel Greene, portrayed by Scott Wilson, is a veterinarian and farmer, who is also a religious man and former alcoholic. He allows Rick and his group to remain at the farm while Carl recuperates after being shot, but hides from them that he is keeping walkers in his barn, merely believing them to be sick and not dead. When Shane opens the barn and the group kills everyone inside, his worldview is shattered, but he develops a close friendship with Rick and often acts as a voice of wisdom. When the group attempts to clear the prison, he is bitten and Rick cuts off his leg to prevent him from turning into a walker. Hershel becomes a member of the leading council of the prison and counsels the group to work to rebuild a society which can forgive the past wrongs of its members. When the prison becomes infected with the flu, he works as a medic and provides natural remedies to help ease the symptoms of his patients until a cure can be found. He is later taken hostage by The Governor, but is proud to hear Rick offer forgiveness and coexistence to The Governor and his group. The Governor refuses and executes Hershel before attacking the prison."
            },
            {
                id: 14,
                name: "Beth Greene",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2014/10/b5c54483_1419_81ab_fcf4_979f275f708a_TWD_504_GP_0610_0054/square.jpg?1522684691",
                actor: 'Emily Kinney',
                gender: 'female',
                hair: 'blonde',
                age: '16 (season 2), 17 (season 3), 17-18 (season 5)',
                occupation: ['High school Student (Pre - Apocalypse)', 'Farm Hand on the Greene Family Farm (Pre and Post - Apocalypse)', 'Dawwn Lerner"s ward at Grady Memorial Hospital (Post - Apocalypse)'],
                family: ['Hershal Greene - father (deceased)', 'Annette Greene - mother (deceased)', 'Maggie Greene - half-sister', 'Shawn Greene - half-brother (deceased', 'Arnold Greene - cousin (deceased)', 'Glenn Rhee - brother-in-law', 'Jimmy - former boyfriend (deceased)', 'Zach - former boyfriend (deceased)', 'Hershal Rhee - newphew'],
                first_appearance: 'Blodletting',
                last_appearance: 'The Way Will Come When You Won"t Be (archive footage)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Coda',
                        cause_of_death: 'Accidentally shot in the head by Dawn Lerner',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/8/8a/508_Beth_Death.png/revision/latest/scale-to-width-down/350?cb=20141201034640']
                    }
                },
                ethnicity: 'Irish - American',
                description: "Beth Greene, portrayed by Emily Kinney, is Hershel's younger daughter and Maggie's younger half-sister. She sinks into a deep depression after watching her mother, half-brother, and neighbors, who had become walkers and were being housed in her father's barn, get shot by Rick's group, and unsuccessfully attempts suicide. She recovers and survives the fall of the farm before traveling with the group to the prison. She is often seen helping take care of Judith. When the prison becomes infected with the flu, she is put in charge of isolating the group's children to protect them from the deadly virus. She witnesses her father's death at the hands of The Governor and escapes the fall of the prison with Daryl. When they become separated during a walker attack, she is kidnapped. She reappears in season five at Grady Memorial Hospital, where she wakes up and discovers that she is being held in the hospital by a group of corrupt police officers. She regularly tries to fight against their strict regime, killing one officer and helping another patient, Noah, escape, but she is kept alive by the officer in charge, Dawn Lerner. As a result of an exchange plan negotiated by Rick to rescue Beth, she is returned to Rick's group, but Rick refuses to let Lerner take back Noah. Beth stabs Dawn with hidden scissors, but Dawn's instinctive reflexes cause her to fire a single bullet through Beth's head, killing her instantly and unexpectedly."
            },
            {
                id: 15,
                name: "Michonne",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/9a/MichonneS9.jpg/revision/latest?cb=20180907040532&format=original",
                actor: 'Danai Gurrira',
                gender: 'female',
                hair: 'brown',
                age: 'Mid to Late 30s',
                occupation: ['Former Constable for the Alexandria Safe-Zone', 'Member of the Militia', 'Co-Leader of the Alexandria-Safe-Zone'],
                family: ['Mike - former husband (deceased)', 'Andre Anthony - son (deceased)', 'Rick Grimes - boyfriend', 'Carl Grimes - stepson (deceased)', 'Judith Grimes - adopted daughter'],
                first_appearance: 'Beside the Dying Fire',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Beside the Dying Fire' to present",
                    },
                    dead: ''
                },
                ethnicity: 'African - American',
                description: "Michonne, portrayed by Danai Gurira, is a resourceful and self-sufficient katana-wielding survivor. Her past, revealed slowly over the series, shows she had survived the initial apocalypse with her three-year-old son Andre, her boyfriend Mike, and their friend Terry. Mike, Terry, and Andre had been attacked by walkers while she was on a supply run, and she blamed Andre's death on Mike and Terry. She used the reanimated Mike and Terry walkers as a means to disguise her scent among walker hordes. She saves Andrea after the group ran off from Hershel's farm, and becomes her friend. When they are brought to Woodbury, Michonne is highly distrustful of The Governor and leaves the community to warn Andrea's friends after witnessing Glenn and Maggie being captured. When Rick's group attacks Woodbury, Michonne joins in and gets in a fight with The Governor, destroying one of his eyes. Michonne becomes a pivot in the conflict between Rick's group and The Governor. Later, when Rick's group is forced to flee the prison after The Governor's attack, Michonne meets up with Rick and Carl, and the three become closer. As the story progresses, Michonne becomes the voice of reason for Rick, reminding him not to take risks. By the time the group has worked their way to Alexandria, Rick and Michonne have started a relationship with each other. Michonne is attacked by a member of the Scavengers and is almost killed."
            },
            {
                id: 16,
                name: "The Governor",
                photo: "https://www.horrornewsnetwork.net/wp-content/uploads/2013/11/The-Walking-Dead-Season-4Live-Bait.jpg",
                actor: 'David Morrissey',
                gender: 'male',
                hair: 'graying brown',
                age: 'Mid to Late 40s',
                occupation: ['Middle-Management Employee (Pre - Apocalypse)', 'former Leader of Woodbury (Post - Apocalypse)', 'Former Leader of the River Camp (Post - Apocalypse)'],
                family: ['Mrs.Blake - former wife (deceased)', 'Penny Blake - daughter (deceased)', 'Andrea - ex-girlfriend (deceased)', 'Lilly Chambler - ex-girlfriend (deceased)'],
                first_appearance: 'Walk With Me',
                last_appearance: 'What Happened and What"s Going On (hallucination)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Too Far Gone',
                        cause_of_death: 'Stabbed through the back by Michonne. (caused)\nShot in the head by Lilly Chambler.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/a/a4/GovStabbed.png/revision/latest/scale-to-width-down/350?cb=20131202060219', 'https://vignette.wikia.nocookie.net/walkingdead/images/3/39/Wd1.png/revision/latest/scale-to-width-down/350?cb=20131217163104', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/ce/Philip%27sCorpse.jpg/revision/latest/scale-to-width-down/350?cb=20160423010223']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "The Governor (real name, Phillip Blake), portrayed by David Morrissey, is the leader of the fortified town of Woodbury. He is a charismatic man, who is nevertheless power-mad and willing to kill anyone to secure the supplies needed to strengthen the town. When Merle rescues Andrea and Michonne, he quickly develops a romantic relationship with Andrea, but Michonne remains skeptical. When she leaves, he orders Merle to track her and kill her, but she escapes. Merle instead returns with Glenn and Maggie, who are tortured. When Rick leads a rescue party, Michonne steals away to kill The Governor only to find a room full of heads in fish tanks and his reanimated daughter, who she kills. This enrages The Governor and in the ensuing fight he loses his eye. He resolves to take the prison using walkers as a weapon and eventually leading a militia. When they are routed, he murders most of the militia before being abandoned by his remaining lieutenants. He wanders alone before meeting Lilly and Tara using the pseudonym 'Brian Heriot'. He eventually meets up with a larger group and takes it over, murdering its leader and blaming the prison group. He takes Hershel and Michonne hostage and leads his new group to attack the prison, demanding that Rick and his group abandon the prison. He refuses a gesture of cohabitation before murdering Hershel and triggering a battle. Rick and The Governor brawl, with The Governor gaining the upper hand before being impaled by Michonne, and shot and killed by Lilly."
            },
            {
                id: 17,
                name: "Tyreese Williams",
                photo: "http://nerdreactor.com/wp-content/uploads/2015/02/c397235c-63d3-cc1a-0616-0610d54ab08d_twd_501_gp_0505_0010-chad-coleman-cast-in-new-syfy-series-what-does-this-mean-for-tyreese-500x500_c.jpeg",
                actor: 'Chad Coleman',
                gender: 'male',
                hair: 'black',
                age: 'Late 30s to early 40s',
                occupation: ['Ex-NFL Player (Pre -Apocalypse)', 'Former Woodbury Guard (Post - Apocalypse)'],
                family: ['Sasha Williams - sister (deceased)', 'Karen - former girlfriend (deceased)'],
                first_appearance: 'Made To Suffer',
                last_appearance: 'The Day Will Come When You Won"t Be',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'What Happened and What"S Going On',
                        cause_of_death: 'Bitten by Noah"S zombified brother and later dies from blood loss.(alive)\nPut down by Michonne(before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c0/WHW_Tyreese_Bit.png/revision/latest/scale-to-width-down/350?cb=20150209061007', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c9/Tyreese_getting_rekt.png/revision/latest/scale-to-width-down/350?cb=20150211075201', 'https://vignette.wikia.nocookie.net/walkingdead/images/0/09/WHW_Tyreese_Dead.png/revision/latest/scale-to-width-down/350?cb=20150209061026']
                    }
                },
                ethnicity: 'African - American',
                description: "Tyreese Williams, portrayed by Chad L. Coleman, is the leader of a group from Jacksonville, Florida, which includes his sister Sasha as well as Allen's family. After unsuccessfully trying to seek refuge at the prison due to Rick's hallucinations, Tyreese and the others find their way to Woodbury. Tyreese and Sasha become guards at Woodbury's walls, but he becomes wary of The Governor's intentions. When the assault on the prison is declared, Tyreese and Sasha stay behind to protect the innocent civilians. Eventually, Rick's group return to reveal The Governor massacred his entire army, except for lone survivor, Karen. Six months later, Karen and Tyreese form a relationship at the prison and he becomes proactive in supply runs with Daryl, Michonne, Bob, and Sasha. During the flu epidemic that breaks out at the prison, Karen is secretly killed and burned by Carol to prevent the disease from spreading. Furious, he commands Rick to investigate the murders, and attacks Daryl and Rick out of frustration. He helps find medicine for the sick inmates before The Governor returns when their numbers are down. Tyreese fights The Governor's militia along with Rick's group and manages to escape with Rick's infant daughter, Judith, and Lizzie and Mika. They encounter Carol on the road, but Tyreese is unaware of her responsibility for Karen's death. Lizzie's psychotic behavior becomes a threat to Tyreese, Carol, and Judith when she murders her sister, forcing Carol to put her down. Carol then admits to killing Karen to prevent people from dying. Tyreese forgives her, but remains haunted by the situation at the grove where they stayed. Soon, he appears psychologically and emotionally damaged, refusing to kill and trying to teach others about mercy. After reuniting with the group, Sasha is alarmed by his behavior, but seeks his comfort in her own loss. After proposing a mission to save Beth that fails when Beth is killed, the group goes to Noah's home town of Richmond, Virginia for possible sanctuary. Tyreese, however, is bitten in one of the overrun homes, and accepts his fate while hallucinating previously deceased group members, making the choice to let go of his guilt for their losses. The group tries to save him by amputating his arm, but he dies anyway."
            },
            {
                id: 18,
                name: "Sasha Williams",
                photo: "https://img-s3.onedio.com/id-58e2229cf8a5143e0921994a/rev-0/w-500/h-500/s-30c1ec2caf02fa036576d88f532f0f82e087e4be.jpg",
                actor: 'Sonequa Martin-Green',
                gender: 'female',
                hair: 'black',
                age: 'Early 30s',
                occupation: ['Firefighter (Pre -Apocalypse)', 'former Woodbury guard', 'former prison Council Member', 'former guard and marksman for the Alexandria Safe-Zone'],
                family: ['Tyreese Williams - brother (deceased)', 'Bob Stookey - former boyfriend (deceased)', 'Abraham Ford - former boyfriend (deceased)'],
                first_appearance: 'Made To Suffer',
                last_appearance: 'season 9',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'The First Day of the Rest of Your Life',
                        cause_of_death: 'Suicide via ingestion of a cyanide tablet.(alive)\nStabbed in the head by Maggie Rhee.(zombified, out of mercy)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/1/1c/Sasha_Williams_Death_TWD_7x16_The_First_Day_Of_The_Rest_of_Your_Life.png/revision/latest/scale-to-width-down/350?cb=20180226162046', 'https://vignette.wikia.nocookie.net/walkingdead/images/f/f8/SashaZombifiedDeath.png/revision/latest/scale-to-width-down/350?cb=20170715173448']
                    }
                },
                ethnicity: 'African - American',
                description: "Sasha Williams is a former firefighter from Jacksonville, Florida. She travels to Georgia with a group run by her older brother, Tyreese, in search of a safe haven. After passing on the prison, Sasha, her brother Tyreese, Allen, and Ben are welcomed into Woodbury where she protects the walls as a guard. She proves to be a great shot, much better than Tyreese, and decides to stay behind with the people of Woodbury at the walls to protect them instead of joining their army's attack on the prison. They let Rick's group in after Karen explains The Governor's onslaught on his men. Sasha, along with Tyreese, Karen, and other citizens of Woodbury, is taken in by the prison group. At the prison, she is appointed to the prison council, and participates as co-leader on the majority of the supply runs that the prison organizes. She becomes infected by a deadly virus circulating the prison and is forced into quarantine. Hershel keeps her safe in a locked cell block when some infected reanimate as walkers. She is treated by Bob, one of the new prison inhabitants, who gives her medicine. She participates in the battle between her group and The Governor, and escapes the prison with Bob and Maggie. The three later discover the inhabitants in the prison bus have died and reanimated, and Sasha helps put down her undead former comrades. She eventually starts a romantic relationship with Bob, and she is devastated when he dies. This leads her to become a colder, more hardened individual, and her reclusiveness and recklessness only increase when Tyreese dies. Once at Alexandria she becomes a lookout and at one point disappears for a day, hunting walkers in the woods, before Michonne and Rosita find her and convince her to come home. She seeks help from Gabriel, who denies her, and she attempts to beat him but is stopped by Maggie. Sasha begins a romantic relationship with Abraham. Sasha, along with Glenn, Rosita, Daryl, Michonne, Abraham, Maggie, Rick, Carl, Eugene and Aaron, is forced to kneel before Negan. Sasha moves to the Hilltop with Maggie and Enid after Abraham's death as Maggie's protector. Sasha and Rosita decide they are tired of waiting for Rick to attack the Saviors and decide to go themselves. After their plans are compromised, Sasha locks Rosita out of the Sanctuary, saving Rosita's life. Sasha is captured by Negan and put in a cell. When she asks him, Eugene gives Sasha the cyanide tablet he had made so she can determine her own fate. Sasha is put in a casket to travel back to Alexandria as a trade, but she poisons herself on the way there. When Negan opens the casket to prove to Rick she is still safe, a zombified Sasha emerges and tries to attack Negan, leading to the All Out War between the groups. Maggie and Jesus find zombified Sasha and put her down."

            },
            {
                id: 19,
                name: "Bob Stookey",
                photo: "https://i.pinimg.com/originals/ed/77/5c/ed775ced2d014a0aef395ad23da8debc.jpg",
                actor: 'Lawrence Gilliard Jr.',
                gender: 'male',
                hair: 'black',
                age: 'Early to Mid 30s',
                occupation: ['Army Medic (Pre - Apocalypse)'],
                family: ['Sasha Williams - former girlfriend (deceased)'],
                first_appearance: '30 Days Without An Accident',
                last_appearance: 'The Day Will Come When You Won"t Be',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Four Walls and a Roof',
                        cause_of_death: 'Bitten on the right shouder by a walker.(caused)\nStabbed in the head by Tyreese Williams(before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/a/a3/Bob_S5E3_15.jpg.jpg/revision/latest/scale-to-width-down/350?cb=20141028082836', 'https://vignette.wikia.nocookie.net/walkingdead/images/b/b2/Bob_S5E3_33.jpg/revision/latest/scale-to-width-down/350?cb=20141028083907']
                    }
                },
                ethnicity: 'African - American',
                description: "Bob Stookey is a former army medic. He joins the prison community a week before the fourth season opener, '30 Days Without an Accident,' when Daryl found him surviving on his own. Bob maintains a confident face to prove his worth to the group, but struggles with alcoholism and his troubled past. When a deadly influenza virus affects the prison inhabitants, Bob joins Daryl's group to retrieve medicine at a college. Bob then talks to Daryl about being the last survivor of two different groups, and admits responsibility for the death of another member of their group during a supply run when his temptation for alcohol resulted in an attack by walkers, although he is quickly forgiven by Daryl. At the college, Bob retrieves a bottle of alcohol, which is later discovered by Daryl, who loses trust in Bob. When they return to the prison, Bob creates vaccinations to help cure the infected. Bob participates in the battle against The Governor. He is injured but he manages to escape the prison with Sasha and Maggie. After being treated by Sasha, he joins them in their quest to find the prison bus. The three discover the inhabitants in the prison bus have died and reanimated, and Bob helps to put them down. He eventually starts a romantic relationship with Sasha. Later, after the group reunites and escapes Terminus, he joins Rick, Michonne, Sasha, and Father Stokes on a supply run into the nearest town's food bank in 'Strangers.' It is eventually revealed that, during a scuffle between Bob and a walker beneath the sewage water in the food bank's basement, he sustained a bite to his right shoulder, but kept it a secret from everyone else. Later that night, he leaves the church to put himself down, only to be kidnapped by the Hunters. Though he is initially horrified that they are eating his leg, he laughs and taunts them, saying that he is 'tainted meat.' In response, the Hunters savagely beat him and leave him outside the church, where he is found by the group. He dies the next morning, after the group has already killed the Hunters, and Tyreese stabs him in the head to put him down."
            },
            {
                id: 20,
                name: "Tara Chambler",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c6/811_Tara_Chambler.jpg/revision/latest/scale-to-width-down/800?cb=20180306041656",
                actor: 'Alanna Masterson',
                gender: 'female',
                hair: 'dark brown',
                age: 'early to Mid 30s',
                occupation: ['Police Academy Student ( Pre - Apocalypse)', 'former Governor"s Militia soldier', 'supply runner for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['David Chambler - father (deceased)', 'Lilly Chambler - sister (deceased)', 'Meghan Chambler - niece (deceased)', 'Sam - ex-girlfriend (deceased)', 'Alisha - former girlfriend (deceased)', 'Denise Cloyd - former girlfriend (deceased)'],
                first_appearance: 'Live Bait',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Live Bait' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Tara Chambler is a former police academy student, who holes up in an apartment complex with her remaining family — her sister Lilly, her dying father David, and her niece Meghan. They welcome The Governor into their apartment and Tara comes to trust him and follows him as he leads them to join a larger group after her father's death. As he leads an attack on the prison, she refuses to fight when confronted with The Governor's true nature. Glenn discovers a catatonic Tara in the aftermath of the battle, having lost her sister (who killed The Governor out of vengeance), her niece, and her girlfriend Alisha. She agrees to stay with him until he finds Maggie. They later meet Abraham Ford, Dr. Eugene Porter, and Rosita Espinosa, who are on a mission to find a cure for the virus in Washington, D.C. She travels with them and they eventually find Maggie, Bob and Sasha before finding Terminus and being captured and imprisoned by cannibals. The group escapes as the compound is overrun and Tara is formally accepted as a member of the group by Rick, who tells her that he knows she didn't want to be a part of the assault. She accompanies group members to D.C. and develops a strong friendship with Eugene, giving him a chance to prove himself and be accepted like she was. Upon discovering his mission was a lie, she is silent, but later explains to Eugene that he needs to pull his weight within the group. The band of survivors regroup and head to Noah's community in Virginia, suffering several losses in the process before being recruited to a safe zone outside of D.C. called Alexandria. Tara, Noah, and Glenn become supply runners. During one run, Tara is severely injured and knocked unconscious as Noah is killed. Tara later wakes up in a medical room as Rosita watches over her. She soon begins a relationship with Denise Cloyd, the local doctor for Alexandria. She is part of Rick's plan to kill the Saviors at the outpost. After this, she joins Heath on a two-week supply run. While she is gone, Denise is killed by Dwight. Tara and Heath are separated after Tara falls off of a bridge. An unconscious Tara is discovered by the Oceanside community; Tara is able to escape Oceanside but promises she wouldn't tell anyone of their whereabouts. She eventually breaks this promise when Negan takes Alexandria's guns. Tara leads Rick, Daryl, Carl, Michonne, Aaron, Gabriel, Jesus, Enid, Tobin, Eric, Scott, & Francine to Oceanside to take their guns. When Rosita brings Dwight back to Alexandria, Tara repeatedly tells Daryl to kill him. When Daryl doesn't know that Tara is seemingly angry at him."
            },
            {
                id: 21,
                name: "Sergeant Abraham Ford",
                photo: "http://www.femalefirst.co.uk/image-library/square/500/a/abraham-the-walking-dead-season-5-part-b.jpg",
                actor: 'Michael Cudlitz',
                gender: 'male',
                hair: 'red',
                age: 'LAte 40s to early 50s',
                occupation: ['U.S.Army Sergeant (Pre - Apocalypse)', 'Constuction Foreman for the Alexandria Safe-Zone'],
                family: ['Ellen Ford - wife (deceased)', 'A.J. Ford - son (deceased)', 'Becca Ford - daughter (deceased)', 'Rosita Espinosa -ex-girfriend', 'Sasha Williams - former girlfriend (deceased)'],
                first_appearance: 'Inmates',
                last_appearance: 'The First Day of the Rest of Your Life (flashback)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Last Day on Earth (off-screen)',
                        cause_of_death: 'Head smashed by Negan using his baseball bat, Lucille.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/e/e3/Abrahamdeath.png/revision/latest/scale-to-width-down/350?cb=20161124012832', 'https://vignette.wikia.nocookie.net/walkingdead/images/8/8f/Abraham%27s_death.png/revision/latest/scale-to-width-down/350?cb=20161024082825']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Sergeant Abraham Ford, portrayed by Michael Cudlitz, is a survivor and former member of the military. Before meeting Eugene, he had a family, who ran away after seeing him kill a group that threatened their safety. After his family was killed, Abraham attempted suicide, but Eugene arrived at the same moment, stopping him from doing so. His mission has become attempting to deliver Eugene to Washington, D.C., believing he has the answer to the cause and cure of the zombie plague. Upon discovering that Eugene was lying, he nearly beats Eugene to death. His actions cause friction with the others, but he remains with the group nonetheless. He becomes part of Alexandria's construction crew and upon Tobin's recommendation becomes their leader after saving Francine from walkers. Abraham's friendship with Eugene is later repaired after intervention from Rosita. He had been in a relationship with Rosita while they traveled with Eugene, Glenn and Tara, but he ended it at Alexandria. He takes a liking to Sasha from being on some runs with her as a partner, and they become lovers. Abraham, along with Glenn, Rosita, Daryl, Michonne, Maggie, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan. After Negan plays 'Eeny, meeny, miny, moe' with the group, he lands on Abraham, who flashes Sasha a peace sign before accepting his death at Negan's hands."
            },
            {
                id: 22,
                name: "Eugine Porter",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/9d/TWDS84.jpg/revision/latest/scale-to-width-down/450?cb=20170926210856",
                actor: 'Josh McDermitt',
                gender: 'male',
                hair: 'dark brown',
                age: 'Mid to Late 30s',
                occupation: ['Former Engineer for the Alexandria Safe-Zone', 'Chief Engineer for the Sanctuary', 'Former Lieutenant of the Saviors', 'Former Head of the Bullet Factory Outpost'],
                family: ['unknown'],
                first_appearance: 'Inmates',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Inmates' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Dr. Eugene Porter is a survivor of the apocalypse and a member of Abraham Ford's survivor group and later a minor antagonist after he unwillingly begins working for the Saviors. He comes across as timid and socially awkward. Initially when encountered by Rick's group, he appears to be a scientist that knows of a cure to the outbreak located in Washington, D.C., with Abraham and Rosita assisting him. Later, Eugene is forced to reveal that he lied to Abraham to gain his protection back when they first met, leading Abraham to punch him unconscious and creating a rift in their friendship. When the group makes it to Alexandria, Eugene assists the community with his technical knowledge to repair their solar power system. This helps to boost his confidence to learn how to defend himself, reconcile his friendship with Abraham, and help the community find a way to make more bullets. When Negan discovers that Eugene makes bullets, Eugene is taken to work for the Saviors. Although Eugene accepts the offer to become one of the Saviors, he still helps Sasha kill herself but lies about it to Negan. He is an important player for the Saviors in the All Out War arc, but is tormented with conflicting loyalties, especially after he discovers that Dwight is playing both sides."
            },
            {
                id: 23,
                name: "Rosita Espinosa",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2016/03/TWD_615_GP_1030_0078_RT/square.jpg?1522795861",
                actor: 'Christian Serratos',
                gender: 'female',
                hair: 'black',
                age: 'Mid to Late 20s',
                occupation: ['Medical Assistant at the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Abraham Ford - ex-boyfriend (deceased)', 'Spenser Monroe - ex-lover (deceased)'],
                first_appearance: 'Inmates',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Inmates' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Hispanic - American',
                description: "Rosita Espinosa is a survivor of the apocalypse and a member of Abraham Ford's survivor group, with whom she is in a relationship. When their truck breaks down on the way to D.C. she and the others journey with Glenn and Tara towards Terminus, ultimately leading to her capture there. She escapes with the group and goes with them from Georgia to Alexandria, forming a close relationship with fellow survivors Glenn Rhee and Tara Chambler before becoming fully accepted into their group. Upon arriving at Alexandria, Rosita is made a medical assistant. Along with Michonne, she tries to bring Sasha back to Alexandria after she goes missing, and takes close care of Tara after her injury while simultaneously trying to mend Abraham's and Eugene's friendship. She is with Tara when she wakes up in the season five finale. In 'Not Tomorrow Yet,' Rosita is heartbroken after Abraham breaks up with her. She then begins a relationship with Spencer. Rosita, along with Glenn, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Eugene and Aaron, is forced to kneel before Negan. Furious about Abraham and Glenn's death, Rosita has Eugene make her a bullet to kill Negan. Negan kills Spencer which triggers Rosita to shoot at him, but she hits Lucille. She is tackled by Arat, who scars her face. Rosita becomes increasingly angry with the Saviors. She finds Sasha at Hilltop and the two go on a mission to the Sanctuary to kill Negan. During their run, Rosita reveals to Sasha that she learned everything she knows from everyone she met after the apocalypse. Later, when breaking into the Sanctuary, Eugene refuses her help and will not join them and escape. Sasha locks Rosita out of the Sanctuary, telling her that is isn't her time to die. Rosita then runs into Dwight, who she brings back to Alexandria. During the battle at Alexandria, Rosita is shot and is rushed to the infirmary by Tara."
            },
            {
                id: 24,
                name: "Gareth",
                photo: "https://78.media.tumblr.com/95693528591042256936bab8024c74c0/tumblr_ne6g194rsn1u292n2o1_500.jpg",
                actor: 'Andrew J. West',
                gender: 'male',
                hair: 'brown',
                age: 'Mid to late 20s',
                occupation: [' Leader of Terminus (Post - Apocalypse)'],
                family: ['Mary - mother (deceased)', 'Alex - brother (deceased)'],
                first_appearance: 'A',
                last_appearance: 'What Happened and What"S Going On (flashback, corpse)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Four Walls and a Roof',
                        cause_of_death: 'Hacked to death by Rick Grimes',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/f8/503_Gareth_Slashed.png/revision/latest/scale-to-width-down/350?cb=20141027033228', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c3/GarethBody.PNG/revision/latest/scale-to-width-down/350?cb=20141030045756']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Gareth, portrayed by Andrew J. West, is the leader of a supposed safe zone, Terminus, which he runs along with his younger brother, Alex, and his mother, Mary. He explains that Terminus initially was a safe and welcoming place, a sanctuary for all who wanted to come in, before a group of marauders took over and began ruthlessly beating and raping the other survivors. Gareth and his family had to take Terminus back by force, and decided that from then on, they would run Terminus in a similarly brutal manner by capturing, killing, and eating all those who were lured in by the various signs posted in the area. Just before Gareth and his butchers can kill Rick, Daryl, Glenn, and Bob, Carol begins her siege on Terminus by blowing up the propane tank outside, blasting open the fences and allowing the walkers to flow in. Though Terminus is destroyed and a majority of the survivors, including Alex and Mary, are killed, Gareth manages to survive and escape, along with five others, and become known as The Hunters. Later the Hunters kidnap Bob and eat one of his legs, but when he reveals that he is infected, they savagely beat him and leave him outside Father Stokes's church, where Rick's group has taken residence. They then attempt to lead a siege against the church in 'Four Walls and a Roof,' only to be outsmarted and overpowered by Rick, Abraham, Michonne, Glenn, Maggie and Tara. Although Gareth initially pleads for his life, Rick refuses and kills him with a red-handled machete."
            },
            {
                id: 25,
                name: "Gabriel Stokes",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2015/03/4ac4747a_813a_abdf_17cd_40262dd8c4d7_TWD_514_GP_1024_0004/square.jpg?1522840927",
                actor: 'Seth Gilliam',
                gender: 'male',
                hair: 'black',
                age: 'Late 40s to Mid 50s',
                occupation: ['Priest (Pre and Post - Apocalypse)', 'former lookout for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['unknown'],
                first_appearance: 'Strangers',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Strangers' to present",
                    },
                    dead: ''
                },
                ethnicity: 'African - American',
                description: "Gabriel Stokes, portrayed by Seth Gilliam, is a priest at a small parish church outside Atlanta. He is an extremely nervous man, who is not used to the hazards of the outside world, having been mostly sheltered inside his church after the outbreak began, living off of stored food from the nearby town's food drive. He also struggles with how his religious beliefs fit within this new world. He is introduced when Rick's group rescues him from walkers while he was out foraging, and he offers them shelter in his church. Rick discovers Gabriel had locked his congregation out of the church at the start of the outbreak, an action he remains remorseful for. He joins Rick's group as the church is overrun, though detests the use of violence. When they arrive at the relative safety of Alexandria, he attempts to convince Deanna that Rick's group is Satan in disguise, but eventually apologizes to all for sowing seeds of distrust. He becomes a useful member of Alexandria, both a man of the cloth as well as a protector on the community's walls. Tamiel from the Scavengers kidnaps Gabriel. Rick, Michonne, Rosita, Tara, and Aaron find Gabriel with the Scavengers, which leads to the Alexandrians' deal to exchange guns for an alliance. This alliance proves unfaithful, and Gabriel is involved in the war against the Saviors. As he tries to help save Gregory during the attack on the Sanctuary, Gabriel ends up sheltering in the same storage room where Negan himself is hiding. Though Negan helps him escape from the walker horde, Gabriel becomes a prisoner of the Saviors, and contracts a deadly infection that requires medical attention."
            },
            {
                id: 26,
                name: "Aaron",
                photo: "http://nerdreactor.com/wp-content/uploads/2015/10/AMC_TWD_S6A_602_Inside_JSS-800x450-500x500_c.jpg",
                actor: 'Ross Marquand',
                gender: 'male',
                hair: 'brown',
                age: 'Early to Mid 30s',
                occupation: ['Former Politician (Pre - Apocalypse)', 'NGO worker (Pre - Apocalypse)', 'former recruiter for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Eric Raleigh - former boyfriend (deceased)', ' Gracie - adopted daughter'],
                first_appearance: 'Them',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Them' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Aaron, portrayed by Ross Marquand, is a recruiter for the Alexandria Safe Zone community, and generally has a cheerful, outgoing personality. Prior to formally meeting Rick's group of survivors, he followed them around to evaluate them as candidates for membership in Alexandria, and eventually extends an invitation to Rick. The group, after some deliberation, accepts. Once the group is accustomed to Alexandria, Aaron invites Daryl to help assist him in recruiting other survivors. During once such excursion, Aaron and Daryl are lured into a walker trap set up by the Wolves. Morgan helps them to escape, though Aaron loses his kit of recruiting materials. Later, when the Wolves launch a full-out attack on Alexandria, Aaron finds that they had used his recruiting materials to locate Alexandria and plan the attack, causing him to feel guilty over the deaths of several Alexandrians. His guilt inspires him to take part in more of the fighting that follows, which leads to conflict with his husband, Eric, who worries for his safety. Aaron, along with Glenn, Daryl, Michonne, Abraham, Maggie, Rick, Sasha, Carl, Eugene and Rosita, is forced to kneel before Negan, and watches in horror as Negan brutally murders Abraham and Glenn. He helps Rick carry back Abraham and Glenn's bodies after their deaths. He and Eric make amends and both fight against the Saviors, which leads to Eric's death."
            },
            {
                id: 27,
                name: "Deanna Monroe",
                photo: "https://cdn2.atlantamagazine.com/wp-content/uploads/sites/12/2016/02/0216_twd06_amc_oneuseonly.jpg",
                actor: 'Tovah Feldshuh',
                gender: 'female',
                hair: 'auburn',
                age: 'Late 50s',
                occupation: [' Ohio U.S. Congresswoman (Pre - Apocalypse)', 'former leader of the Alexandria Safe-Zone'],
                family: ['Reg Monroe - former husband (deceased)', 'Aiden Monroe - son (deceased)', 'Spencer Monroe - son (deceased)'],
                first_appearance: 'Remember',
                last_appearance: 'The Day Will Come When You Won"t Be (archive footage)',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: '"Start to Finish"(alive), "The Next You"(zombified)',
                        cause_of_death: 'Bitten by a walker.(alive)\nStabbed in the head by Spencer Monroe (zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/fe/6x08_Deanna_Bite.png/revision/latest/scale-to-width-down/350?cb=20151201083238', 'https://vignette.wikia.nocookie.net/walkingdead/images/7/70/6x08_Deanna.png/revision/latest/scale-to-width-down/350?cb=20151201083415', 'https://vignette.wikia.nocookie.net/walkingdead/images/7/75/AMC_TWD_610_Deanna_Death.png/revision/latest/scale-to-width-down/350?cb=20160222033028']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Deanna Monroe, portrayed by Tovah Feldshuh is a former Congresswoman and the leader of the Alexandria Safe Zone. She is based on the character of Douglas Monroe from the comic books. When Rick's group arrives in Alexandria, she interviews each member and records their testimonies, believing that the tapes would be important artifacts when Alexandria rekindled civilization. Deanna is very good at reading people, and she eventually finds an ideal job for each of them to contribute in the community. Deanna is the mother of Aiden and Spencer and wife to Reg. She had to deal with the loss of her son, Aiden, who died on a run for supplies and later Reg, who was accidentally killed by Pete, their medical adviser, and these losses change her views on how Alexandria has to be run. She wanted to expand Alexandria wider and gave her plans to Rick. When the herd of walkers break into Alexandria in 'Start to Finish' she is bitten, and she tells Michonne she will kill herself when the time is right. Due to Carl and Ron fighting, the walkers end up invading the house they were in, and Deanna sends them away without her. Once the walkers reach upstairs, instead of killing herself she takes out several walkers before being consumed. She is later put down by Spencer and Michonne, then buried in the woods outside Alexandria."
            },
            {
                id: 28,
                name: "Jessie Anderson",
                photo: "https://thesupernaturalfoxsisters.files.wordpress.com/2015/03/rd-rick-jessie-the-walking-dead-conquer.jpeg",
                actor: 'Alexandra Breckenridge',
                gender: 'female',
                hair: 'blonde',
                age: 'Early to Mid 30s',
                occupation: ['Hair Stylist (Pre - Apocalypse)', 'pantry worker for the Alexandria Safe-Zone'],
                family: ['Pete Anderson - former husband (deceased)', 'Ron Anderson - son (deceased)', 'Sam Anderson - son (deceased)'],
                first_appearance: 'Remember',
                last_appearance: 'No Way Out',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'No Way Out',
                        cause_of_death: 'Devoured by walkers',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/2/25/Jessie_1.png/revision/latest/scale-to-width-down/350?cb=20160215044329']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Jessie Anderson, portrayed by Alexandra Breckenridge, is an Alexandria resident, married to Pete and mother of Ron and Sam. She mentions to Rick she is a former stylist and gives him a haircut, where it is apparent the two have romantic chemistry. It comes to light that Jessie is abused by Pete and Rick intervenes, which leads to a fight between the two men. After Rick executes Pete for killing Reg, Jessie decides to step up in the community and learns to shoot. When the Wolves attack, Jessie is tackled by one of their women and stabs her repeatedly. She then tries to convince the other Alexandrians that they can be brave and accept the harsh realities outside the walls, and begins a relationship with Rick. When the herd breaks into Alexandria, her son Sam panics during the escape attempt and is devoured in front of her. In shock, Jessie freezes and the walkers begin to rip at her, but she is still gripping tightly onto Carl's hand. Rick is forced to chop her hand off so she doesn't pull Carl into the herd with her. She and her sons are buried together in Alexandria once the herd is destroyed."
            },
            {
                id: 29,
                name: "Enid",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/55/EnidS9.jpg/revision/latest/scale-to-width-down/640?cb=20180907041326",
                actor: 'Katelyn Nacon',
                gender: 'female',
                hair: 'brown',
                age: 'Mid to Late teens',
                occupation: ['Middle Schol Student (Pre - Apocalypse)', 'member of the Militia', 'Medical Trainee of the Hilltop Colony'],
                family: ['Ron Andreson - ex-boyfriend (deceased)', 'Carl Grimes - former boyfriend (deceised)'],
                first_appearance: 'Remember',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Remember' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Enid is an Alexandria resident. She is first introduced to Carl sitting on a bed with a book while Ron and Mikey show Carl their video games. She often sneaks out of the safe zone. Eventually, Carl follows her out, but she sneaks back in away from him. Ron explains to Carl that she arrived alone and that it took her a while to speak to the other kids. Carl continues to follow her outside, which she quickly realizes. Despite her uneasiness with him stalking her, she lets him accompany her as she keeps up the survival skills she used to travel before she arrived in Alexandria. Carl also seems to have developed a crush on Enid, but appears too timid to pursue it, given his resistance to even hold her hand for more than one second. Enid finally tells Carl that she is the last survivor of her family; they were attacked and only she came out safe, traveling alone until she came across Alexandria. She helps Maggie during her pregnancy and wanted to go on the trip to the Hilltop Colony, but Carl traps her in a cupboard in fear of losing her. After learning of the deaths of Glenn and Abraham, Enid travels to the Hilltop with Carl. She and Carl share their first kiss and Enid begs Carl to not travel to the Sanctuary, but he doesn't give in. When at the Oceanside, Enid asks Carl what it's like to kill somebody, anticipating she will have to do it soon. In the Season 7 finale, Enid arrives at Alexandria with Maggie, Jesus, and the other Hilltop residents to join the battle against the Scavengers and the Saviors. In Season 8, Enid joins the others from Alexandria, Hilltop, and the Kingdom at the first assault on the Saviors at the Sanctuary. She accompanys Maggie back to Hilltop afterward. After Aaron arrives at the Hilltop with news of Eric's death, he decides they need to convince the Oceanside to join the fight against the Saviors. Enid convinces Aaron to let her go with him on the mission. Before entering Oceanside, Enid tells Aaron they need to bring them something they can use, and she finds a truck full of alcohol. They arrive at night so they decide to sleep in the car and meet with Natania and Cyndie in the morning. While they are sleeping they hear a noise and they get out of the car to investigate. Aaron is then attacked by Natania, but Enid shoots and kills her before she stabs him. Cyndie and the other women of Oceanside take Aaron and Enid prisoner. Cyndie decides to execute the two, but Enid talks her out of it and Cyndie lets them leave, but warns them to never come back. Aaron and Enid leave Oceanside. Aaron tells Enid he needs to stay and try to convince Cyndie to join the fight but she should leave and get back to Maggie and the Hilltop. Enid reluctantly leaves. After Enid returns to Hilltop, Daryl, Rosita, Tara, and the other Alexandrian's tell Enid, Maggie, Carol, and Morgan of Carl's death. Enid collapses in tears and Maggie holds her. Enid is with Michonne, Maggie, and Rosita when they meet Georgie for the first time. Enid, still angry about the Carl's death, argues with Michonne about what they should do with Georgie. Enid wants to take their stuff and kick the newcomer out. Michonne takes her gun and tells her to step back. In the finale of Season 8, Enid stays with Tara at the Hilltop to protect it if the Saviors attack. When Saviors do show up at Hilltop, Enid carries Judith to safety outside the walls. Aaron and the Oceanside show up and help defend the Hilltop."
            },
            {
                id: 30,
                name: "Spenser Monroe",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/62/AMC_610_Spencer_Woods.png/revision/latest?cb=20160222104940",
                actor: 'Austin Nichols',
                gender: 'male',
                hair: 'brown',
                age: 'Late 20s to early 30s',
                occupation: ['Lookout for the Alexandria Safe-Zone (Post - Apocalypse)'],
                family: ['Deanna Monroe - mother (deceased)', 'Reg Monroe -  father (deceased)', 'Aiden Monroe - brother (deceased)', 'Rosita Espinosa - ex-lover'],
                first_appearance: 'Forget',
                last_appearance: 'Hearts Still Beating',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'Hearts Still Beating',
                        cause_of_death: 'Disemboweled by Negan.(alive)\nStabbed in the forehead by Rick Grimes.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/b/be/Spenchersdeathverysadno.png/revision/latest/scale-to-width-down/350?cb=20161212035757', 'https://vignette.wikia.nocookie.net/walkingdead/images/2/2e/2016-12-12_%281%29.png/revision/latest/scale-to-width-down/350?cb=20161212202026']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Spencer Monroe, portrayed by Austin Nichols, is the son of Deanna and Reg, and the older brother of Aiden. He is distrustful of the Rick and his group even after his parents accept them and shows disregard for the society's regulations, especially when it comes to firearm possession and food rationing. He becomes a sniper in the bell tower with Sasha, in whom he takes an interest. When the herd came upon Alexandria, he almost died attempting to climb across a wire to reach a car and lead the herd of walkers away. Saving him almost cost Tara's life. After the events of the herd attack, he sneaks out of Alexandria to go put down his reanimated mother. Michonne follows him and then allows him to do what he wanted. In 'Twice as Far,' he awakens from sleeping with Rosita. He later asks her for a date, which she reluctantly agrees to. Spencer blames Rick for the deaths of Abraham and Glenn and even challenges Rick once after his return, but it wasn't received constructively. He tried to prove himself to the Saviors by going out alone to collect supplies, but when he reveals to Negan his desire to overthrow Rick, Negan notices how cowardly Spencer truly is. Negan doubts that Spencer has any 'guts' and slashes him across the stomach, allowing his intestines to spill out before he dies, in front of the whole community. He is left to reanimate and Rick puts him down."
            },
            {
                id: 31,
                name: "Dwight",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/7e/22221529_1868202156827414_7259248589061159331_n.jpg/revision/latest?cb=20171007175950&format=original",
                actor: 'Austin Amelio',
                gender: 'male',
                hair: 'blond',
                age: 'Late 20s to early 30s',
                occupation: ['Blue collar employee (Pre - Apocalypse)', 'former Lieutenant of the Saviors', 'former Informant for the Militia', 'former member of the Militia'],
                family: ['Sherry - ex-wife', 'Tina - sister-in-law (deceased)'],
                first_appearance: 'Always Accountable',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Always Accountable' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Dwight, portrayed by Austin Amelio, is a ruthless but reluctant member of the Saviors who forms a hostile rivalry with Daryl. He first appears in 'Always Accountable' with his wife Sherry and his sister-in-law Tina. The three of them come across Daryl in the woods and take him captive, mistaking him for a Savior coming to bring them back. Although Daryl offers to help them, they steal his motorcycle and crossbow and go back to the Sanctuary. Dwight appears later with half of his face melted and attempts to kill Daryl, but ends up shooting Denise in the eye with Daryl's crossbow. Dwight and his crew have Eugene hostage, but Eugene creates a distraction by biting Dwight in the testicles, allowing Abraham to begin firing on them. Dwight and his men retreat. After Denise's death, Daryl goes out to hunt for Dwight for vengeance. Michonne, Rosita, and Glenn follow him to lead him back, but Rosita agrees with him that they should bring down Dwight. Michonne and Glenn head back but are captured by Dwight's men. Rosita and Daryl are also found by Dwight, who then shoots Daryl. Dwight stands forward when they ambush Rick's group, taking an interest in Daryl's gear, especially his vest, motorcycle, and crossbow. After Negan takes Daryl captive, Dwight uses Daryl's motorcycle to get around. Dwight is sent to convince a renegade Savior to return to the fold, but he refuses. Dwight shoots him out of desperation. It is revealed the burn mark on his face came from Negan. After their failed escape attempt Sherry became one of Negan's wives to save them both, but Dwight and Sherry were caught illicitly seeing each other, which is punishable by a red hot iron to the face. Rosita comes across Dwight and brings him to Alexandria, where he is confronted by Daryl, Rick, Tara, Michonne, and Jesus. He tells them that he wants to join them as a double agent to take down Negan. Tara wants Daryl to kill him for killing Denise, but the Alexandrians decide they need Dwight as an ally. Dwight continues to honor their new alliance as the All Out War begins, sending secret messages and internally sabotaging the Savior's plans. He is eventually found out by Negan, yet is kept alive for Negan's unknown purposes."
            },
            {
                id: 32,
                name: "Paul 'Jesus' Rovia",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/4c/22281958_1868202016827428_6245066108732889572_n.jpg/revision/latest?cb=20171007181109&format=original",
                actor: 'Tom Payne',
                gender: 'male',
                hair: 'light brown',
                age: 'early 30s',
                occupation: ['recruiter and supply runner for the Hilltop Colony', 'member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'The Next World',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'The Next World' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Paul 'Jesus' Rovia is a friend of Rick's group and a member of the Hilltop Colony. He first met Daryl and Rick while they were on a run and stole their truck full of food. Then he fought with Daryl and Rick, who knocked him unconscious and brought him to Alexandria instead of leaving him to die. Jesus introduces them to the Hilltop in order for the two communities to become trading partners, and assists them in rescuing Craig and taking out one of the Saviors' outposts. When Maggie and Sasha make it to the Hilltop after Glenn and Abraham are killed, he is very welcoming; he constantly tries to convince Gregory of their usefulness. After the Saviors come to collect supplies, Gregory tells Jesus to follow them and find their location. He sneaks into the back of one of their supply trucks where he finds that Carl had the same idea. After infiltrating the Sanctuary, he runs into a freshly-escaped Daryl and helps him get to the Hilltop to reunite with Rick and Alexandrians."
            },
            {
                id: 33,
                name: "Gregory",
                photo: "https://static1.squarespace.com/static/57852bb69f74567650e70d5f/t/5abad5c970a6ad9323fd35bb/1468904310063/TWD_611_GP_0918_0167-RT.jpg?format=500w",
                actor: 'Xander Berkeley',
                gender: 'male',
                hair: 'gray',
                age: 'Late 50s to early 60s',
                occupation: ['former Leader of the Hilltop Colony'],
                family: ['Unknown'],
                first_appearance: 'Knots Untie',
                last_appearance: 'A New Beginning',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: 'A New Beginning',
                        cause_of_death: 'Hanged by Daryl Dixon as requested by Maggie Rhee for his treachery and subsequent attempts to assassinate her.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/c8/Gregorydies.png/revision/latest/scale-to-width-down/350?cb=20181008202531', 'https://vignette.wikia.nocookie.net/walkingdead/images/4/41/Gregoryhanged.png/revision/latest/scale-to-width-down/350?cb=20181008194701']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Gregory is the leader of the Hilltop Colony. He accepted the deal from the Saviors and later tried to break that deal with Rick's help. He was stabbed by Ethan under Negan's orders but he survived. He is seen by everyone as a great coward. Reluctantly, he ends up taking in Sasha and Maggie after Negan's ambush. He never calls Maggie by the correct name and scoffs at the idea that Maggie and Sasha could be useful. He almost gave up their hiding space to Simon in 'Go Getters,' but Jesus, not trusting him to honor their agreement, had moved the women elsewhere. In 'Rock in the Road,' Gregory refuses to assist Rick in the oncoming fight against the Saviors and is greatly criticized by the combined communities. He is visiting the Sanctuary to prove his loyalty when the combined Alexandrian forces attack and only narrowly escapes when Gabriel stops to help him. When he gets back to the Hilltop, Maggie throws him in the pen with the Savior hostages. Gregory later becomes a messenger between Dwight and the Hilltop, warning the later of Negan's next plan. This plan turns out to be faked, as Negan knew Dwight had betrayed the Saviors and that Gregory was his messenger."
            },
            {
                id: 34,
                name: "Simon",
                photo: "https://images-na.ssl-images-amazon.com/images/I/41E9EB0w0fL.jpg",
                actor: 'Steven Ogg',
                gender: 'male',
                hair: 'black (graying, balding)',
                age: 'Mid to Late 40s',
                occupation: ['Morgage Broker (Pre - Apocalypse)', 'former Second-In-Command of the Saviors', 'former Head of the Satellite Outpost', 'former De-Facto Leader of the Saviours'],
                family: ['Unknown'],
                first_appearance: 'Last Day on Earth',
                last_appearance: 'Worth',
                status: {
                    alive: '',
                    dead: {
                        status: 'dead',
                        death_episode: '"Worth"(alive), "Wrath"(zombified, off-screen)',
                        cause_of_death: 'Strangled by Negan.(alive)\nPut dwon by a Sanctuary resident.(zombified, assumed, off-screen)',
                        photo: ['src="https://vignette.wikia.nocookie.net/walkingdead/images/7/70/Simon%27sDeath-1.png/revision/latest/scale-to-width-down/350?cb=20180409040222"', 'https://vignette.wikia.nocookie.net/walkingdead/images/e/e4/TWD_815_GP_1109_0427_RT.jpg/revision/latest/scale-to-width-down/350?cb=20180409195842', 'https://vignette.wikia.nocookie.net/walkingdead/images/6/69/Simon%27sDeath-3.png/revision/latest/scale-to-width-down/350?cb=20180409040559']
                    }
                },
                ethnicity: 'Caucasian - American',
                description: "Simon (also known as Lead Savior in his first appearance), portrayed by Steven Ogg, is a psychopath high-ranking member of the Saviors who serves as Negan's right-hand man. He is first encountered in the season six finale as a roadblock to Rick's group. He talks to Rick, musing on how that day is someone's 'last day on earth.' He reappears at the end of the episode and announces to Rick's group that this is their destination. He has Dwight get Daryl, Glenn, Michonne and Rosita out of the truck, and later calls for Negan to face the fearful Alexandrians, which brings the Alexandrians under Negan's rule. Simon is the deputy in charge of relations with the Hilltop Colony and comes to remind Gregory of their agreement and how important it is for the Hilltop to keep up its end of the bargain. In the end of the seventh season Simon accompanies Negan to intimidate the Alexandrians without realizing that the community allied with Hilltop and the Kingdom. This battle is a hard blow to the Saviors, who then flee. Simon is one of Negan's deputies during the upcoming war with the allied survivors. In the episode 'How It's Gotta Be', Simon tries to capture Maggie without knowing of the surprise that this one will take. When The Scavengers form an alliance with Rick, Simon goes to The Scavengers and kills them all except for Jadis, making it clear that he is opposed to Negan's order, creating a rift with the leader of the Saviors. Simon believes that the rebellion of Alexandria, The Kingdom and Hilltop are a potential threat to them since their choice is to seek other communities to subjugate but Negan does not agree as his order is to maintain a balance without causing too much collateral damage. When Negan decides to attack Hilltop using weapons tainted with walker blood to leave a 'warning', Rick notices Negan's car and attacks the leader of the Saviors, isolating him from the others. The Saviors, including Simon and Dwight, believed that Negan was dead, and Simon immediately proclaims himself as the new leader of The Saviors. Upon Negan's return, Simon plans a coup with Dwight and other members of the Savior's. Dwight betrays Simon and Negan walks in on their meeting. Simon challenges Negan to a fight for control of the Savior's which Negan accepts, and wins, strangling Simon to death and turns into the walker. After the defeat of Negan, it is presumed that Simon is no longer seen since his zombified body is no longer chained to the fence of the Sanctuary after peace is declared between the saviors and the militia, possibly Laura or some savior with its zombification."
            },
            {
                id: 35,
                name: "Negan",
                photo: "https://cdn.theatlantic.com/assets/media/img/mt/2016/10/TWD_701_GP_0504_0183_RT/square.jpg?1522790620",
                actor: 'Jeffrey Dean Morgan',
                gender: 'male',
                hair: 'black (graying)',
                age: 'Late 40s to Early 50s',
                occupation: ['Unspecified profession dealing with children (Pre - Apocalypse)', 'former Leader of the Saviour'],
                family: [' Lucille - former wife (deceased)', 'Sherry - former "wife"', 'Amber - former "wife"', 'Tanya - former "wife"', 'Frankie - ex-"wife"'],
                first_appearance: 'Last Day on Earth',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'The Last Day on Earth' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Negan, portrayed by Jeffrey Dean Morgan, is a totalitarian and manipulative dictator who made his first appearance in the season six finale. He is the psychopathic and merciless leader of a vast organization of hostile survivors called the Saviors that he rules with tyranny. His group coerces other survivors to give the Saviors their possessions and supplies by the threat of force and intimidation. When Rick's group attempt to take Maggie to the Hilltop Colony for medical assistance, the Saviors capture them all. Negan demands that Alexandria will turn over half its supplies to him from now on, and reinforces his mandate by beating to a bloody pulp Abraham and Glenn with his barbed wire-studded baseball bat, Lucille. Negan finds his way to Alexandria, where he meets the rest of the group and, as promised, takes half of all of their supplies, furniture, and weapons. At the Sanctuary, one of his standard punishments is using a hot iron to melt the face of anyone who sleeps with any of his wives, which is how Dwight's face became scarred. When Carl sneaks into the Sanctuary and guns down Negan's men, he takes Carl and shows him around before trying to intimidate him by making him sing a song and reveal his empty eye socket. He then returns to Alexandria with Carl to wait for Rick. In the meantime, he is taken on a tour and enjoys a meal with Carl, Olivia, and Judith. Before Rick returns, Spencer tries to ingratiate himself with Negan by offering him a drink and playing pool with him. However, when Spencer reveals his desire for Rick to be deposed, Negan suggests that he 'has no guts' for not killing Rick himself and just taking over. He then guts Spencer and Rosita to attempts to shoot him. Rosita misses and shoots Lucille instead. Furious not only at Lucille's marring but also at the presence of a bullet in Alexandria, Negan demands that Rosita tell him who made it. When Rosita refuses, Negan tells one of his soldiers to pick someone to shoot; she turns and shoots Olivia through the head. Eugene confesses to manufacturing the bullets and Negan orders him to be taken. Negan leaves when Rick gets back, stating that he helped him and cleared up his mess. After Sasha is captured, Negan takes her as a show of goodwill to the Alexandrians even though he has allied with the Scavengers to double-cross them. He is taken by surprise to see that Rick formed alliances with the Kingdom and Hilltop and the communities had formed a militia. Their arrivals force Negan and his henchmen to retreat. In the season eight premiere, Rick and his soldiers go to the Sanctuary to tell Negan that they will not submit to his tyranny and that, if the Saviors will cease their terror, they can all continue in peace. Negan rejects Rick's offer and fighting begins. In the episode 'The Big Scary U', he confesses to Gabriel the past of his deceased wife Lucille and his inability to put her down after her reanimation. In the season finale, 'Wrath', Rick's group shows up to challenge the Saviors. Negan orders his men to open fire, but discovers that Eugene has tampered with their weapons, rendering them helpless. Rick's group kills several of Negan's men, while Rick and Negan have a final battle that ends with Rick cutting Negan's throat open. Rick saves Negan's life, however, as he believes it is what Carl would want. They take Negan back to Alexandria, where Rick and Michonne inform him that they will imprison him for the rest of his life."
            },
            {
                id: 36,
                name: "King Ezekiel",
                photo: "https://i1.sndcdn.com/artworks-000191509264-wbx99l-t500x500.jpg",
                actor: 'Khary Payton',
                gender: 'male',
                hair: 'gray',
                age: 'Late 40s to Early 50s',
                occupation: ['Amateur theater actor (Pre - Apocalypse)', 'Zookeeper (Pre - Apocalypse)', 'Leader of the Kingdom', 'Co-Leader of the Militia'],
                family: ['Shiva - pet tiger (deceased)', 'Carol Peletier - girlfriend', 'Henry - adopted son'],
                first_appearance: 'The Well',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'The Well' to present",
                    },
                    dead: ''
                },
                ethnicity: 'African - American',
                description: "King Ezekiel, portrayed by Khary Payton, is the leader of a community known as the Kingdom. A former actor and zookeeper, Ezekiel created his persona as a king alongside a pet Bengal tiger he rescued from the zoo, Shiva . When Carol is taken to the Kingdom, she and Ezekiel form a tentative friendship. When the Saviors escalate their harassment of the Kingdom, Ezekiel begins to realize that their relatively peaceful lifestyle cannot continue and accepts the invitations of Jesus, Morgan, and Rick to band together and fight the Saviors. He maintains his kingly persona as he leads his troops into the battle where they kill a large number of Saviors and believe themselves to be victorious. Not long afterward, they come into the line of fire of Savior snipers who kill all of Ezekiel's fighters except for Jerry and Carol and wound Ezekiel himself. As they try to escape the compound, Shiva finds them threatened by walkers and sacrifices herself to save Ezekiel. Only then does his facade break down. When he returns to the Kingdom, devastated, he retreats to his rooms and will see no one. He only reappears when the Saviors come to remove everyone from the Sanctuary, sacrificing himself as a distraction so his people could escape and padlocking the gates so the Saviors could not overrun their home."
            },
            {
                id: 37,
                name: "Jadis / Anne",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/d8/22196503_1868202323494064_5548716762526327474_n.jpg/revision/latest?cb=20171007183755&format=original",
                actor: 'Pollyanna McIntosh',
                gender: 'female',
                hair: 'brown/blonde',
                age: 'Mid to Late 30s',
                occupation: ['Teacher (Pre - Apocalypse)', 'Artist (Pre and Post - Apocalypse)', 'former LEader of the Scavengers'],
                family: ['Unknown'],
                first_appearance: 'New Best Friends',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'New Best Friends' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: "Jadis (or known as 'Anne'), portrayed by Pollyanna McIntosh, is the oddly-spoken and enigmatic leader of the Scavengers. She is calm and collected, but also very cunning and sly. Her group kidnapped Gabriel and then ambushed Rick's team as they searched for him. When asked by Rick to join forces to defeat the Saviors, Jadis is reluctant but takes it into consideration after being told that they could gain more supplies. Jadis tells Rick he needs to prove his worth and she pushes him down a trash heap into a pit of trash and metal. After watching Rick kill a heavily armored walker, she tells him that she and her people will help him, but that they need a lot of guns. When Rick's group delivers 63 guns to her, she tells him that it is not enough, claiming they need nearly twice as many guns. Rick and Jadis renegotiate and agree that he will keep 20 of the guns while he searches for more. He finds the needed guns at Oceanside, seemingly clinching the Scavengers' support. The day of the battle, she crudely propositions Rick upon arrival at Alexandria. Together, the Scavengers and the Alexandrians wire up bombs at the gates ready for the enemy. When the explosion fails as Negan and his men wait by the gates, Jadis pulls a gun on Rick and the Scavengers follow suit with the rest of the Alexandrians. She reveals that she told Negan of Rick's plan and was offered a 'better deal' by the Saviors. When the Saviors get distracted by the re-animated Sasha, Rick attempts to make another deal with her, but Jadis refuses and shoots him in the abdomen; she pushes him off the platform. During the battle, she flees with her group through smoke bombs. After the war between the Saviors and the banded survivors has begun, Rick again attempts to get Jadis on his side. She imprisons him in a shipping container, only releasing him to fight with another armed walker. He decapitates the walker and disarms her men, giving her new terms which she appears to accept. In the episode 'The Key', Jadis captures Negan at gunpoint, in trying to take justice for the death of his camp at the hands of Simon. Jadis seeing the sincerity of Negan she decides to let him go. In the season finale, 'Wrath', Jadis tells Morgan that he can call her 'Anne'. Morgan comes to the junkyard and tells her she can go anywhere she wants now that Negan has been defeated, so she leaves, but he stays in her place."
            },
            {
                id: 38,
                name: "Siddiq",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/e/e7/SiddiqS9.jpg/revision/latest?cb=20180916003718&format=original",
                actor: 'Avi Nash',
                gender: 'male',
                hair: 'dark brown',
                age: 'Early 30s',
                occupation: ['Resident Doctor (Pre - Apocalypse)', 'Medic for the Alexandria Safe-Zone', 'member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'Mercy',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'Mercy' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Arab - American',
                description: "Siddiq, portrayed by Avi Nash, debuts in the first episode of season eight. He is first seen surrendering to Carl and tells him that he hasn't ate in a few days. When Carl suddenly points a gun at Siddiq, he tries to calm Carl down and then Rick comes and fires a few warning shots which makes Siddiq run away. Later, Carl returns and leaves two cans of food with a note saying: 'Sorry.' Siddiq watches Carl from the bushes as he walks away."
            },
            {
                id: 39,
                name: "Alden",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/48/Season_eight_alden.png/revision/latest/scale-to-width-down/350?cb=20180409223543",
                actor: 'Callan McAuliffe',
                gender: 'Male',
                hair: 'Brown',
                age: 'Early to mid 20s',
                occupation: ['Former member of the Saviors', 'Member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'The Damned',
                last_appearance: 'present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: "'The Damned' to present",
                    },
                    dead: ''
                },
                ethnicity: 'Caucasian - American',
                description: " He was a member of the Saviors before defecting to the Militia following the attack on the Hilltop. Following the defeat of the Saviors, Alden chooses to remain at the Hilltop to help build up the community.\n\t\tUnlike most of his fellow Saviors who tend to have a rough and often volatile nature, Alden is level-headed and tends to avoid violence and bloodbaths if he can help it, shown when he immediately surrendered to the Militia and talked his fellow men into doing the same instead of starting more bloodshed. In the makeshift prison at Hilltop, he deliberately bumped Jared and told him to not cause any more trouble after already risking their lives twice with escape attempts. Alden appeared to take up a leadership role with the Savior prisoners, attempting to negotiate with Maggie on their behalf. In return, Maggie appeared to treat Alden as the leader of the prisoners and showed him a level of respect that many of the others didn't receive.\n\t\tAs he spends more time as a prisoner of the Militia, Alden becomes more and more disillusioned with the Saviors. After Simon shows no care for the prisoners, Alden cuts all ties with the Saviors and states that the Saviors aren't his people anymore when sent to bury the dead Saviors. Alden's disillusionment goes so far that he chooses to stay at the Hilltop willingly rather than return to the Saviors when given the chance despite knowing that the Saviors' lack of care towards the prisoners means that he no longer has any strategic value to the Militia."
            }
        ]
    },
    {
        supporting_cast: [
            {
                id: 40,
                name: "Amy",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/23/Amy.1.jpg/revision/latest?cb=20120817232302&format=original",
                actor: 'Emma Bell',
                gender: 'Female',
                hair: 'Blonde',
                age: '24',
                occupation: ['College Student (Pre - Apocalypse)'],
                family: ['Andrea - sister (deceased)'],
                first_appearance: 'Days Gone Bye',
                last_appearance: 'Hounded (voice only/hallucination)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Vatos (alive), Wildfire (zombified)',
                        cause_of_death: 'Bitten by a walker.(alive)\nShot in the head by Andrea (zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/3/37/AmyDeath.jpeg/revision/latest/scale-to-width-down/350?cb=20121018154019', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/ca/Vlcsnap-2014-01-26-13h17m51s146.png/revision/latest/scale-to-width-down/350?cb=20140126181906']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Amy is is Andrea's younger sister. When the dead begin to rise, Amy and Andrea joined the survivor group existing on the outer limits of the overrun city of Atlanta. She decided to stay at the camp whilst Andrea was still in Atlanta. She and her sister spent most of the time fishing for the group. In 'Vatos,' the night before her birthday, Amy is bitten by a walker in the opening stages of a walker swarm's attack on the exposed camp and dies in Andrea's arms. Andrea is distraught after Amy's death and wants to stay in the CDC and die, but Dale convinces Andrea not to."
            },
            {
                id: 41,
                name: "Theodore 'T-Dog' Douglas",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/a/ab/Tdogportrait.jpg/revision/latest/scale-to-width-down/359?cb=20120914135211",
                actor: 'IronE Singleton',
                gender: 'Male',
                hair: 'Black',
                age: 'Mid 30',
                occupation: ['Former College Football Player (Pre - Apocalypse)', 'supply runner for the Atlanta Camp'],
                family: ['Unknown'],
                first_appearance: 'Guts',
                last_appearance: 'Killer Within',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Killer within',
                        cause_of_death: 'Bitten and later devoured by walkers in order to save Carol Peletier.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/1/1b/TDogBit_%28Killer_Within%29.PNG/revision/latest/scale-to-width-down/350?cb=20140419103311', 'https://vignette.wikia.nocookie.net/walkingdead/images/9/96/IMG_20140918_201438.jpg/revision/latest/scale-to-width-down/350?cb=20140918192916']
                    }
                },
                ethnicity: "African - American",
                description: "Theodore 'T-Dog' Douglas is a muscular and well-intentioned man, who becomes extremely loyal to Rick. He is part of the group Rick meets in the Atlanta department store, and after Rick subdues Merle he accidentally drops the key to the handcuffs down a drainpipe leaving Merle trapped on the rooftop. T-Dog, Glenn, Rick, and Daryl go back to save Merle, but find them he cut his own hand off to free himself. T-Dog later cuts himself on an abandoned car on the highway and develops blood poisoning. He travels with the group to Hershel's farm and survives its destruction before traveling to the prison. He helps clear the prison but is bitten while securing the gate. He later sacrifices himself to save Carol during a walker attack."
            },
            {
                id: 42,
                name: "Sophia Peletier",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/7e/A2ivrh_CUAASgjG.jpg/revision/latest/scale-to-width-down/320?cb=20120922025005",
                actor: 'Madison Lintz',
                gender: 'Female',
                hair: 'Strawberry Blonde',
                age: '12',
                occupation: ['Assumed Secondary School Student (Pre - Apocalypse)'],
                family: ['Carol Peletier - mother', 'Ed Peletier - father -deceased)'],
                first_appearance: 'Tell it to the Frogs',
                last_appearance: 'Nebraska (corpse)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'What Lies Ahead (alive, off-screen), Pretty Much Dead Already (zombified, out of mercy)',
                        cause_of_death: 'Bitten on the shoulder by a walker and died of the infection.(alive, off-screen)\nShot in the head by Rick Grimes.(zombified, out of mercy)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/6/67/Screen_Shot_2014-10-04_at_16.22.58.png/revision/latest/scale-to-width-down/350?cb=20141004152222', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c3/The-Walking-Dead-Season-2-Episode-8-Photos-4.jpg/revision/latest/scale-to-width-down/350?cb=20120222214555']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Sophia Peletier is Carol and Ed Peletier's 12-year-old daughter. Sophia and her mother are shown to be closer to the Grimes family after Ed is killed by a walker, and both Sophia and her mother become more outspoken and happy following Ed's demise. In the season two premiere, walkers chase Sophia into the woods, and she becomes detached from the group. The group searches for her, but in 'Pretty Much Dead Already,' it is revealed that Sophia became a walker and was being kept in Hershel's barn. Rick remorsefully shoots her, and she is buried at the farm."
            },
            {
                id: 43,
                name: "Axel",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/2f/The-Walking-Dead-Season-3-Episode-2-Sick-4.jpg/revision/latest/scale-to-width-down/640?cb=20121107154250",
                actor: 'Lew Temple',
                gender: 'Male',
                hair: 'Blond',
                age: 'Early to Mid 40s',
                occupation: ['Possible Motorcycle Mechanic (Pre - Apocalypse)'],
                family: ['Unknown'],
                first_appearance: 'Seed',
                last_appearance: 'Home',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Home',
                        cause_of_death: 'Shot in the hed by The Governor.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/f4/AxelTVDeath.png/revision/latest/scale-to-width-down/350?cb=20130218030515', 'https://vignette.wikia.nocookie.net/walkingdead/images/0/07/640px-Axel_Muerto_3x10.jpg/revision/latest/scale-to-width-down/350?cb=20130225202153']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Axel, a character from the comics, is an inmate-survivor at the prison, who was jailed for armed robbery. He initially leads others to believe he was in for a narcotics conviction. He appears to be much kinder than his fellow inmates and tends to calm things down. After Tomas' attempt at killing Rick, he and Oscar are accused of collaborating with Tomas and Andrew to kill Rick and his group. After Rick's group dispatches with Tomas and Andrew, Rick's group holds Axel and Oscar at gunpoint. After Axel begs for mercy and pleads that he and Oscar were not in on Tomas' plan, Rick decides to spare him and Oscar and allow them to live in another cellblock. Axel later pleads with Rick to let him and Oscar join Rick's group, but his request is denied. After helping the group clear out walkers that Andrew induced to invade the prison, Axel and Oscar are finally accepted into the group. Axel becomes close friends with Carol; as he amuses her with tales about his previous life, he is unexpectedly shot in the head by The Governor, in the opening volley of The Governor's attack on the prison. Carol uses Axel's body as a shield from the assault. In a later episode, Daryl tells Andrea that everybody liked Axel and he was part of the group. Axel was the last surviving prison inmate."
            },
            {
                id: 44,
                name: "Karen",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/06/Karen_4x02.jpg/revision/latest?cb=20131019143605&format=original",
                actor: 'Melissa Ponzio',
                gender: 'Female',
                hair: 'Dark Brown',
                age: 'Mid to Late 30s',
                occupation: ['Teacher (Pre - Apocalypse)'],
                family: ['Tyreese Williams - former boyfriend (deceased)'],
                first_appearance: 'Th Suicide King',
                last_appearance: 'Consumed (flashback/corpse)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Infected',
                        cause_of_death: 'Stabbed in the head and then later burned by Carol Peletier.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/2/2f/IDCE_Carol_stabbed_Karen.png/revision/latest/scale-to-width-down/350?cb=20170903033849', 'https://vignette.wikia.nocookie.net/walkingdead/images/7/76/KarenandDavidD.png/revision/latest/scale-to-width-down/350?cb=20131024111322']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Karen is one of The Governor's enforcers tasked with protecting Woodbury's wall. She is seen trying to leave Woodbury when conditions worsen, and she becomes angry when Noah is forced to join Woodbury's army. She is among The Governor's soldiers, who attack and fail to take over the prison. When the army rebels against returning to the prison, The Governor shoots all of them, except his top henchmen (Martinez and Shumpert), and Karen, who hides under a body and survives. She is found hiding in a truck by Rick, Michonne, and Daryl, and is among the Woodbury citizens, who are taken to the prison. By the time season four begins, she has started a relationship with Tyreese. When an influenza outbreak spreads throughout the prison, Karen begins to get sick and is quarantined until she gets better. However, Carol kills Karen and burns her body in an attempt to keep the virus from spreading."
            },
            {
                id: 45,
                name: "Caesar Martinez",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/38/The-walking-dead-dead-weight-4.jpg/revision/latest?cb=20131125174141&format=original",
                actor: 'Jose Pablo Cantillo',
                gender: 'Male',
                hair: 'Black',
                age: 'Early to mid 30s',
                occupation: ['Former Woodbury guard', 'Former second-in-command of Woodbury army'],
                family: ['Unknown'],
                first_appearance: 'Walk With Me',
                last_appearance: 'Dead Weight',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Dead Weight',
                        cause_of_death: 'Hit in the head adn fed to walkers by The Governor.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/8/8d/TGMurderingMartinez.jpg/revision/latest/scale-to-width-down/350?cb=20131127202909']
                    }
                },
                ethnicity: "Hispanic - American",
                description: "Caesar Martinez is one of The Governor's enforcers; he becomes The Governor's most trusted enforcer after Merle defects. Martinez is a sharpshooter, who favors a baseball bat; he is also shown wearing a baseball jersey bearing the number 23. He reveals to Daryl that walkers killed his wife and children when the apocalypse began. Merle, who acts as Martinez's sparring partner in Woodbury's gladiator-style tournaments, refers to him both as 'Brownie' and as 'Bro' in the same conversation because Merle was a redneck and junkie ('Say the Word'). Martinez assists in all of The Governor's attacks against the prison, although he is shocked when The Governor massacres his own army ('Welcome to the Tombs'). Because Martinez and Shumpert didn't disobey him in that episode, The Governor spares them, and together, the three depart. In 'Live Bait,' which reveals what occurred to the trio after The Governor slaughtered the Woodbury army, Martinez puts down a walker, who approaches The Governor and seems to have fallen into in an indifferent stupor. The next morning, The Governor awakens to find Martinez and Shumpert have abandoned him to fend for himself. Martinez and The Governor reunite when Martinez finds him in the pit trap. As revealed in 'Dead Weight,' Martinez has established himself as the leader of his group, with seconds-in-commands Pete and Mitch Dolgen. Martinez is comforted by The Governor's having apparently changed his ways (evidenced by his having started over with a new family). While playing golf with The Governor, Martinez reveals that Shumpert had died and admits to his worries about keeping the group safe. After Martinez proposes sharing leadership with him, The Governor strikes him down and feeds him to a pit of walkers."
            },
            {
                id: 46,
                name: "Milton Mamet",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/dd/MiltonS3.jpg/revision/latest/scale-to-width-down/319?cb=20121108100856",
                actor: 'Dallas Roberts',
                gender: 'Male',
                hair: 'Dark Blond',
                age: 'Early to mid 30s',
                occupation: ['Researcher/Scientist (Pre and Post - Apocalypse)'],
                family: ['Unknown'],
                first_appearance: 'Walki With Me',
                last_appearance: 'Welcome To The Tombs (alive and zombified)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Welcome To The Tombs',
                        cause_of_death: 'Stabbed repeatedly in the abdomen by The Governor and left to bleed out.(alive)\nStabbed in the head by Andrea.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/1/1c/Milton_Death_Pic_2.png/revision/latest/scale-to-width-down/350?cb=20130401050723', 'https://vignette.wikia.nocookie.net/walkingdead/images/f/f9/Miltondead.png/revision/latest/scale-to-width-down/350?cb=20130401041738']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Milton Mamet is a scientist, who serves as one of The Governor's right-hand men. He knew Phillip Blake before Phillip became 'The Governor,' and thus had a long-term relationship with him. Although Milton has allied himself with The Governor, he seems to disagree with The Governor's violent and unethical methods. He studies the decapitated bodies of Michonne's pair of walkers and researches the possibility of appealing to Michael Coleman's humanity, after Coleman dies and reanimates. Milton later helps Andrea escape to go try to make peace with Rick, and accompanies The Governor to the peace meeting with Rick. He expresses misgivings about The Governor's methods when he learns The Governor plans to kill everyone at the prison except for Michonne. He later tells Andrea to escape and, it is implied, he burns the captured walkers The Governor planned to use against the prison group. The Governor realizes that Milton revealed his plan to Andrea, and this causes a rift in Milton and The Governor's relationship. When Milton challenges The Governor to give up the war and forego avenging Michonne's vanquishing of zombified Penny, The Governor restrains and badly beats Milton for his betrayal. He then tasks Milton to kill Andrea, but Milton instead attacks The Governor, who then stabs Milton, mortally wounding him. The Governor locks Milton in the torture chamber with Andrea, deciding to let the reanimated Milton eat her. However, Milton attempts to assist Andrea by planting a pair of pliers within her reach with which to free herself and stab the zombified Milton in the head. Andrea fails to free herself in time, and a zombified Milton bites her before she puts him down. Rick's group later finds his body with a bitten, but alive, Andrea."
            },
            {
                id: 47,
                name: "Lizzie Samuels",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/f7/Inmates_Mika_and_Lizzie.png/revision/latest/scale-to-width-down/640?cb=20140217202533",
                actor: 'Brighton Sharbino',
                gender: 'Female',
                hair: 'Dirty Blonde',
                age: '12',
                occupation: ['Assumed Grade School Student (Pre - Apocalypse)'],
                family: ['Mika - sister (deceased)', 'Ryan Samuels - father (deceased)', 'Carol Peletier - adoptive mother'],
                first_appearance: '30 Days Without An Accident',
                last_appearance: 'What Happened and What"s Going On (hallucination',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'The Grove',
                        cause_of_death: 'Shot in the back by Carol Peletier',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/0/04/Carolshootinglizzie.PNG/revision/latest/scale-to-width-down/350?cb=20140317031320']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Lizzie Samuels is Ryan's daughter and Mika's sister. She was first seen with other children naming zombies, and later at storytime. During the outbreak her father is bitten, and before dying he asks Carol to look after his daughters. Lizzie expresses intentions to stab his corpse in the head to prevent renanimation, but is emotionally unable to. Carol later tells her she is weak and needs to toughen up. Lizzie later gets the flu and is forced into quarantine. Carol is disturbed by Lizzie's apparently personal connection with walkers. When some infected residents succumb to the virus and reanimate, Lizzie rescues Glenn from a walker by leading it away. After being treated with medicine, she plays with Glenn's blood. When The Governor attacks the prison, she convinces the other children to help in the battle. She and Mika rescue Tyreese from two of The Governor's soldiers, after which she escapes with the children and Tyreese. Lizzie, Mika, Tyreese, and Judith get separated from Molly and Luke. Lizzie also is very sure Sasha is dead. She also shows a disliking towards Tyreese. After Lizzie kills Mika, Carol and Tyreese realize that she is too psychotic to be kept around & had to be executed in order for Judith to be safe, so Carol leads her out to the fields to look at the flowers, and as Lizzie tried to apologize for having threatened Carol and Tyreese, Carol executed her."
            },
            {
                id: 48,
                name: "Mika Samuels",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/9a/600px-TWDS4E14_02.jpg/revision/latest?cb=20140319202054&format=original",
                actor: 'Kyla Kenedy',
                gender: 'Female',
                hair: 'Blonde',
                age: '10',
                occupation: ['Elementary school Student (Pre - Apocalypse)'],
                family: ['Lizzie - sister (deceased)', 'Ryan Samuels - father (deceased)', 'Carol Peletier - adoptive mother'],
                first_appearance: '30 Days Without An Accident',
                last_appearance: 'What Happened and What"S Going On (hallucination)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'The Grove',
                        cause_of_death: 'Stabbed in the stomach by Lizzie Samuels.(alive, off-screen)\nPut down by Carol Peletier.(before reanimation, off-screen)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/6/61/Sisters.png/revision/latest/scale-to-width-down/350?cb=20140319000524']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Mika Samuels is Ryan's daughter and Lizzie's sister. She is seen naming the walkers and later at storytime. She loses her father during the outbreak and tries to calm Lizzie when Lizzie panics after being unable to stab her bitten father's corpse in the head to prevent reanimation. She and Lizzie become the adoptive daughters of Carol Peletier, as per their father's last wish. When The Governor attacks the prison, Mika and Lizzie rescue Tyreese from two soldiers. She escapes with the children and Tyreese. It is revealed that Mika, Lizzie, Tyreese, and Judith have been separated from Luke and Molly. Mika appears to be saddened by this. Lizzie, believing she will come back, kills Mika, and planned to kill Judith until Tyreese and Carol intervened."
            },
            {
                id: 49,
                name: "Lilly Chambler",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/90/Too_Far_Gone_24.png/revision/latest?cb=20140423022306&format=original",
                actor: 'Audrey Marie Anderson',
                gender: 'Female',
                hair: 'Brown',
                age: 'Mid to late 30s',
                occupation: ['Nurse (Pre - Apocalypse)'],
                family: ['David Chambler - father (deceased)', 'Tara Chambler - sister', 'Meghan Chambler - daughter (deceased)', 'Phillip Blake - ex-boyfriend (deceased)'],
                first_appearance: 'Life Bait',
                last_appearance: 'Too Far Gone',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Too Far Gone (off-screen), Inmates (confirmed death)',
                        cause_of_death: 'Surrounded and then devoured by walkers. (off-screen)',
                        photo: ['']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Lilly Chambler is David's daughter, Meghan's mother, and Tara's sister. She is initially somewhat hostile towards The Governor ('Brian') and reluctantly allows him to take refuge in her family's building. She slowly comes to trust him, especially after he risks going to a walker-overrun assisted living facility to retrieve oxygen tanks for David, who is suffering from stage-4 lung cancer and will soon die (which she knows will be especially devastating to Meghan). When 'Brian' kills the reanimated David, Lilly appears to be upset for a brief while, but soon comes to terms with what happened. After David's burial, the four of them depart in search of other shelter. They spend the night sleeping in a catering truck, and Lilly and 'Brian' lay awake talking to each other. Slowly, they then begin to have sex. When the truck fails to start, the group abandons it and wanders on the road, until a swarm of walkers forces them to flee. They arrive at an open field, only to be stopped once again, when 'Brian' and Meghan fall into a pitfall trap containing several walkers, all of which 'Brian' kills before they can do any harm. Lilly and her family join Martinez's group. She is initially against The Governor's attacking the prison, but he assures her that she and Meghan will be safe. She and her daughter are left near a river; however, Meghan is bitten by a walker and dies. Lilly brings Meghan's corpse to the prison, where she witnesses The Governor decapitate Hershel and shoot Meghan in the head. After the battle ends, a bitter Lilly walks up to the dying Governor and shoots him in the head. Tara later mentions to Glenn that she witnessed Lilly become overwhelmed by walkers following the assault on the prison. She was eaten by walkers."
            },
            {
                id: 50,
                name: "Joe",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/a/ac/Red-machete-joe-kober-800x600.jpg/revision/latest?cb=20180812232140&format=original",
                actor: 'Jeff Kober',
                gender: 'Male',
                hair: 'Gray',
                age: 'Mid 50s',
                occupation: ['Mechanic (Pre - Apocalypse)', 'Leader of the Claimers'],
                family: ['Unknown'],
                first_appearance: 'Claimed',
                last_appearance: 'A',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'A',
                        cause_of_death: 'Neck bitten and jgular ripped out by Rick Grimes.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/3/3f/Joe-Throat.PNG/revision/latest/scale-to-width-down/350?cb=20141001034054']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Joe is the leader of the Claimers, first seen by Rick on the porch of the house that they were raiding in 'Claimed.' He later appears in 'Alone,'' when his group finds Daryl exhausted on the road after he is separated from Beth. Despite a close encounter with Daryl punching Joe and almost shooting him, Joe is impressed by Daryl's use of a crossbow and decides to recruit him. Joe's group eventually catches Rick, Michonne and Carl, with the intent to avenge Lou's death. During the ensuing fight, Rick kills Joe by ripping his jugular out with his teeth."
            },
            {
                id: 51,
                name: "Mary",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/10/Feat-Caption416.png/revision/latest?cb=20140328025552&format=original",
                actor: 'Denise Crosby',
                gender: 'Female',
                hair: 'Auburn',
                age: 'Mid to late 50s',
                occupation: ['Uknown'],
                family: ['Gareth - son (deceased)', 'Alex - son (deceased)'],
                first_appearance: 'Us',
                last_appearance: 'No Sanctuary',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'No Sanctuary',
                        cause_of_death: 'Shot in the leg by Carol and then devoured by oncoming walkers.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/a/ae/Mary_Death2.png/revision/latest/scale-to-width-down/350?cb=20180613203355', 'https://vignette.wikia.nocookie.net/walkingdead/images/d/da/Mary_Death1.png/revision/latest/scale-to-width-down/350?cb=20141013071110']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Mary is the mother of Gareth and Alex, who greets Glenn, Maggie, Sasha, Bob, Tara, Abraham, Eugene and Rosita when they arrive at Terminus. After Carol attacks Terminus to rescue Rick's group, she encounters Mary. Carol holds Mary at gunpoint, demanding to know where the group is holding Rick and the others. Mary explains that Terminus originally was a sanctuary, but it became a place where they would lure people to take their possessions and ultimately, eat them. Carol shoots her in the leg and allows a group of walkers to devour the crippled Mary. In 'Coda,' Father Stokes discovers Mary's Bible at the Hunters' campsite outside the elementary school, with the inscription 'Mary B.' on the first page."
            },
            {
                id: 52,
                name: "Dr Steven Edwards",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/30/Steven_Edwards_Crop.png/revision/latest?cb=20141027194543",
                actor: 'Eric Jensen',
                gender: 'Male',
                hair: 'Light brown',
                age: 'Late 30s',
                occupation: ['Internal Medicine Doctor (Pre and Post - Apocalypse)'],
                family: ['Unknown'],
                first_appearance: 'Slabdown',
                last_appearance: 'Coda',
                status: {
                    alive: "",
                    dead: "",
                },
                ethnicity: "Caucasian - American",
                description: "Dr. Steven Edwards is the hospital's sole doctor, who has a polite, but nervous demeanor to him. He noticeably disapproves of the harsh methods by which Officers Lerner and Gorman run the hospital, but despite his objections, his position is valued by the officers as the only medical professional on hand. He initially cares for Beth as she recovers and does his best to protect her from the officers, saying that he refuses to leave because, as ruthless as the officers are, it is still better inside the hospital than out in the real world. However, Beth grows suspicious of him when he tells her to give the drug Clozapine to Gavin Trevitt, a patient, who is also a doctor, as the drug ends up killing him. Although Dr. Edwards insists that he actually said Clonazepam, Beth is certain that he told her the name of the wrong drug on purpose. She accuses him of having the other doctor poisoned in order to retain his valued status as the only doctor, which he denies. He later helps Beth save Carol's life by telling her which medication she will need to give Carol. After the deaths of Beth and Lerner, Edwards offers to let Rick's group stay at the hospital, but Rick refuses."
            },
            {
                id: 53,
                name: "Dawn Lerner",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/11/AMC_504_Dawn_and_Steven.png/revision/latest/scale-to-width-down/640?cb=20141108122342",
                actor: 'Christine Woods',
                gender: 'Female',
                hair: 'Dark Brown',
                age: 'Mid 30s',
                occupation: ['Lieutenant of Atlanta Police Department  (Pre and Post - Apocalypse)', 'former leader of Grady Memorial Hospital'],
                family: ['Unknown'],
                first_appearance: 'Slabdown',
                last_appearance: 'Coda',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Coda',
                        cause_of_death: 'Shot in the head by Daryl Dixon.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/b/b1/508_Dawn_Death.png/revision/latest/scale-to-width-down/350?cb=20141201034703']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Officer Dawn Lerner is the strict leader of the hospital, enforcing the rules with her group of fellow officers (who are the only occupants of the hospital to possess weapons). She believes that everyone must contribute to 'the greater good' and keep the hospital operation running long enough for the military to come save them, and often uses this mentality as a form of guilt in order to persuade those that they capture into doing work for the hospital once they recover. Though she is aware of Gorman's treatment of female patients, she does little to stop it. Lerner also treats the patients cruelly herself, repeatedly taking out her anger on Beth by striking her for the slightest mistakes or misunderstandings. Despite Beth's attempts to convince her that help will never come, Lerner refuses to believe it and insists that things will get better eventually, and it is far better to live under her rule than in the wilderness outside. Though she is furious at Beth for (as Lerner believes) killing Gorman and Joan as well as aiding Noah in his escape, she still refuses to kill or exile Beth, as she needs the extra help around the hospital. Though she tries to develop a bond with Beth, Beth is ultimately convinced that Lerner will never change, and her vision of a better future clouds her reasonable judgment. In the prisoner exchange at the end of 'Coda,' when Beth stabs Lerner in the shoulder with a pair of scissors, Lerner reacts impulsively in a moment of shock and her gun discharges, firing a single bullet directly through Beth's head and killing her instantly. Although Lerner pleads for mercy, Daryl shoots her directly in the forehead immediately afterward."
            },
            {
                id: 54,
                name: "Noah",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/27/S5E4_Noah_11.jpg/revision/latest?cb=20141104015020&format=original",
                actor: 'Tyler James Williams',
                gender: 'Male',
                hair: 'Black',
                age: 'Late teeens',
                occupation: ['Former Ward at Grady Memorial Hospital', 'Supply runner for the Alexandria Safe-Zone'],
                family: [''],
                first_appearance: 'Slabdown',
                last_appearance: 'The Day Will Come When You Won"t Be (archive footage) ',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Spend',
                        cause_of_death: 'Devoured by walkers.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/8/89/Spend_promo_image_12.jpg/revision/latest/scale-to-width-down/350?cb=20150316231150']
                    }
                },
                ethnicity: "African - American",
                description: "Noah is a young male patient at the hospital, who often works as a janitor. He tells Beth that both he and his father were discovered by the group while the two of them were being surround by walkers, and their rescuers said that they could only save one of them. For this reason alone, Noah displays strong distaste for the officers almost immediately, saying that with their weapons and manpower, they likely could have saved his father as well. When Beth accidentally kills Dr. Gavin Trevitt by giving him the wrong medication, Noah takes the blame by saying that while he was cleaning, he knocked over a ventilation system and caused Trevitt to flatline. For this, Officers Dawn Lerner and Gorman take him out into the hall and beat him. Beth later apologizes, only for Noah to insist that he's fine and has been through worse. Nevertheless, Beth decides to form a plan for her and Noah to escape. They use the elevator shaft, which has served as a body disposal chute, and with a long chord of sheets tied together, they both make it down, although Noah loses his grip and falls, spraining one ankle. They both manage to make it outside, where Beth fends off several walkers with a handgun. Although Beth is stopped and restrained by the officers, Noah manages to make it to the outer gate and slips through, running off after he and Beth exchange a final glance. Noah later encounters Daryl Dixon and Carol Peletier and learns of their connection to Beth, but Carol is caught and Daryl takes Noah back to the church to take the rest of the group back to Atlanta to get Beth and Carol back. However, Beth is killed by Dawn and Rick allows Noah to stay with the group. In 'Spend,' Noah is killed by walkers during a botched mission to scavenge parts to repair Alexandria's solar power system."
            },
            {
                id: 55,
                name: "Sam Anderson / Ron Anderson",
                photo: ["https://vignette.wikia.nocookie.net/walkingdead/images/9/9e/Play-time-is-over-overghfh.jpg/revision/latest?cb=20160218181913", 'https://vignette.wikia.nocookie.net/walkingdead/images/5/5a/AMC_607_Ron_Up_to_No_Good.png/revision/latest/scale-to-width-down/640?cb=20151124163606'],
                actor: 'Major Dodson / Austin Abrams ',
                gender: 'Male / Male',
                hair: 'Dirty Blonde / Light Brown',
                age: '10-12 / Mid to late teens',
                occupation: ['Assumed Elementary School Student (Pre - Apocalypse)', 'Student'],
                family: ['Pete Anderson - father (deceased)', 'Jessie Anderson - mother (deceased)', 'Ron Anderson - brother (deceased)', 'Sam Anderson - brother (deceased)'],
                first_appearance: 'Remember',
                last_appearance: 'No Way Out',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'No Way Out',
                        cause_of_death: 'Sam - Devoured by walkers. / Ron - Stabbed through the heart by Michonne to protect Rick from being shot, then immediately devoured by walkers.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/7/75/Samdeath.jpg/revision/latest/scale-to-width-down/350?cb=20170123165902', 'https://vignette.wikia.nocookie.net/walkingdead/images/c/cd/Ron_death_and_gunshot.png/revision/latest/scale-to-width-down/350?cb=20160215205953', 'https://vignette.wikia.nocookie.net/walkingdead/images/5/5c/Ron_being_devoured.png/revision/latest/scale-to-width-down/350?cb=20160215210020']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Ron Anderson introduces Carl to Mikey and Enid, who are playing video games and explains that he can play with them. He is the brother to Sam and son of Jessie and Pete. He is also Enid's boyfriend. Ron develops a bitter relationship with Rick and Carl, due to Rick executing his father under Deanna's orders and Carl's budding relationship with Enid. After Jessie and Sam are killed during the walker invasion of Alexandria, Ron tries to shoot Rick only to be killed by Michonne. However, his gun goes off as he falls, destroying Carl's right eye.\nSam Anderson is very briefly seen playing with his mother (Jessie) and brother (Ron) in a distance, whilst Rick is worrying about Carl and Judith. Sam catches Carol stealing weapons from the pantry and she threatens him to keep it a secret. Despite the threat and Carol's continuing harsh words to keep him at arm's length Sam forms an attachment to Carol, doing favors for her, but also asks for a gun leading Carol to learn of his father's abusive relationship with his mother. When Rick and Pete fight in the streets Sam runs to Carol for protection rather than Jessie, and subsequently Jessie is heartbroken when she learns that Sam wanted a gun to protect her. During the walker invasion of Alexandria, he refuses to leave his mother's side, but is traumatized to see a young boy as a walker. While stunned, Sam is devoured by walkers."
            },
            {
                id: 56,
                name: "Nicholas",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/71/AMC_603_Glenn_Nicholas_Trapped.png/revision/latest/scale-to-width-down/640?cb=20151026094602",
                actor: 'Michael Traynor',
                gender: 'Male',
                hair: 'Dark Brown',
                age: 'Late 30s to early 40s',
                occupation: ['Supply runner for the Alexandria Safe-Zone'],
                family: ['Unknown'],
                first_appearance: 'Remember',
                last_appearance: 'Heads Up (corpse, voice-only)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Thank You',
                        cause_of_death: 'Suicide via self-inflicted gunshot to the head adn devoured by walkers.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/6/6d/603_Nicholas_Suicide.png/revision/latest/scale-to-width-down/350?cb=20151026210716', 'https://vignette.wikia.nocookie.net/walkingdead/images/0/0d/Nicholas-fall.jpg/revision/latest/scale-to-width-down/350?cb=20151103220157', 'https://vignette.wikia.nocookie.net/walkingdead/images/4/4c/Nicholas-0.jpg/revision/latest/scale-to-width-down/350?cb=20160302013402']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Nicholas greets the group as they enter and asks them to hand over their weapons. He joins Aiden when he takes Glenn, Tara and Noah out to attack some zombies. He goes with Rick's group to lure a herd of walkers away from Alexandria, which results in his death."
            },
            {
                id: 57,
                name: "Tobin",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/6/68/AMC_612_Carol_Tobin_Flirting.png/revision/latest/scale-to-width-down/640?cb=20160307110527",
                actor: 'Jason Douglas',
                gender: 'Male',
                hair: 'Brown (graying)',
                age: 'Late 40s to early 50s',
                occupation: ['Former Construction Foreman for the Alexandria Safe-Zone'],
                family: ['Carol Peletier - ex-girlfriend'],
                first_appearance: 'Forget',
                last_appearance: 'Do Not Send Us Astray',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Do Not Send Us Astray',
                        cause_of_death: 'Injured by Derek with a tainted weapon and succumbed to the infection. (alive)\nStabbed in the head by Carol Peletier.(zombified, out of mercy)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/1/1a/DNSUA_tobin_get_stabbed.png/revision/latest/scale-to-width-down/350?cb=20180326105107', 'https://vignette.wikia.nocookie.net/walkingdead/images/0/01/DNSUA_tobin%27s_death.png/revision/latest/scale-to-width-down/350?cb=20180326105308']
                    }
                },
                ethnicity: "Caucasian - American",
                description: ""
            },
            {
                id: 58,
                name: "Dr Denise Cloyd",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/4b/Denise_605.jpg/revision/latest?cb=20160926225335&format=original",
                actor: 'Merritt Wever',
                gender: 'Female',
                hair: 'Dirty Blonde',
                age: 'Early to mid 30s',
                occupation: ['Psychiatrist (Pre - Apocalypse)', 'Medic for the Alexandria Safe-Zone'],
                family: ['Tara Chambler - former girlfriend', 'Dennis Cloyd - twin brother'],
                first_appearance: 'JSS',
                last_appearance: 'Twice as Far',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Twice as Far',
                        cause_of_death: 'Accidentally shot through the eye with Daryl"s crossbow by Dwight.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/7/7b/DeniseDemise.jpg/revision/latest/scale-to-width-down/350?cb=20160321014807', 'https://vignette.wikia.nocookie.net/walkingdead/images/2/2f/Denise_Dead.jpg/revision/latest/scale-to-width-down/350?cb=20160321105354']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Dr. Denise Cloyd is a psychiatrist. She lost her nerve to be a surgeon in Medical School, but now that Pet, the group's previous surgeon, is dead. Denise is forced to become the group's doctor and surgeon, at the urging of Eugene, who tells her 'You don't want to be a coward. I know.' She finally agrees to operate on a dying Holly, but cannot save her. When Scott is put into Denise's care, she tells Tara he will most likely die, but Tara tells her not to be afraid. After Tara leaves, Denise manages to stabilize Scott's infection. Shortly thereafter, she finds Tara and, much to Tara's surprise, kisses her. During the walker herd overrunning Alexandria, she is taken hostage at gunpoint by the Alpha Wolf and used so that he can escape his prison cell while Carol and Morgan are both unconscious, leaving Tara, Rosita and Eugene to watch on helplessly. The Alpha Wolf later tells her that he wasn't always the way he was and had changed into the person he is now. He shows signs of changing for the good, saving Denise's life from a walker attack that left him bitten. Though Denise offered to treat the man as a result, Carol shot him and he was devoured by walkers, telling Denise to run as he did so. Returning to her infirmary, Denise finds that Carl Grimes has been shot through the eye and saves his life at the cost of his eye. When Rick and Daryl are going to leave for a run, Denise asks Daryl to get some orange soda for Tara, who is going on a two-week supply run with Heath, Daryl agrees. Later, Rick and Daryl bring an unconscious Jesus to Denise so she can check him out. After Jesus escapes, Denise notifies Abraham. Before the group head to the Hilltop Colony, Denise bakes Daryl an oak cake, which he is reluctant to take, and he hopes it tastes better than it looks. Denise is seen present at the meeting in the church, listening to Rick's speech about the danger of the Saviors. When Rick asked if anyone objected to the idea of attacking the Saviors, Denise remained silent. Later, when Denise is talking to Tara, Tara tells Denise she loves her. Tara tells Denise she doesn't have to reply though and Denise says she will after Tara returns from her two-week supply run with Heath. Tara suggests that Denise come along on to the Saviors compound and then she can come on the run immediately after. Denise says she wants to go, but can't as she's the only doctor Alexandria has. Tara understands and the two kiss. Some time later, Denise convinces Daryl and Rosita to go on a scavenging run to an apothecary, which she believes is stocked up with medication and drugs. After successfully looting the place, they started for home, during which time Denise has a close encounter with a walker to get a can of soda for Tara. After Daryl and Rosita scold her for taking an unnecessary risk, Denise begins to lecture them on how she was trying to confront her fears and become strong as them. As she speaks, she gets shot by an arrow through the right eye by Dwight, killing her. Dwight later reveals she was not the one he was aiming for."
            },
            {
                id: 59,
                name: "Sherry",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/37/Sherry_7x03_talking_to_Daryl_%282%29.jpg/revision/latest/scale-to-width-down/640?cb=20170108174016",
                actor: 'Christine Evangelista',
                gender: 'Female',
                hair: 'Brown',
                age: 'Late 20s to early 30s',
                occupation: ['Babysitter (Pre - Apocalypse)'],
                family: ['Tina - sister (deceased)', 'Dwight - ex-husband', 'Negan - former "husband"'],
                first_appearance: 'Always Accountable',
                last_appearance: 'Unknown',
                status: {
                    alive: "",
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: "Sherry is Dwight's wife, first encountered by Daryl in the burnt forest with Dwight and her sister Tina. They are on the run from The Saviors, after stealing insulin for Tina. Daryl attempts to help them, though after Tina's death, Sherry and Dwight steal Daryl's motorcycle and crossbow and abandon him. It is later revealed that as punishment for stealing and fleeing from The Sanctuary, Dwight took an iron to the face and Sherry agreed to be one of Negan's wives in order to save Dwight's life. Sherry encounters Daryl in The Sanctuary after his capture, and is remorseful for stealing from him previously. Offscreen, Sherry frees Daryl from The Sanctuary and also escapes herself. Negan recruits Dwight to go and bring her back. Dwight travels to their old home, where they planned to meet up if things went bad, and finds a note from Sherry (along with her wedding rings), in which she admits to freeing Daryl and apologises for forcing Dwight into Negan's world. Her current whereabouts are unknown."
            },
            {
                id: 60,
                name: "Paula (Savior)",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/fa/TWD_613_GP_1002_0264-RT_FULL.jpg/revision/latest/scale-to-width-down/640?cb=20160424172949",
                actor: 'Alicia Witt',
                gender: 'Female',
                hair: 'Red',
                age: 'Mid to late 30s',
                occupation: ['Secretary (Pre - Apocalypse)', 'Former Lieutenant of the Saviors'],
                family: ['Donnie - lover (deceased)',],
                first_appearance: 'Not Tomorrow Yet (voice only), The Same Boat',
                last_appearance: 'The Same Boat',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Vatos (alive), Wildfire (zombified)',
                        cause_of_death: 'Shoved onto a pike by Carol Peletier and impaled, devoured by a nearby walker. (alive)\nStabbed in the head by Maggie Greene.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/7/7d/Paulabitten.jpg/revision/latest/scale-to-width-down/350?cb=20160314023959', 'https://vignette.wikia.nocookie.net/walkingdead/images/9/9e/PaulaZombifiedDeath.png/revision/latest/scale-to-width-down/350?cb=20160316000105']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Paula is first heard talking to Rick over a walkie-talkie telling him she only wants to talk. When he denies her, she reveals she has Carol and Maggie held captive. Paula brings them back to their compound where they tie and gag them. Paula is the counterpart to Carol. When Carol and Maggie escape from the compound, Carol threatens to kill Paula, but won't despite Maggie telling her to do so. Instead she shoves her into a pole whereupon she is devoured by a walker and killed by Maggie after she turns."
            },
            {
                id: 61,
                name: "Jared",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/94/Season_seven_jared.png/revision/latest?cb=20170314000315&format=original",
                actor: 'Joshua Mikel',
                gender: 'Male',
                hair: 'Brown',
                age: 'Late 20s to early 30s',
                occupation: ['Unknown'],
                family: ['Unknown'],
                first_appearance: 'The Well',
                last_appearance: 'Wrath (hallucination)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Still Gota Mean Something',
                        cause_of_death: 'Trapped by Morgan Jones and devoured by walkers.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/4/44/Jared%27sDeath-1.png/revision/latest/scale-to-width-down/350?cb=20180402071429', 'https://vignette.wikia.nocookie.net/walkingdead/images/e/e1/Jared%27sDeath-2.png/revision/latest/scale-to-width-down/350?cb=20180402072215', 'https://vignette.wikia.nocookie.net/walkingdead/images/2/2e/Jared%27sDeath-3.png/revision/latest/scale-to-width-down/350?cb=20180402072739']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Jared is a member of the Saviors, he works for Gavin. This one causes the death to Benjamin when it shoots in the legs which causes that the Kingdom rises against Negan. He is captured by Paul 'Jesus' Rovia and taken as a prisoner to the Hilltop colony. When the Saviors attack Hilltop he takes the opportunity to escape with other Saviors. Later, Jared and his company take Morgan and Rick as hostages but are released due to Rick’s deception claiming help against a swarm of walkers that invaded their refuge. Shortly after Morgan and Rick manage to kill the other men, Morgan fights with Jared and ends up caging him in with a multitude of walkers who end up devouring him."
            },
            {
                id: 62,
                name: "Morales",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/43/Twd_802_jld_0523_0329-rt.jpg/revision/latest/scale-to-width-down/640?cb=20171030021253",
                actor: 'Juan Gabriel Pareja',
                gender: 'Male',
                hair: 'Black',
                age: 'Early 40s',
                occupation: ['Former supply runner for the Atlanta Survivor Camp'],
                family: ['Miranda Morales - wife (deceased)', 'Eliza Morales - daughter (deceased)', 'Louis Morales - son (deceased)'],
                first_appearance: 'Guts',
                last_appearance: 'Monters',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Monsters',
                        cause_of_death: 'Shot in the head with a crossbow bolt by Daryl Dixon.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/7/7b/Mtrs_Morales%27_death.png/revision/latest/scale-to-width-down/350?cb=20171106064932']
                    }
                },
                ethnicity: "Hispanian - American",
                description: "Moralesis a member of the Saviors, featured in 'The Damned'. He surprises Rick and holds him by gunpoint inside a Savior outpost. Rick recognizes him and reminds him that he knew him from Atlanta, but Morales responds that those events were a long time ago. He informs Rick that he has called more Saviors for backup. However, he is found by Daryl, who immediately shots him in the head with a crossbow arrow, instantly killing him."
            },
            {
                id: 63,
                name: "Benjamin",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/3a/The-walking-dead-s07e02-the-well-014_-_C%C3%B3pia.jpg/revision/latest/scale-to-width-down/640?cb=20161112134745",
                actor: 'Logan Miller',
                gender: 'Male',
                hair: 'Brown',
                age: 'Late teens',
                occupation: ['Assumed High School Student (Pre - Apocalypse)', 'Kingdom soldier'],
                family: ['Henry - brother'],
                first_appearance: 'The Well',
                last_appearance: 'Bury Me Here',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Bury Me Here',
                        cause_of_death: 'Shot in the leg by Jared and later died of blood loss. (alive)\nStabbed in the head by Morgan Jones. (before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/9/91/AMC_713_Ben1.png/revision/latest/scale-to-width-down/350?cb=20170313133702', 'https://vignette.wikia.nocookie.net/walkingdead/images/b/b3/AMC_713_Ben2.png/revision/latest/scale-to-width-down/350?cb=20170313133926']
                    }
                },
                ethnicity: "Caucasian - American",
                description: ""
            },
            {
                id: 64,
                name: "Jerry",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/b/b9/The-walking-dead-episode-804-ezekiel-payton-3-935.jpg/revision/latest/scale-to-width-down/640?cb=20171113062939",
                actor: 'Cooper Andrews',
                gender: 'Male',
                hair: 'Black',
                age: 'Early to mid 30s',
                occupation: ['Steward and Bodyguard for King Ezekiel', 'member of the Militia'],
                family: ['Nabila - girlfriend'],
                first_appearance: 'The Well',
                last_appearance: 'Present',
                status: {
                    alive: {
                        status: "Alive",
                        lifespan: "The Well to present"
                    },
                    dead: ""
                },
                ethnicity: "Samoan - American",
                description: "At some point after the apocalypse he became one of the most trusted knights in Ezekiel's court. He later became his personal steward and bodyguard making sure to never leave his sight. He is almost never seen without his signature melee weapon—a two-handed battle axe."
            },
            {
                id: 65,
                name: "Dianne",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/53/The-walking-dead-s07e02-the-well-024.jpg/revision/latest/scale-to-width-down/640?cb=20161113150438",
                actor: 'Kerry Cahill',
                gender: 'Female',
                hair: 'Blonde',
                age: 'Mid 30s',
                occupation: ['Kingdom soldier', 'member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'The Well',
                last_appearance: 'Present',
                status: {
                    alive: {
                        status: "Alive",
                        lifespan: "The Well to present"
                    },
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: "Dianne is one of Ezekiel's top soldiers, is an expert in the use of the bow and arrow."
            },
            {
                id: 66,
                name: "Henry",
                photo: "https://fsmedia.imgix.net/a9/5a/59/4a/45a7/4b35/a994/c9bc15b07371/macsen-lintz-plays-henry-who-may-be-more-dangerous-than-he-looks.jpeg?dpr=2&auto=format%2Ccompress&w=375",
                actor: 'Marcsen Lintz',
                gender: 'Male',
                hair: 'Blond',
                age: '10 -12',
                occupation: ['Student (Pre - Apocalypse)', 'member of the Militia'],
                family: ['Benjamin - brother (deceased)', 'Ezekiel - adoptive father'],
                first_appearance: 'The Well',
                last_appearance: 'Present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: 'The Well to present'
                    },
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: "Henry is a resident of the Kingdom and the younger brother to Benjamin. Following the loss of his family he has been adopted by King Ezekiel and Carol Peletier."
            },
            {
                id: 67,
                name: "Natania",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/56/Season_seven_natania_%282%29.png/revision/latest/scale-to-width-down/356?cb=20170524235808",
                actor: 'Deborah May',
                gender: 'Female',
                hair: 'Blonde',
                age: 'Late 50s to early 60s',
                occupation: ['Former Leader of Oceanside'],
                family: ['Cyndie - granddaughter'],
                first_appearance: 'Swear',
                last_appearance: 'How It"s Gotta Be',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'How It"s Gotta Be',
                        cause_of_death: 'Shot by Enid.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/f2/HTGB_Enid_shot_Natania.png/revision/latest/scale-to-width-down/350?cb=20171211071728', 'https://vignette.wikia.nocookie.net/walkingdead/images/6/64/NTGB_Natania%27s_corpse.png/revision/latest/scale-to-width-down/350?cb=20171211071808']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Natania has shown herself to be a highly intelligent, caring, and stubborn woman who is a determined survivor and a strong leader to those in her group. Natania has shown extreme devotion to the safety and well-being of her people and family and she appears to be willing to do anything in order to keep her group safe from danger, even if it includes resorting to violence. After losing a majority of her group to the Saviors following their failed rebellion, Natania grew into a more hardened and paranoid individual and she refused to allow her group to be enslaved and punished again and therefore escaped Negan's tyranny with her group and built a new community, Oceanside. Natania however remained fearful of the Saviors and she viewed them as being unstoppable and therefore to prevent the Saviors from finding her group again, any stranger that encountered her group was slaughtered on her orders. She completely refuses to join Rick and his people in fighting the Saviors as she refuses to lose to them again and simply allows them to rob her and her people of their weapons, showing that she is willing to make extreme sacrifices in order to avoid conflicts with the Saviors again. Eventually her stubbornness and cruelty towards outside members of her group would eventually lead to her death by Enid's hand."
            },
            {
                id: 68,
                name: "Cyndie",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/92/Cyndie_7x15.png/revision/latest/scale-to-width-down/640?cb=20170329195455",
                actor: 'Sydeny Park',
                gender: 'Female',
                hair: 'Black',
                age: 'Late teens to early 20s',
                occupation: ['High School Student (Pre - Apocalypse)', 'Leader of the Oceanside', 'co-leader of the Militia'],
                family: ['Natania - grandmother (deceased)'],
                first_appearance: 'Swear',
                last_appearance: 'Present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: 'Swear to present'
                    },
                    dead: ""
                },
                ethnicity: "Caucasian/African - American",
                description: "At some point in the outbreak, Cyndie, her mother, brother and grandmother, Natania managed to survive and began to build the community of Oceanside. After getting into conflict with the Saviors, Cyndie and the rest of the Oceansiders decided to rebel against them. However, the group failed, causing the execution of her mother, brother and numerous other residents. The remaining residents fled the community, in hopes to find a new home. Since then, Cyndie, Natania and the other Oceansiders relocated to Oceanside Cabin Motor Court, where they have been peacefully living, and is firmly established with high security. She is a resident and the current leader of the Oceanside community after her grandmother, Natania was killed by Enid. She is also one of the four co-leaders of the Militia along with Rick Grimes, Maggie Rhee and Ezekiel."
            },
            {
                id: 69,
                name: "Beatrice",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/4/4e/Season_nine_beatrice.png/revision/latest?cb=20180719185559",
                actor: 'Briana Venskus',
                gender: 'Female',
                hair: 'Brown',
                age: 'Late 20s to early 30s',
                occupation: ['Member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'Swear',
                last_appearance: 'Present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: 'Swear to present'
                    },
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: ""
            },
            {
                id: 70,
                name: "Eastman",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/9/96/Season_six_eastman.png/revision/latest/scale-to-width-down/335?cb=20151104143029",
                actor: 'John Carroll Lynch',
                gender: 'Male',
                hair: 'Black (balding)',
                age: 'Late 40s',
                occupation: ['Forensic psychiatrist'],
                family: ['Tabitha - pet (deceased)'],
                first_appearance: 'Here"s Not Here (flashback)',
                last_appearance: 'Here"s Not Here (flashback)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Here"s Not Here (flashback)',
                        cause_of_death: 'Bitten by a walker. Shot in the head by Morgan Jones. (before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/4/45/Eastman-death.png/revision/latest?cb=20151107014956', 'https://vignette.wikia.nocookie.net/walkingdead/images/2/2f/Eastman_Bitten.png/revision/latest/scale-to-width-down/350?cb=20151105121955']
                    }
                },
                ethnicity: "Caucasian - American",
                description: ""
            },
            {
                id: 71,
                name: "Patricia",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/f/fd/Season_two_patricia_%282%29.png/revision/latest/scale-to-width-down/350?cb=20180323033024",
                actor: 'Jane McNeill',
                gender: 'Female',
                hair: 'Dirty Blonde',
                age: 'Mid to Late 40s',
                occupation: ['Farm Hand (Pre and Post - Apocalypse)', 'Veterinary Assistant (Pre and Post - Apocalypse)', 'Group Nurse'],
                family: ['Otis - former husband (deceased)'],
                first_appearance: 'Bloodletting',
                last_appearance: 'Beside the Dying Fire',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Beside the Dying Fire',
                        cause_of_death: 'Devourder by walkers while trying to escape the farm.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/b/b1/Episode-13-patricia.jpg/revision/latest/scale-to-width-down/350?cb=20120326152206']
                    }
                },
                ethnicity: "Caucasian - American",
                description: ""
            },
            {
                id: 72,
                name: "Otis",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/73/Season_two_otis.png/revision/latest/scale-to-width-down/350?cb=20180901162537",
                actor: 'Pruitt Taylor Vince',
                gender: 'Male',
                hair: 'Brown / Gray',
                age: 'Late 40s to Early 50s',
                occupation: ['Farm Hand (Pre - Apocalypse)', 'Volunteer Emergency Medical Technician (Pre - Apocalypse)', 'Hunter'],
                family: ['Patricia - former wife (deceased)'],
                first_appearance: 'Bloodletting',
                last_appearance: 'Cherokee Rose (archive footage)',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Save the Last One',
                        cause_of_death: 'Shot in the leg by Shane Walsh and left to be devoured by walkers.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/8/81/STLO_Otis_shot.png/revision/latest/scale-to-width-down/350?cb=20140921151538', 'https://vignette.wikia.nocookie.net/walkingdead/images/4/49/OtiSacrifice.png/revision/latest/scale-to-width-down/350?cb=20130718222938']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Although he only appeared in two episodes, Otis was shown to be a kind, generous, capable, brave and unselfish person. He was clearly loved very much by his wife Patricia and was a cherished friend to Hershel, Maggie, Jimmy and Beth who were all devastated by his death. Otis was extremely remorseful for his accidental shooting of Carl Grimes and made it a personal mission to help Shane retrieve much needed medical supplies to save the boy's life, although it tragically resulted in his violent death as a result of Shane."
            },
            {
                id: 73,
                name: "Jimmy",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/3/34/Season_two_jimmy.png/revision/latest/scale-to-width-down/350?cb=20140922201046",
                actor: 'James Allen McCune',
                gender: 'Male',
                hair: 'Brown',
                age: '17',
                occupation: ['High School Student (Pre - Apocalypse)', 'Farm Hand (Pre - Apocalypse)'],
                family: ['Beth Greene - former girlfriend (deceased)'],
                first_appearance: 'Bloodletting',
                last_appearance: 'Beside the Dying Fire',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Beside the Dying Fire',
                        cause_of_death: 'Devoured by walkers.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/a/a4/JimmyNeckBitten.PNG/revision/latest/scale-to-width-down/350?cb=20140329150824']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "While having limited on-screen interactions in the series, Jimmy is shown to be a helpful, kind, and caring individual that has been shown or implied to be on positive terms with almost everyone on the Greene Family Farm and the Atlanta Camp survivors.\n\t\tHe has also been shown or viewed to be immature to some extent, notably by Hershel and Lori. One such example being the way he was holding his gun like a gangster during target practice. This trait was likely how he got along with Carl the way he did."
            },
            {
                id: 74,
                name: "Eric Raleigh",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/7/7b/Season_eight_eric_raleigh.png/revision/latest/scale-to-width-down/350?cb=20171101021119",
                actor: 'Jordan Woods-Robinson',
                gender: 'Male',
                hair: 'Aurown',
                age: 'Late 20s to early 30s',
                occupation: ['NGO Worker (Pre - Apocalypse)', 'Former recruiter for the Alexandria Safe-Zone', 'Member of the Militia'],
                family: ['Aaron - boyfriend'],
                first_appearance: 'The Distance',
                last_appearance: 'Monsters',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Monsters',
                        cause_of_death: 'Shot in the abdomen by a Savior, bled out and reanimated due to untreated injuries.(alive)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/2/24/TD_Eric%27s_shot.png/revision/latest/scale-to-width-down/350?cb=20171106071851', 'https://vignette.wikia.nocookie.net/walkingdead/images/b/b6/Mtrs_Eric%27s_turned.png/revision/latest/scale-to-width-down/350?cb=20171106071954']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Eric Raleigh was a recruiter for the community of Alexandria, along with his boyfriend, Aaron and was responsible for bringing Rick Grimes and his group to Alexandria."
            },
            {
                id: 75,
                name: "Gavin",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/5/52/Season_eight_gavin.png/revision/latest/scale-to-width-down/350?cb=20171212023642",
                actor: 'Jayson Warner Smith',
                gender: 'Male',
                hair: 'Brown',
                age: 'Mid to late 40s',
                occupation: ['Construction Foreman (Pre - Apocalypse)', 'Former lieutenant of the Saviors', 'Former Head of the Chemical Plant Outpost'],
                family: ['Unknown'],
                first_appearance: 'The Well',
                last_appearance: 'Do Not Send Us Astray',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Honor',
                        cause_of_death: 'Stabbed through the nape by Henry.(alive)\nStabbed in the head by Carol Peletier.(before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/a/a2/Gavin%27sDeath-1.png/revision/latest/scale-to-width-down/350?cb=20180226094544', 'https://vignette.wikia.nocookie.net/walkingdead/images/9/94/Gavin%27sDeath-2.png/revision/latest/scale-to-width-down/350?cb=20180226094710' ]
                    }
                },
                ethnicity: "Caucasian - American",
                description: "At some point after the outbreak, Gavin joined the Saviors. Likely due to loyalty or leadership capability, Negan appointed him as one of his lieutenants. At some point, Gavin was put in charge of overseeing the collection of weekly tributes from a community known as The Kingdom. Gavin ensures that the Saviors and the Kingdom conduct these supply exchanges secretly, as per a deal where the Kingdom is not directly subjugated, leaving the majority of its inhabitants oblivious to the Saviors' hegemonic influence."
            },
            {
                id: 76,
                name: "Gary",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/1/1f/Season_eight_gary.png/revision/latest?cb=20180319213314",
                actor: 'Mike Seal',
                gender: 'Male',
                hair: 'Black',
                age: 'Mid to late 30s',
                occupation: ['Former lieutenant of the Saviors'],
                family: ['Unknown'],
                first_appearance: 'Service',
                last_appearance: 'Worth',
                status: {
                    alive: "",
                    dead: {
                        status: "Dead",
                        death_episode: 'Worth',
                        cause_of_death: 'Shot by Arat, Norris, D.J and other fellow Saviors.(alive)\nHead bashed by Negan using his baseball bat, Lucille.(before reanimation)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/5/5f/2018-04-09.png/revision/latest/scale-to-width-down/350?cb=20180409094046', 'https://vignette.wikia.nocookie.net/walkingdead/images/e/e9/Wth_gary_dies.png/revision/latest/scale-to-width-down/350?cb=20180409095346']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "At some point in the apocalypse, Gary somehow came into contact with a group named 'The Saviors' which he subsequently joined as a lieutenant."
            },
            {
                id: 77,
                name: "Laura",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/8b/Season_eight_laura.png/revision/latest/scale-to-width-down/350?cb=20180410012226",
                actor: 'Lindsley Register',
                gender: 'Female',
                hair: 'Blonde',
                age: 'Mid to Late 20s',
                occupation: ['Former lieutenant of the Saviors', 'Gardener for the Sanctuary'],
                family: ['Unknown'],
                first_appearance: 'The Cell',
                last_appearance: 'Present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: 'The Cell to present'
                    },
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: "Laura is shown to be an intelligent, cunning and initially cruel person who is a strong, determined survivor. She is described as having a wild and reckless side and enjoys having 'fun' as seen when she plays table hockey with Dwight. She is shown to have somewhat of a kind side as seen when she flirted with Spencer and offered to take him back to her compound presumably in order to get together with him, though it seems this was more a result of him actually scavenging supplies and fulfilling Negan's orders rather than genuine interest in him.\n\t\tLaura demonstrated extreme loyalty to the Saviors and seemed to fully agree with their sinister lifestyle and was shown to be cruel to the members of communities that her group extorted from as seen when she threatened Eugene and held Rick at gunpoint in order to prevent him from interfering with Aaron being brutally beaten and appeared to become angered at any disrespect towards her group. She was shown to not be bothered by the extreme violence that Negan and the Saviors engaged in as seen when she made Eugene watch Negan burn Emmett Carson alive after being framed by Dwight. She is likely a murderer as well as she surely would have killed Dwight after he turned on their group following the attack on Alexandria had reinforcements not arrived and she made it a personal mission to make in back to the Sanctuary despite being injured in order to expose him as the Militia's spy, further demonstrating her extreme loyalty to Negan and the Saviors.\n\t\tIn spite of her loyalty to Negan, she is not fundamentally a bad person who wishes for an extermination of the other communities. After suffering heavy losses, Laura leads the Saviors in surrendering to the Militia and fully embraces the peace with the other communities. When people from the other communities arrive at the Sanctuary, Laura, now working as a gardener, goes so far as to give Rosita Espinosa a friendly nod and shows no ill will towards her former enemies."
            },
            {
                id: 78,
                name: "Rachel",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/00/Season_eight_rachel.png/revision/latest?cb=20180308061347",
                actor: 'Mimi Kirkland',
                gender: 'Female',
                hair: 'Brown',
                age: '10 - 12',
                occupation: ['Member of the Militia'],
                family: ['Unknown'],
                first_appearance: 'Swear',
                last_appearance: 'Present',
                status: {
                    alive: {
                        status: 'Alive',
                        lifespan: 'Swear to present'
                    },
                    dead: ""
                },
                ethnicity: "Caucasian - American",
                description: ""
            },
            {
                id: 79,
                name: "Tamiel",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/82/Season_eight_tamiel.png/revision/latest/scale-to-width-down/350?cb=20171209224227",
                actor: 'Sabrina Gennarino',
                gender: 'Female',
                hair: 'Blonde',
                age: 'Mid to late 40s',
                occupation: ['Lieutenant of the Scavengers'],
                family: ['Unknown'],
                first_appearance: 'Hearts Still Beating',
                last_appearance: 'Still Gotta Mean Something',
                status: {
                    alive: '',
                    dead: {
                        status: "Dead",
                        death_episode: 'The Lost and the Plunderers',
                        cause_of_death: 'Shot in the chest by Simon.(alive)\nCrushed in a compactor by Anne.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/d/d8/TamielDeath-1.png/revision/latest/scale-to-width-down/350?cb=20180305112917', 'https://vignette.wikia.nocookie.net/walkingdead/images/6/6d/Tamiel%27s_Death_2.png/revision/latest/scale-to-width-down/350?cb=20180305150518' ]
                    }
                },
                ethnicity: "Caucasian - American",
                description: "At some point after the outbreak, Tamiel became part of the Scavengers led by Jadis, and became a senior lieutenant."
            },
            {
                id: 80,
                name: "Brion",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/2/25/Season_seven_brion.png/revision/latest?cb=20170225222650",
                actor: 'Thomas Francis Murphy',
                gender: 'Male',
                hair: 'Light Brown',
                age: 'Late 50s to early 60s',
                occupation: ['Lieutenant of the Scavengers'],
                family: ['Unknown'],
                first_appearance: 'New Best Friends',
                last_appearance: 'The Lost and the Plunderers',
                status: {
                    alive: '',
                    dead: {
                        status: "Dead",
                        death_episode: 'The Lost and the Plunderers',
                        cause_of_death: 'Shot in the chest by Simon.(alive)\nCrushed in a compactor by Anne.(zombified)',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/fa/BrionDeath-1.png/revision/latest/scale-to-width-down/350?cb=20180305112706', 'https://vignette.wikia.nocookie.net/walkingdead/images/e/e2/BrionDeath-2.png/revision/latest/scale-to-width-down/350?cb=20180305103616' ]
                    }
                },
                ethnicity: "Caucasian - American",
                description: "At some point after the outbreak, Brion became part of the Scavengers led by Jadis, and became a senior lieutenant."
            },
            {
                id: 81,
                name: "Farron",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/c/c6/Season_seven_farron.png/revision/latest/scale-to-width-down/350?cb=20170404020733",
                actor: 'Anja Akstin  ',
                gender: 'Female',
                hair: 'Blonde',
                age: 'Mid 20s',
                occupation: ['Unknown'],
                family: ['Unknown'],
                first_appearance: 'The First Day of the Rest of Your Life',
                last_appearance: 'The First Day of the Rest of Your Life',
                status: {
                    alive: '',
                    dead: {
                        status: "Dead",
                        death_episode: 'The First Day of the Rest of Your Life',
                        cause_of_death: 'Pushed off a high balcony by Michonne.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/2/2c/Farron%27s_death_%28but_she_was_heard_screaming%29.png/revision/latest/scale-to-width-down/350?cb=20170403093637', 'https://vignette.wikia.nocookie.net/walkingdead/images/3/3e/Farron%27s_dead_body.png/revision/latest/scale-to-width-down/350?cb=20170403093729' ]
                    }
                },
                ethnicity: "Caucasian - American",
                description: ""
            },
            {
                id: 82,
                name: "Georgie",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/85/Season_eight_georgie.png/revision/latest/scale-to-width-down/350?cb=20180320154634",
                actor: 'Jayne Atkinson  ',
                gender: 'Female',
                hair: 'Platinum Blonde',
                age: 'Mid to late 5s',
                occupation: ['Professor (Pre - Apocalypse)', 'Leader of an unnamed group'],
                family: ['Unknown'],
                first_appearance: 'The Key',
                last_appearance: 'The Key',
                status: {
                    alive: '',
                    dead: ''
                },
                ethnicity: "Caucasian - American",
                description: "Following the apocalypse, Georgie became the leader of a group of survivors including Hilda and Midge. Georgie's group would visit various survivor communities and offer to exchange crates of food or phonographic records of music for Georgie's knowledge on how to make a better future. However, over time Georgie and her group stopped encountering many new survivor communities and most of the ones they did encounter were not good people. By the time she encounters the Hilltop, Georgie hasn't seen a community like it in 'a very long time'."
            },
            {
                id: 83,
                name: "Pete Anderson",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/8/8f/Season_five_pete.png/revision/latest?cb=20150316182133",
                actor: 'Corey Brill',
                gender: 'Male',
                hair: 'Blond',
                age: 'Mid 30s',
                occupation: ['Surgeon (Pre - Apocalypse)', 'Doctor for the Alexandria Safe-Zone'],
                family: ['Jessie Anderson - former wife (deceased)', 'Ron Anderson - sone (deceased)', 'Same Anderson - sone (deceased)'],
                first_appearance: 'Remember',
                last_appearance: 'First Time Again (flashback)',
                status: {
                    alive: '',
                    dead: {
                        status: "Dead",
                        death_episode: 'Conquer',
                        cause_of_death: 'Shot in the head by Rick Grimes.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/4/41/516_Pete_Death.png/revision/latest/scale-to-width-down/350?cb=20150330040039' ]
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Although initially appearing as a somewhat kind and welcoming person, Pete is later revealed to be a violent, abusive and alcoholic man. A strong desire for dominance may be the reason why Pete chooses to abuse his wife and children, regardless of the physiological damage it is causing them. Pete appears to show no remorse for his abusive actions at all.\n\t\tPete is shown to despise anyone who tries to get in his way of dominating his wife and turning her against him as shown when Rick Grimes convinces Jessie to stand up to him, he engages Rick in a fight. After once again seeing Rick simply speaking to Jessie, Pete flies into a violent, alcoholic rage and sets out to kill Rick once and for all, which ends up with him slitting Reg Monroe's throat and causing his own demise in the process, all the while refusing to accept that he had caused this situation.\n\t\tDespite his abuse, Pete's sons Ron and Sam do seem to care somewhat for their father as they both show signs of grief following his death and Ron shows bitterness towards Rick for killing his father. Ron also becomes extremely angry when Rick's son Carl tells him that 'your dad was an asshole.'"
            },
            {
                id: 84,
                name: "Olivia",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/d/db/Season_seven_olivia.png/revision/latest/scale-to-width-down/350?cb=20161212221819",
                actor: 'Ann Mahoney',
                gender: 'Female',
                hair: 'Black',
                age: 'Late 30s to early 40s',
                occupation: ['Coffee shop employee (Pre - Apocalypse)', 'Inventory Manager for the Alexandria Safe-Zone'],
                family: ['Unknown'],
                first_appearance: 'Remember',
                last_appearance: 'Hearts Still Beating',
                status: {
                    alive: '',
                    dead: {
                        status: "Dead",
                        death_episode: 'Hearts Still Beating',
                        cause_of_death: 'Shot in the face by Arat at the order of Negan.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/f4/Oliviadeath2.png/revision/latest/scale-to-width-down/350?cb=20161212120519', 'https://vignette.wikia.nocookie.net/walkingdead/images/d/d9/OliviaDeath.JPG/revision/latest/scale-to-width-down/350?cb=20161212113122' ]
                    }
                },
                ethnicity: "Caucasian - American",
                description: "After Rick Grimes and his group arrive in Alexandria, Olivia collects everyone's weapons and stores them at the armory. She is also seen watching the confrontation between Glenn Rhee and Aiden Monroe."
            },
            {
                id: 85,
                name: "Reg Monroe",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/b/b4/Season_five_reg_monroe.png/revision/latest/scale-to-width-down/331?cb=20150323213612",
                actor: 'Steve Coutler',
                gender: 'Male',
                hair: 'Gray',
                age: 'Late 50s to early 60s',
                occupation: ['Professor of Architecture (Pre - Apocalypse)'],
                family: ['Deanna Monroe - former wife (deceased)', 'Aiden Monroe - son (deceased)', 'Spenser Monroe - sone (deceased)'],
                first_appearance: 'Forget',
                last_appearance: 'First Time Again (flashback)',
                status: {
                    alive: '',
                    dead: {
                        status: "Dead",
                        death_episode: 'Conquer',
                        cause_of_death: 'Throat accidentall slice open by Pete Anderson and quickly dies of blood loss. (alive)\nPut down by Abraham Ford',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/f/fd/516_Reg_Death.png/revision/latest/scale-to-width-down/350?cb=20150330040146']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "Reg and his family tried to return to Ohio as the outbreak started, but was directed to Alexandria by the U.S. Army. After the Army failed to show up, Reg and his sons started to build a wall around the community using materials from a nearby shopping mall under construction. When other people joined the community, they had enough manpower to finish the construction of the walls."
            },
            {
                id: 86,
                name: "Richard",
                photo: "https://vignette.wikia.nocookie.net/walkingdead/images/0/04/Season_seven_richard.png/revision/latest/scale-to-width-down/350?cb=20170315014517",
                actor: 'Karl Makinen',
                gender: 'Male',
                hair: 'Dark Brown',
                age: 'Mid 40s',
                occupation: ['Kingdom soldier'],
                family: ['Kathy - daughter (deceased)'],
                first_appearance: 'The Well',
                last_appearance: 'Bury Me Here',
                status: {
                    alive: '',
                    dead: {
                        status: "Dead",
                        death_episode: 'Bury Me Here',
                        cause_of_death: 'Strangled to death and later stabbed in the head by Morgan Jones.',
                        photo: ['https://vignette.wikia.nocookie.net/walkingdead/images/c/cf/Richardchoked.jpg/revision/latest/scale-to-width-down/350?cb=20170313022923', 'https://vignette.wikia.nocookie.net/walkingdead/images/8/82/Morgan_Stabbed_Richard.png/revision/latest?cb=20170729123914']
                    }
                },
                ethnicity: "Caucasian - American",
                description: "After the onset of the outbreak, Richard and his family found refuge inside a large tented community, however several problems arose within the community, Richard, however, never acted upon his concerns regarding their safety believing that it wasn’t his responsibility. At some point, later, an unknown conflict ensued which resulted in a fire which engulfed the community and his wife was caught and burned to death leaving Richard to defend his young daughtern\t\tAfter 3 days of travelling with no food and no sleep, Richard and Katy found themselves in a precarious dilemma which resulted in Katy being devoured by walkers leaving Richard on his own. [1] Sometime after this event, Richard later encountered Ezekiel with whom he came to develop a fierce loyalty towards and subsequently settled into his community named The Kingdom.\n\t\tUpon assimilating into community, Richard managed to regain a sense of purpose and thus committed himself in ensuring the safety of his fellow residents and in the process, became one of Ezekiel’s trusted allies alongside Jerry, David, Dianne and significantly later Benjamin.[3] Roughly during this period, Richard managed to befriend Paul Rovia, a scout for a nearby community named the Hilltop Colony upon where the two came to develop a trusting partnership, and thus a trading system was established between the two communities, despite this however he gained a lesser opinion on the community leader Gregory for his cowardice.\n\t\tRichard was present at the time of the arrival of a notorious group of survivors named the Saviors who operated on behalf of Negan. Upon meeting, the Saviors demanded a portion of supplies in exchange for leaving the community unscathed, to which Ezekiel complied under the condition that the Saviour’s would never step foot inside The Kingdom. Throughout the following months Richard aided his group in gathering supplies in order to compensate towards the Saviors demands and thus he took part in several conducted weekly trades between the two groups, which he alongside Ezekiel, and several others kept secretly hidden from the rest of the community."
            },
        ]
    }
];

module.exports = { characters };


