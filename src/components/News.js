// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
//   static propTypes = {}
  //   articles= [
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "New York Times"
  //         },
  //         "author": "John Branch, Chang W. Lee",
  //         "title": "Men's Halfpipe Live Photo Updates: Shaun White Pushes For a Medal - The New York Times",
  //         "description": "The snowboarder was looking to add an exclamation point to an already golden career, but he won’t take a medal home from his fifth and final Winter Olympics.",
  //         "url": "https://www.nytimes.com/live/2022/02/10/sports/snowboarding-olympic-final",
  //         "urlToImage": "https://static01.nyt.com/images/2022/02/10/sports/olympics/halfpipe-mens-snowboarding-final-164/halfpipe-mens-snowboarding-final-164-articleLarge.jpg",
  //         "publishedAt": "2022-02-11T02:41:00Z",
  //         "content": "After taking home silver in the mens halfpipe at the last two Winter Olympics, Ayumu Hirano of Japan is a favorite heading into the finals and a snowboarder to watch in the race for gold.Hirano, 23, … [+2099 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "CBS Sports"
  //         },
  //         "author": "",
  //         "title": "James Harden-Ben Simmons trade grades: 76ers increase title hopes now, Nets' outlook gets much brighter - CBS Sports",
  //         "description": "Brooklyn and Philadelphia just made one of the biggest trades in recent NBA history",
  //         "url": "https://www.cbssports.com/nba/news/james-harden-ben-simmons-trade-grades-76ers-increase-title-hopes-now-nets-outlook-gets-much-brighter/",
  //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/02/10/0c807c64-39b5-4cb2-98dd-7a02ca64c36f/thumbnail/1200x675/44aab0fdef03fc112d63fc7ef17f644f/harden-7.jpg",
  //         "publishedAt": "2022-02-11T02:30:00Z",
  //         "content": "The Brooklyn Nets are trading James Harden and Paul Millsap to the Philadelphia 76ers for Ben Simmons, Seth Curry, Andre Drummond and two first-round picks, according to ESPN's Adrian Wojnarowski. Ha… [+13266 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "nfl-news",
  //             "name": "NFL News"
  //         },
  //         "author": null,
  //         "title": "List of 'NFL Honors' award winners from 2021 NFL season - NFL.com",
  //         "description": "Thursday night celebrates another year of excellence in the NFL with the 11th edition of NFL Honors, which aired live nationally on ABC at 9 p.m. ET from YouTube Theater in Los Angeles. The annual event features the announcement of The Associated Press aw",
  //         "url": "https://www.nfl.com/news/list-of-nfl-honors-award-winners-from-2021-nfl-season",
  //         "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/huk8xc6cspnvcyfa8ojp",
  //         "publishedAt": "2022-02-11T01:54:00Z",
  //         "content": "Pepsi Rookie of the Year: Cincinnati Bengals wide receiver Ja'Marr Chase\r\nAP Defensive Player of the Year Presented by Castrol EDGE:Pittsburgh Steeler pass rusherT.J. Watt\r\nBridgestone Best Moment of… [+1310 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "YouTube"
  //         },
  //         "author": null,
  //         "title": "Former Alaska Governor Sarah Palin Takes Stand For Day 2 Of New York Times Trial: 'I Hope That There - CBS New York",
  //         "description": "Former Alaska governor Sarah Palin was back in court Thursday taking on the New York Times; CBS2's Jenna DeAngelis reports.",
  //         "url": "https://www.youtube.com/watch?v=5Ber9Bdp_2U",
  //         "urlToImage": "https://i.ytimg.com/vi/5Ber9Bdp_2U/hqdefault.jpg",
  //         "publishedAt": "2022-02-11T01:48:40Z",
  //         "content": null
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Guardian"
  //         },
  //         "author": "Guardian staff reporter",
  //         "title": "Ex-Cheer star Jerry Harris pleads guilty to child sexual abuse image charges - The Guardian",
  //         "description": "Harris, a Chicago native, was first arrested in September 2020 on a charge of production of child sexual abuse images",
  //         "url": "https://amp.theguardian.com/media/2022/feb/10/jerry-harris-netflix-cheer-guilty-child-pornography",
  //         "urlToImage": null,
  //         "publishedAt": "2022-02-11T01:17:00Z",
  //         "content": "NetflixHarris, a Chicago native, was first arrested in September 2020 on a charge of production of child sexual abuse images\r\nFri 11 Feb 2022 01.17 GMT\r\nJerry Harris, the former star of the Netflix d… [+3365 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "KABC-TV"
  //         },
  //         "author": "John Gregory, Tony Cabrera, Jessica De Nova",
  //         "title": "Laguna Beach: Emerald Fire grows to 150 acres as evacuation orders lifted for Emerald Bay, Irvine Cove - KABC-TV",
  //         "description": "A brush fire broke out in the Laguna Beach area Thursday, prompting evacuation orders for Emerald Bay and Irvine Cove.",
  //         "url": "https://abc7.com/laguna-beach-brush-fire-emerald-bay-winds/11551837/",
  //         "urlToImage": "https://cdn.abcotvs.com/dip/images/11552385_021022-kabc-emerald-fire.jpg?w=1600",
  //         "publishedAt": "2022-02-11T00:51:39Z",
  //         "content": "LAGUNA BEACH, Calif. (KABC) -- A brush fire fueled by strong winds and hot conditions ignited dangerously close to homes in Laguna Beach Thursday morning, prompting mandatory evacuation orders.The fi… [+2631 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Joe Sutton, CNN",
  //         "title": "Autopsy report says Bob Saget had Covid-19 and died as a result of blunt head trauma - CNN",
  //         "description": "Actor and comedian Bob Saget had Covid-19 but died as a result of \"blunt head trauma,\" according to the autopsy report released today by the Orange County Medical Examiner's Office.",
  //         "url": "https://www.cnn.com/2022/02/10/entertainment/bob-saget-cause-of-death-report/index.html",
  //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220210180153-bob-saget-file-2021-super-tease.jpg",
  //         "publishedAt": "2022-02-11T00:51:00Z",
  //         "content": "(CNN)Actor and comedian Bob Saget had Covid-19 but died as a result of \"blunt head trauma,\" according to the autopsy report released today by the Orange County Medical Examiner's Office.\r\n\"It is in m… [+3022 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Maegan Vazquez, Kevin Liptak and Sam Fossum, CNN",
  //         "title": "Biden on Ukraine situation: 'Things could go crazy quickly' - CNN",
  //         "description": "President Joe Biden on Thursday urged Americans in Ukraine to leave the country immediately, warning that \"things could go crazy quickly\" in the region.",
  //         "url": "https://www.cnn.com/2022/02/10/politics/biden-ukraine-things-could-go-crazy/index.html",
  //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220203093907-01-biden-national-prayer-breakfast-0203-super-tease.jpg",
  //         "publishedAt": "2022-02-11T00:24:00Z",
  //         "content": "(CNN)President Joe Biden on Thursday urged Americans in Ukraine to leave the country immediately, warning that \"things could go crazy quickly\" in the region. \r\n\"American citizens should leave now,\" B… [+5288 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cbs-news",
  //             "name": "CBS News"
  //         },
  //         "author": "Haley Haley",
  //         "title": "Britain's Prince Charles tests positive for COVID-19 for the 2nd time - CBS News",
  //         "description": "The queen's eldest son and heir to the throne is now self-isolating, which is still the rule in England, but may not be for much longer.",
  //         "url": "https://www.cbsnews.com/news/britains-prince-charles-tests-positive-for-covid-19-for-the-2nd-time/",
  //         "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2022/02/10/ba014285-ab05-4dee-829b-fb7e01329c91/thumbnail/1200x630g2/bd4da30b0dc7b5ef48502caeca62f5ac/prince-charles-camilla-1369646255.jpg",
  //         "publishedAt": "2022-02-11T00:06:00Z",
  //         "content": "London — Britain's Prince Charles tested positive for COVID-19 on Thursday and is self-isolating, according to a statement posted on his official Twitter account. Queen Elizabeth II's eldest son and … [+1892 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "abc-news",
  //             "name": "ABC News"
  //         },
  //         "author": "Gabe Stern",
  //         "title": "Judge rebukes RNC's 'legitimate political discourse' language at Jan. 6 sentencing - ABC News",
  //         "description": "",
  //         "url": "https://abcnews.go.com/Politics/judge-rebukes-rncs-legitimate-political-discourse-language-jan/story?id=82809655",
  //         "urlToImage": "https://s.abcnews.com/images/US/jan6-gty-rc-220408_1644337363438_hpMain_16x9_992.jpg",
  //         "publishedAt": "2022-02-10T23:47:52Z",
  //         "content": "A federal judge on Thursday directly rebuked the Republican National Committee's resolution that declared the Jan. 6 riot at the U.S. Capitol \"legitimate political discourse\" as she sentenced a man c… [+3503 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "New York Post"
  //         },
  //         "author": "Danica Daniel",
  //         "title": "Kanye won't play Coachella unless Billie Eilish apologizes for Travis Scott diss - New York Post ",
  //         "description": "Kanye West is refusing to perform at Coachella unless fellow headliner Billie Eilish apologizes for comments she made regarding safety during her “Happier Than Ever” tour.",
  //         "url": "https://nypost.com/2022/02/10/kanye-demands-billie-eilish-apologize-for-travis-scott-diss/",
  //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/02/kanye-west-billie-eilish-1b.jpg?quality=90&strip=all&w=1024",
  //         "publishedAt": "2022-02-10T23:36:00Z",
  //         "content": "Kanye may not be going West this April. \r\nThe 44-year-old rapper, who recently filed to be called by the name Ye, is refusing to perform at Coachella unless fellow headliner Billie Eilish, 20, apolog… [+2267 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "CNBC"
  //         },
  //         "author": "Lora Kolodny",
  //         "title": "Tesla sued by California civil rights agency, which alleges racist treatment of Black employees - CNBC",
  //         "description": "California's Department of Fair Employment and Housing says it conducted a three-year-long investigation and received hundreds of complaints from Tesla workers.",
  //         "url": "https://www.cnbc.com/2022/02/10/tesla-sued-by-california-which-alleges-racist-treatment-of-black-workers.html",
  //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/106798586-1605671404417-gettyimages-1228033083-TELSA_FREMONT.jpeg?v=1605670992",
  //         "publishedAt": "2022-02-10T23:24:17Z",
  //         "content": "A California civil rights agency sued Tesla this week, alleging racist harassment of and discrimination against Black workers that has persisted for years at the company's car assembly plant and othe… [+2947 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "New York Times"
  //         },
  //         "author": "Joey Roulette",
  //         "title": "NASA-Funded Satellites Lost in Setback for Astra, a Small Rocket Launch Start-Up - The New York Times",
  //         "description": "The mission’s failure to reach orbit highlighted the challenges of breaking into the space business, especially for companies that are publicly traded on the stock market.",
  //         "url": "https://www.nytimes.com/2022/02/10/science/astra-nasa-launch.html",
  //         "urlToImage": "https://static01.nyt.com/images/2022/02/10/science/10ASTRA/10ASTRA-facebookJumbo.jpg",
  //         "publishedAt": "2022-02-10T23:24:13Z",
  //         "content": "But going public during a rocket companys infancy also adds more pressure for success at a time when engineers are still experimenting and learning about a rockets development and when failure is exp… [+1522 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-wall-street-journal",
  //             "name": "The Wall Street Journal"
  //         },
  //         "author": "Will Parker",
  //         "title": "Zillow’s Shuttered Home-Flipping Business Lost $881 Million in 2021 - The Wall Street Journal",
  //         "description": "Real-estate company says in a letter to shareholders that it is targeting revenue of $5 billion by 2025",
  //         "url": "https://www.wsj.com/articles/zillows-shuttered-home-flipping-business-lost-881-million-in-2021-11644529656",
  //         "urlToImage": "https://images.wsj.net/im-483619/social",
  //         "publishedAt": "2022-02-10T23:24:00Z",
  //         "content": "Zillow Group\r\n Z -1.75%\r\nsaid on Thursday that it lost $881 million on its algorithmic-driven home-flipping business last year in its first earnings report since the real-estate company shut down tha… [+3264 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "New York Times"
  //         },
  //         "author": "Gina Kolata",
  //         "title": "FDA Panel Rejects Lilly’s Cancer Drug Tested Only in China - The New York Times",
  //         "description": "The panel debated whether overseas trials could be applied to a more diverse U.S. population. The decision may affect other Chinese drug trials, and spotlights the high cost of immunotherapy.",
  //         "url": "https://www.nytimes.com/2022/02/10/health/fda-cancer-drug-china.html",
  //         "urlToImage": "https://static01.nyt.com/images/2022/02/10/science/10FDA-cancerdrug1/10FDA-cancerdrug1-facebookJumbo.jpg",
  //         "publishedAt": "2022-02-10T22:35:14Z",
  //         "content": "The agency has long had strict rules about approving drugs that were tested solely overseas, requiring that the data be applicable to patients and medical practice in the United States, that the inve… [+1851 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "New York Times"
  //         },
  //         "author": "Randi Hutter Epstein",
  //         "title": "Luc Montagnier, Nobel-Winning Co-Discoverer of H.I.V., Dies at 89 - The New York Times",
  //         "description": "He helped find the virus that causes AIDS, fell into a feud over it and later turned controversial, taking an anti-vaccine stance during the Covid-19 crisis.",
  //         "url": "https://www.nytimes.com/2022/02/10/science/luc-montagnier-dead.html",
  //         "urlToImage": "https://static01.nyt.com/images/2022/02/11/obituaries/09Montagnier1-print2/09Montagnier1-facebookJumbo-v2.jpg",
  //         "publishedAt": "2022-02-10T22:28:24Z",
  //         "content": "The Nobel committee said it had no doubt as to who had made the fundamental discoveries concerning H.I.V. Introducing the winners at the award ceremony in Sweden, Professor Björn Bennström, a committ… [+1804 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "CNBC"
  //         },
  //         "author": "Kevin Breuninger",
  //         "title": "Biden predicts his Supreme Court nominee will get Republican votes - CNBC",
  //         "description": "Biden is aiming to reveal his pick to replace Stephen Breyer by the end of the month. He said he has \"done the deep dive\" on about four candidates so far.",
  //         "url": "https://www.cnbc.com/2022/02/10/biden-predicts-supreme-court-nominee-will-get-republican-votes.html",
  //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107013873-1644523366668-gettyimages-1238358054-AA_10022022_608629.jpeg?v=1644523456",
  //         "publishedAt": "2022-02-10T22:24:21Z",
  //         "content": "President Joe Biden on Thursday predicted his eventual Supreme Court nominee will win at least some support from Senate Republicans.\r\n\"I'm not looking to make an ideological choice here,\" Biden told … [+2194 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-washington-post",
  //             "name": "The Washington Post"
  //         },
  //         "author": "Jacqueline Alemany, Devlin Barrett, Matt Zapotosky, Josh Dawsey",
  //         "title": "Some Trump records taken to Mar-a-Lago clearly marked as classified, including documents at 'top secret' level - The Washington Post",
  //         "description": "The existence of documents officially labeled as classified in the trove — which has not previously been reported — raises new questions about why the materials were taken out of the White House.",
  //         "url": "https://www.washingtonpost.com/politics/2022/02/10/trump-records-classified/",
  //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KIBJOCUJ6EI6ZAJHUNH3JGYOCI.jpg&w=1440",
  //         "publishedAt": "2022-02-10T22:18:44Z",
  //         "content": "While it was unclear how many classified documents were among those received by the National Archives and Records Administration, some bore markings that the information was extremely sensitive and w… [+10204 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Laura Smith-Spark, CNN",
  //         "title": "London Metropolitan Police chief Cressida Dick resigns after series of scandals - CNN",
  //         "description": "London's Metropolitan Police Service Commissioner Cressida Dick has resigned amid criticism of her leadership following a series of scandals that have dented public confidence in Britain's largest police force.",
  //         "url": "https://www.cnn.com/2022/02/10/uk/london-police-commissioner-gbr-uk-intl/index.html",
  //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220210142300-01-cressida-dick-file-super-tease.jpg",
  //         "publishedAt": "2022-02-10T22:13:00Z",
  //         "content": "London (CNN)London's Metropolitan Police Service Commissioner Cressida Dick has resigned amid criticism of her leadership following a series of scandals that have dented public confidence in Britain'… [+4293 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Samantha Murphy Kelly, CNN Business",
  //         "title": "Apple plans AirTag updates to curb unwanted tracking - CNN",
  //         "description": "Apple said Thursday it plans to add more safeguards to AirTags to cut down on unwanted tracking following reports that the devices have been used to stalk people and steal cars.",
  //         "url": "https://www.cnn.com/2022/02/10/tech/airtag-safety-updates/index.html",
  //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220210140105-restricted-apple-airtag-safety-super-tease.jpg",
  //         "publishedAt": "2022-02-10T21:59:00Z",
  //         "content": null
  //     }
  // ]

    constructor(){
        super();
        console.log("hello i am a constructor from news component");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
      console.log("componentDidMount run after render");
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=df43e58beec94ff68e70c29c333f08c1";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }

  render() {
    return (
      <div className='newsComponentContainer my-3 mx-5'>
        <h1>NewsZ - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>   
                <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })} 
        </div>  
      </div>   
    )
  }
}

export default News