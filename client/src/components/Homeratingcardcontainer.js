import React from "react";
import RatingCardRefactor from "../components/RatingCardRefactor";
const venues = [
  {
    id: 1,
    rating: 8.3,
    name: "Mother's Ruin",
    number: "(212) 219-0942",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/2DJ-UeRdiAHH4KV2Q7aV6JKHnulYZ9S9wS0ZEDiQHdY.jpg",
    Summary:
      "Favorite bar right now. The decor, music, atmosphere, munchies -- all rad. Tell the bartender what your preferred liquor is, and the mood you're in. S/he will make you a delicious cocktail. Trust.",
    link: "http://mothersruinnyc.com",
    createdAt: "2019-08-25T15:56:26.239Z",
    updatedAt: "2019-08-25T15:56:26.239Z"
  },
  {
    id: 2,
    rating: 8,
    name: "Little Skips East",
    number: "(718) 484-1555",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/22033848_0ETPy6MQX-hP6i7XUhYqLCM2X7gHA17W-9CCAE12pn4.jpg",
    Summary: "Avocado toast 10/7.5",
    link: null,
    createdAt: "2019-08-25T15:56:32.155Z",
    updatedAt: "2019-08-25T15:56:32.155Z"
  },
  {
    id: 3,
    rating: 8.6,
    name: "Joe's Pizza",
    number: "(646) 559-4878",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/83272785_wDxTU99GS-99t2glhIiQgU7tB2DsV5LrU8jnyLDogEY.jpg",
    Summary:
      "inconsistent—I think I’ve figured out that this place is annoying when it’s crowded, but that the pizza is at its best then because they keep the pies flying out of the oven",
    link: "http://www.joespizzanyc.com",
    createdAt: "2019-08-25T15:56:47.145Z",
    updatedAt: "2019-08-25T15:56:47.145Z"
  },
  {
    id: 4,
    rating: 6.5,
    name: "Chipotle Mexican Grill",
    number: "(212) 645-6270",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/V22PO_myKrV-wAIGS0tDTbkPhOsMzAMpRFAMeq_Jxek.jpg",
    Summary: "My favorite fucking restaurant! I would eat here everyday.",
    link: "https://locations.chipotle.com/ny/new-york/283-7th-ave",
    createdAt: "2019-08-25T15:57:17.150Z",
    updatedAt: "2019-08-25T15:57:17.150Z"
  },
  {
    id: 5,
    rating: 8.4,
    name: "Xi'an Famous Foods",
    number: "(212) 786-2068",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/4899092_9xglQgrVWl7Rem7w4fArBKmKBogaxe4NsKTM72Nm0ek.jpg",
    Summary:
      'Try the delicious pork burger, "spicy and tingly" beef noodle soup or Liang Pi cold-skin noodles, made from wheat flour.',
    link: "http://www.xianfoods.com",
    createdAt: "2019-08-25T15:58:26.646Z",
    updatedAt: "2019-08-25T15:58:26.646Z"
  },
  {
    id: 6,
    rating: 7.9,
    name: "Vanessa's Dumpling House",
    number: "(212) 529-1328",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/11180189_yy1DsxgQZDCNShHrUp4M_CXTu7irZA7lBFnGfBe_cdI.jpg",
    Summary:
      "The sesame pancake with beef is one of our 101 Best Sandwiches in NY. It's a bánh mì by way of Beijing: thin slices of beef with pickled cukes, carrots, and cilantro, dosed with Sriracha.",
    link: "http://vanessas.com",
    createdAt: "2019-08-25T16:01:18.419Z",
    updatedAt: "2019-08-25T16:01:18.419Z"
  },
  {
    id: 7,
    rating: 8.4,
    name: "Shu Jiao Fu Zhou Cuisine",
    number: "(212) 343-3905",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/35955595_PQ5g7ri989Jz0yTHK8wIoh8ISqAe82dx_SegHBrpM5c.jpg",
    Summary:
      "Order the huge plate of thick peanut butter noddles that will stick to your taste buds after every bite!",
    link: null,
    createdAt: "2019-08-25T16:01:25.779Z",
    updatedAt: "2019-08-25T16:01:25.779Z"
  },
  {
    id: 8,
    rating: 7.9,
    name: "Margherita NYC",
    number: "(212) 226-8391",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/32454308_JS0A1ZJANgSZ8mgDH3pgNDeLOxiJTwdPQvRnXrN79ic.jpg",
    Summary: "la pizza burrata is AMAZING and service is incredible",
    link: null,
    createdAt: "2019-08-25T16:01:37.397Z",
    updatedAt: "2019-08-25T16:01:37.397Z"
  },
  {
    id: 9,
    rating: 8.6,
    name: "Dig Inn",
    number: "(212) 253-6174",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/37148052_HfSGboRx99q5sewNkd9UrSQkOeFG-F3zWmqFZkpEzGU.jpg",
    Summary:
      "There’s nothing wrong with eating the same romaine salad with tomato, cucumber and feta every day, but this organic eatery has a rotating selection of organic, locally sourced mains and sides for $10.",
    link: "https://www.diginn.com",
    createdAt: "2019-08-25T16:02:09.285Z",
    updatedAt: "2019-08-25T16:02:09.285Z"
  },
  {
    id: 10,
    rating: 8.3,
    name: "Tacombi Café El Presidente",
    number: "(212) 242-3491",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/96255824__hNg6gHy28L7b6V03gFeMsIQ5SABCB6OwACAI98saQk.png",
    Summary:
      "The Gringa Madison taco is really outstanding and the Sonoran Shrimp taco is so damn spicy, you'll want to take a cold shower when you finish it.",
    link: "http://tacombi.com",
    createdAt: "2019-08-25T16:02:39.646Z",
    updatedAt: "2019-08-25T16:02:39.646Z"
  },
  {
    id: 11,
    rating: 8.4,
    name: "Fette Sau",
    number: "(718) 963-3404",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/35612_HewKmzkwQ4CHNaRr9cMC8G5h6o9nfwW3UqaZZGXbYtg.jpg",
    Summary:
      "Bring extra napkins. Not for the mess, but for the tears of absolute pure bliss you experience while eating meat heaven.",
    link: "http://www.fettesaubbq.com",
    createdAt: "2019-08-25T16:03:23.869Z",
    updatedAt: "2019-08-25T16:03:23.869Z"
  },
  {
    id: 12,
    rating: 7.2,
    name: "The Halal Guys",
    number: "(212) 533-7707",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/4083549_NgRa1Clz1lavVDOojXJbS3FZJwD4grJYvZ3m2P9KExI.jpg",
    Summary:
      "Get the red sauce on the side! The inside of your mouth will thank you",
    link: "http://east14thstreetny.thehalalguys.com",
    createdAt: "2019-08-25T16:03:33.701Z",
    updatedAt: "2019-08-25T16:03:33.701Z"
  },
  {
    id: 13,
    rating: 8.4,
    name: "Mamoun's Falafel",
    number: "(212) 674-8685",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/rzI9JnuECAxTXidGMFv52ifs3aC1820q9tTJzpNjHvk.jpg",
    Summary:
      "NYC’s best cheap falafel costs $2.50. Also try the pita with baba ganouj or the shawarma sandwich.  Careful with the spicy sauce!",
    link: "http://www.mamouns.com",
    createdAt: "2019-08-25T16:03:46.347Z",
    updatedAt: "2019-08-25T16:03:46.347Z"
  },
  {
    id: 14,
    rating: 8.1,
    name: "BXL Zoute",
    number: "(646) 692-9282",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/21767105_Q61J6AX_qiLz-sdmAymdaoCNfTsP1XPi76xZ4NyuNPw.jpg",
    Summary:
      "All you can eat mussels for $20 on Mondays! Comes with a Stella Artois.",
    link: "http://bxlrestaurants.com",
    createdAt: "2019-08-25T17:17:51.568Z",
    updatedAt: "2019-08-25T17:17:51.568Z"
  },
  {
    id: 15,
    rating: 8.7,
    name: "Roberta's Pizza",
    number: "(718) 417-1118",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/13946959_YTgYLzauYRMwxG8N_56c2_Xnbm1NAQHumUzQCzNFR8k.jpg",
    Summary:
      "Here's what happens when hipster chefs get it right.  Market-driven goodness and go-to pizzas. Check out the Heritage Radio Network, which broadcasts from the dining room on Sundays. [Eater 38 Member]",
    link: "http://www.robertaspizza.com",
    createdAt: "2019-08-25T17:21:41.920Z",
    updatedAt: "2019-08-25T17:21:41.920Z"
  },
  {
    id: 16,
    rating: 8.1,
    name: "Obicà Mozzarella Bar Pizza e Cucina",
    number: "(212) 777-2754",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/92266999_Y71Adexkh3So4zTHwj5orgJUg-BbIxFMOAlWz0JvihQ.jpg",
    Summary: "Burata Pizza and salads are delicious! Well done Obica.",
    link: "http://obica.com/portal/US/en/home/",
    createdAt: "2019-08-25T17:21:49.639Z",
    updatedAt: "2019-08-25T17:21:49.639Z"
  },
  {
    id: 17,
    rating: 7.8,
    name: "Hao Noodle and Tea by Madam Zhu's Kitchen",
    number: "(212) 633-8900",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/697943_V532g67E1eVVJGa_XYsE56WvwkrESa7b0rWx-y44RKs.jpg",
    Summary: "Soup dumplings and lion head noodles soup 🙌🏼🙌🏼",
    link: "http://madamzhu.com",
    createdAt: "2019-08-25T17:22:31.457Z",
    updatedAt: "2019-08-25T17:22:31.457Z"
  },
  {
    id: 18,
    rating: 8.2,
    name: "Ramen-Ya",
    number: "(212) 989-5440",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/9028211_ul9k9AW4YPr0UNhy4x156h0-BqnMmx6IsTCPls7PSX0.jpg",
    Summary: "Very good Tonkotsu ramen! (Shio black)",
    link: "http://www.ramenya.nyc",
    createdAt: "2019-08-25T17:22:35.486Z",
    updatedAt: "2019-08-25T17:22:35.486Z"
  },
  {
    id: 19,
    rating: 8.4,
    name: "Tina's Cuban Cuisine",
    number: "(212) 679-3500",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/4271021_kZPwUPn2GF4AjpkYvt9Av_7wTqAhLlcYFE8b3jGXd5A.jpg",
    Summary:
      "Hands down, best lunch place in Midtown. Fast service, friendly staff, large portions, and perhaps most importantly, Cuban food! Plus, I challenge you to spend more than $10. (4 of 4 petals via Fondu)",
    link: "http://tinascubancuisine.com",
    createdAt: "2019-08-25T17:22:43.023Z",
    updatedAt: "2019-08-25T17:22:43.023Z"
  },
  {
    id: 20,
    rating: 8.3,
    name: "Sophie's Cuban Cuisine",
    number: "(212) 260-8884",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/EEk2hx-fyYiWcQNHE9WUFvTJHnflXOoYZI27ZyW0WEQ.jpg",
    Summary:
      "Pernil with a Twist: Chunks of roast pork—the kind you want to pick out and relish separately. Among the onion slivers and jalapeno-green sauce, there are homely fried lumps of sweet plantain.",
    link: "http://sophiescuban.com",
    createdAt: "2019-08-25T17:22:47.310Z",
    updatedAt: "2019-08-25T17:22:47.310Z"
  },
  {
    id: 21,
    rating: 7.4,
    name: "Holy Cow",
    number: null,
    URL:
      "https://fastly.4sqi.net/img/general/500x500/542744165_Yu54KAcSYvMhjHovUvwOFJsLOjMvT6JdkPXUzxB6pLY.jpg",
    Summary:
      "Was pleasantly surprised by this burger! Perfectly cooked, fresh roll and great sauce! Go to for holy cow burger 🍔",
    link: null,
    createdAt: "2019-08-25T17:22:51.349Z",
    updatedAt: "2019-08-25T17:22:51.349Z"
  },

  {
    id: 23,
    rating: 8.4,
    name: "Brooklyn Bowl",
    number: "(718) 963-3369",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/620779_8yeK5SXYMlxJsWUk-S85oEjmlZf1k6x2B6Z-4B4uWpE.jpg",
    Summary:
      "16-lane bowling alley, 600-capacity performance venue with live music 7 nights a week. The food is by Blue Ribbon and the fried chicken is NOT to be missed! Home of Lebowski fest! The Dude Abides.",
    link: "http://www.brooklynbowl.com",
    createdAt: "2019-08-25T17:23:22.101Z",
    updatedAt: "2019-08-25T17:23:22.101Z"
  },
  {
    id: 24,
    rating: 7.5,
    name: "Nowadays",
    number: "(347) 523-8535",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/3877716_i4qFzjiZIYq0lmlrDaedBSTKSnAt56V3GojNH-FE_Qo.jpg",
    Summary:
      "Amazing outdoor space that feels like a backyard. V low-key and relaxed space to grab some beers (Porkslap is a personal fave) and great food.",
    link: "http://nowadays.nyc",
    createdAt: "2019-08-25T17:23:30.472Z",
    updatedAt: "2019-08-25T17:23:30.472Z"
  },
  {
    id: 25,
    rating: 8.3,
    name: "Trophy Bar",
    number: "(347) 227-8515",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/36106029_SOnss1k5aJBs1OdlkSrbZLtyDMYIV0fr9l2QBpw6RCc.jpg",
    Summary:
      "Suzy Chase :: Saturday nights 7-10pm spins vintage soul, smooth grooves & funk.",
    link: "http://www.trophybar.com",
    createdAt: "2019-08-25T17:23:35.538Z",
    updatedAt: "2019-08-25T17:23:35.538Z"
  },
  {
    id: 26,
    rating: 8.1,
    name: "Duff's",
    number: "(718) 599-2092",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/E4NFrj5H4AOkAsD2D0YfSIWXHjXXl5tPZqnej5dfoOs.jpg",
    Summary: "Spin the wheel, just watch out for #12",
    link: "http://duffsbrooklyn.com",
    createdAt: "2019-08-25T17:23:39.138Z",
    updatedAt: "2019-08-25T17:23:39.138Z"
  },
  {
    id: 27,
    rating: 8.3,
    name: "Hard Rock Cafe",
    number: "(212) 343-3355",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/56952868_MYhWDek_8B2p96hgWlr_PCrkhkmaosrieOZ-ZV3zT_A.jpg",
    Summary:
      "The original HRC New York was the third Hard Rock Cafe in the world, after the original in London and the old Los Angeles location. The Times Square location opened 2005 and it rocks. Believe it.",
    link: "http://www.hardrock.com",
    createdAt: "2019-08-25T17:23:43.190Z",
    updatedAt: "2019-08-25T17:23:43.190Z"
  },
  {
    id: 28,
    rating: 8.3,
    name: "Five Guys",
    number: "(212) 675-2229",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/38794674_jOcTkfzBEnw-L06x1O9IvcCRY0FhVQuBlGdqxtF4oy8.jpg",
    Summary: "Make yourself the ultimate suicide at their soda machine!",
    link: "http://fiveguys.com",
    createdAt: "2019-08-25T17:23:47.594Z",
    updatedAt: "2019-08-25T17:23:47.594Z"
  },
  {
    id: 29,
    rating: 7.4,
    name: "Brother Jimmy's BBQ",
    number: "(212) 779-7427",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/1e63ZUoxO8mSRBPQECSJpS9xJ_mo5K1JHiAyOUNolpk.jpg",
    Summary: "Try the interns",
    link: "http://www.facebook.com/brotherjimmysbbq",
    createdAt: "2019-08-25T17:24:00.268Z",
    updatedAt: "2019-08-25T17:24:00.268Z"
  },
  {
    id: 30,
    rating: 6.6,
    name: "Dallas BBQ",
    number: "(212) 462-0001",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/11162816_JZRlQaahmUi1-wBS9b2-NBpmdPm2fztIM8Whg4C34TI.jpg",
    Summary:
      "When hungry, tell the waitress what you would like to eat and they'll bring it to you when ready.",
    link: "http://dallasbbq.com",
    createdAt: "2019-08-25T17:24:04.656Z",
    updatedAt: "2019-08-25T17:24:04.656Z"
  },
  {
    id: 31,
    rating: 6,
    name: "The Houndstooth Pub",
    number: "(212) 643-0034",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/TC0XVTWJSIWDXIP11BO0MQ1WSYEH2OWJHX1D3RIKXNPNXHB4.jpg",
    Summary:
      "Come visit us at Houndstooth Pub in NYC's fashion Center. Our menu - http://bit.ly/17l80s",
    link: "http://www.houndstoothpub.com",
    createdAt: "2019-08-25T17:24:17.341Z",
    updatedAt: "2019-08-25T17:24:17.341Z"
  },
  {
    id: 32,
    rating: 7.4,
    name: "The Irish American Pub",
    number: "(212) 349-3278",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/YFZV3VHNR1RLIZQJ51FNAIYW3NETYQ0B55H0VEXKPZHS1F31.jpg",
    Summary: "This. Is. The. Best. Bar. In. AMERICA.",
    link: "http://irishamericanpubnyc.com",
    createdAt: "2019-08-25T17:25:06.306Z",
    updatedAt: "2019-08-25T17:25:06.306Z"
  },
  {
    id: 33,
    rating: 8.5,
    name: "Dough",
    number: "(212) 243-6844",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/21646809_bo9C4f1nZtt_jxxc397tLatCwoJ6e2qe4ONfCYN2_XI.jpg",
    Summary:
      "Dough opens its newest shop in Manhattan. Taste the shop's superlative yeast doughnuts, especially their incredible Dulce de Leche creations topped with slivered almonds.",
    link: "http://www.doughbrooklyn.com",
    createdAt: "2019-08-25T17:25:17.301Z",
    updatedAt: "2019-08-25T17:25:17.301Z"
  },
  {
    id: 34,
    rating: 6.5,
    name: "Berry Froyo",
    number: null,
    URL:
      "https://fastly.4sqi.net/img/general/500x500/zs6fJkBxS6HH8Gd7AmVxCSWZLpHueiLezeWQB1Kok9w.jpg",
    Summary: "Very nice guy, here between 6pm to 9pm",
    link: null,
    createdAt: "2019-08-25T17:25:23.541Z",
    updatedAt: "2019-08-25T17:25:23.541Z"
  },
  {
    id: 35,
    rating: 7.1,
    name: "Olive Garden",
    number: "(212) 333-3254",
    URL:
      "https://fastly.4sqi.net/img/general/500x500/E4M41VFSWFLTMH3FYOFUCZNARC0SNSKU15UQ2NQWCOFVYUSZ.jpg",
    Summary:
      "Can’t believe anyone would go to New York and eat at the Olive Garden. Wait… UNLIMITED FREE BREAD STICKS?? I’m there! (See? That’s how they get you!)",
    link: "http://www.olivegarden.com/italian-restaurant/fl/orlando/1002/",
    createdAt: "2019-08-25T17:25:40.181Z",
    updatedAt: "2019-08-25T17:25:40.181Z"
  }
];
function Homeratingcardcontainer(props) {
  return (
    <React.Fragment>
      Trending Restaurants
      <div className="home-ratingcard-container">
        {venues.map(venue => {
          const { id, rating, name, number, URL, Summary, link } = venue;
          return (
            <div className="homeratingcards">
              <RatingCardRefactor
                key={id}
                ratingData={rating}
                name={name}
                number={number}
                linkURL={link}
                imgURL={URL}
                summary={Summary}
              ></RatingCardRefactor>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Homeratingcardcontainer;
