<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>The Taste Restro | Digital Menu</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,Helvetica,sans-serif;
    background:
        linear-gradient(rgba(25,16,10,.88),rgba(25,16,10,.94)),
        url("https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=80");
    background-attachment:fixed;
    background-size:cover;
    color:#fff;
}

header{
    text-align:center;
    padding:55px 15px 40px;
    border-bottom:2px solid #c59a55;
}

.logo{
    font-family:Georgia,serif;
    color:#e8c98c;
    font-size:18px;
    letter-spacing:4px;
}

header h1{
    font-family:Georgia,serif;
    font-size:55px;
    color:#f5dfaf;
    margin:4px 0;
    text-shadow:0 4px 12px #000;
}

header p{
    color:#ddd;
    font-size:15px;
}

.search-area{
    max-width:1100px;
    margin:25px auto 10px;
    padding:0 15px;
}

#search{
    width:100%;
    padding:16px 20px;
    border-radius:30px;
    border:1px solid #b38a4a;
    outline:none;
    background:#211a14;
    color:#fff;
    font-size:16px;
}

#search::placeholder{
    color:#aaa;
}

.categories{
    max-width:1100px;
    margin:15px auto;
    padding:0 15px;
    display:flex;
    gap:8px;
    overflow-x:auto;
}

.categories button{
    white-space:nowrap;
    padding:9px 15px;
    border:1px solid #8d6940;
    background:#211a14;
    color:#e9d09c;
    border-radius:20px;
    cursor:pointer;
}

.categories button.active,
.categories button:hover{
    background:#965542;
    color:white;
}

.menu{
    max-width:1100px;
    margin:auto;
    padding:10px 15px 180px;
}

.category-title{
    margin:30px 0 18px;
    text-align:center;
}

.category-title span{
    display:inline-block;
    background:#8d4d3f;
    padding:8px 25px;
    border-radius:4px;
    color:#fff;
    font-weight:bold;
    font-size:20px;
}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
    gap:18px;
}

.card{
    background:rgba(30,25,20,.96);
    border:1px solid #60492c;
    border-radius:14px;
    overflow:hidden;
    box-shadow:0 8px 20px rgba(0,0,0,.45);
    transition:.2s;
}

.card:hover{
    transform:translateY(-4px);
    border-color:#c59a55;
}

.food-img{
    width:100%;
    height:165px;
    object-fit:cover;
    display:block;
}

.info{
    padding:14px;
}

.info h3{
    color:#f2ddb1;
    font-size:17px;
    min-height:40px;
}

.price{
    color:#fff;
    font-size:17px;
    font-weight:bold;
    margin:7px 0 12px;
}

.size-price{
    display:flex;
    gap:7px;
    margin-bottom:12px;
}

.size-price button{
    flex:1;
    padding:7px;
    border:1px solid #795d39;
    border-radius:7px;
    background:#18130f;
    color:#eee;
    cursor:pointer;
}

.size-price button.selected{
    background:#965542;
    border-color:#d2a45b;
}

.qty{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#100e0c;
    padding:6px;
    border-radius:9px;
}

.qty button{
    width:35px;
    height:35px;
    border:none;
    border-radius:7px;
    background:#965542;
    color:#fff;
    font-size:21px;
    cursor:pointer;
}

.qty span{
    font-weight:bold;
}

.no-result{
    text-align:center;
    padding:50px;
    color:#bbb;
    font-size:18px;
}

/* CART */
.cart{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    z-index:1000;
    background:#100e0c;
    border-top:2px solid #b58b4c;
    box-shadow:0 -5px 25px rgba(0,0,0,.7);
}

.cart-inner{
    max-width:1100px;
    margin:auto;
    padding:12px 15px;
}

.cart-top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
}

.cart-top h2{
    color:#efd29a;
    font-size:19px;
}

.cart-count{
    background:#965542;
    padding:4px 9px;
    border-radius:20px;
    font-size:13px;
}

.cart-body{
    display:none;
    max-height:270px;
    overflow:auto;
    padding-top:10px;
}

.cart.open .cart-body{
    display:block;
}

.cart-item{
    display:flex;
    justify-content:space-between;
    gap:10px;
    padding:8px 0;
    border-bottom:1px solid #302820;
    font-size:14px;
}

.remove{
    border:none;
    background:none;
    color:#e27868;
    cursor:pointer;
}

.table-box{
    margin-top:12px;
    display:flex;
    gap:10px;
}

.table-box select{
    flex:1;
    padding:12px;
    border-radius:8px;
    background:#211a14;
    border:1px solid #795d39;
    color:white;
}

.order-btn{
    width:100%;
    padding:14px;
    margin-top:10px;
    border:none;
    border-radius:9px;
    background:#25d366;
    color:white;
    font-size:17px;
    font-weight:bold;
    cursor:pointer;
}

/* MOBILE */
@media(max-width:600px){

    header{
        padding:35px 10px;
    }

    header h1{
        font-size:39px;
    }

    .grid{
        grid-template-columns:repeat(2,1fr);
        gap:11px;
    }

    .food-img{
        height:125px;
    }

    .info{
        padding:10px;
    }

    .info h3{
        font-size:14px;
    }

    .price{
        font-size:14px;
    }

    .qty button{
        width:31px;
        height:31px;
    }

    .category-title span{
        font-size:17px;
    }
}
</style>
</head>

<body>

<header>
    <div class="logo">THE</div>
    <h1>Taste Restro</h1>
    <p>Fresh Food • Great Taste • Good Times</p>
</header>

<div class="search-area">
    <input
        id="search"
        type="text"
        placeholder="🔎 Search food item..."
        oninput="render()"
    >
</div>

<div class="categories" id="categories"></div>

<main class="menu" id="menu"></main>

<!-- CART -->
<div class="cart" id="cart">

    <div class="cart-inner">

        <div class="cart-top" onclick="toggleCart()">
            <h2>🛒 Your Order</h2>
            <span class="cart-count" id="cartCount">0 items</span>
        </div>

        <div class="cart-body">

            <div id="cartItems"></div>

            <div class="table-box">
                <select id="table">
                    <option value="">🪑 Select Table Number</option>
                    <option>Table 1</option>
                    <option>Table 2</option>
                    <option>Table 3</option>
                    <option>Table 4</option>
                    <option>Table 5</option>
                    <option>Table 6</option>
                    <option>Table 7</option>
                    <option>Table 8</option>
                    <option>Table 9</option>
                    <option>Table 10</option>
                    <option>Table 11</option>
                    <option>Table 12</option>
                    <option>Table 13</option>
                    <option>Table 14</option>
                    <option>Table 15</option>
                    <option>Table 16</option>
                    <option>Table 17</option>
                    <option>Table 18</option>
                    <option>Table 19</option>
                    <option>Table 20</option>
                </select>
            </div>

            <div style="text-align:right;margin-top:10px;font-size:20px;">
                Total: ₹<b id="total">0</b>
            </div>

            <button class="order-btn" onclick="placeOrder()">
                📲 Place Order on WhatsApp
            </button>

        </div>

    </div>
</div>

<script>

/* =====================================================
   EXACT MENU FROM YOUR PHOTOS
===================================================== */

const menu = [

{
cat:"Tea",
items:[
["Tea",30,"tea"],
["Black Tea",30,"tea"],
["Lemon Tea",30,"lemontea"]
]},

{
cat:"Coffee",
items:[
["Hot Coffee",70,"hotcoffee"],
["Black Coffee",50,"blackcoffee"],
["Cold Coffee",110,"coldcoffee"],
["Cold Coffee (With IceCream)",130,"icecreamcoffee"]
]},

{
cat:"Drinks",
items:[
["Fresh lime soda",60,"limesoda"],
["Cold Drink",70,"coldrink"],
["Lassi",70,"lassi"],
["Badam Lassi",80,"badamlassi"]
]},

{
cat:"Shakes",
items:[
["Mango Shake",110,"mangoshake"],
["Oreo Shake",110,"oreoshake"],
["Chocolate Shake",120,"chocolateshake"],
["Butter scotch shake",120,"butterscotch"]
]},

{
cat:"Burger / Sandwich",
items:[
["Veg Burger",100,"vegburger"],
["Chesse Burger",120,"cheeseburger"],
["Veg Sandwich",90,"vegsandwich"],
["Veg Grilled Sandwich",120,"grilledsandwich"]
]},

{
cat:"Momos",
items:[
["Veg Momos",90,"vegmomos"],
["Fried Momos",140,"friedmomos"],
["Chilli Momos",160,"chillimomos"]
]},

{
cat:"Maggi",
items:[
["Plain Maggi",40,"maggi"],
["Vegetable Maggi",70,"vegmaggie"],
["Butter Maggi",80,"buttermaggi"],
["Egg Maggi",110,"eggmaggie"],
["Chicken Maggi",130,"chickenmaggi"]
]},

{
cat:"Breakfast",
items:[
["Aalu Paratha",60,"aloo-paratha"],
["Onion Paratha",70,"onionparatha"],
["Aalu Pyaz Paratha",70,"aloo-pyaz"],
["Bread Butter",60,"breadbutter"],
["Mix Paatha",80,"mixparatha"],
["Paneer Paratha",90,"paneerparatha"],
["Masala Omelette",70,"omelette"],
["Bread Omelette",90,"breadomelette"]
]},

{
cat:"Pakora",
items:[
["Aalu Pakora",100,"aloo-pakora"],
["Aalu Pyaz Pakora",130,"aloo-pyaz-pakora"],
["Mix Pakora",160,"mixpakora"],
["Paneer Pakora",190,"paneerpakora"]
]},

{
cat:"Macroni",
items:[
["Veg Macroni",140,"macroni"],
["Veg Macroni (extra chesse)",160,"macroni"],
["Chicken Macroni",180,"chickenmacroni"]
]},

{
cat:"Soup",
items:[
["Veg Soup",90,"vegsoup"],
["Hot Manchow",100,"manchowsoup"],
["Chicken Soup",130,"chickensoup"]
]},

{
cat:"Starter Veg",
items:[
["Spring Roll",120,"springroll"],
["Chilly Potato",150,"chillipotato"],
["Honey Chilly Potato",170,"honeychillipotato"],
["French Fries",100,"fries"],
["Paneer Finger",170,"paneerfinger"],
["Chilly Paneer",230,"chillipaneer"],
["Chilly Mushroom",210,"chillymushroom"],
["Paneer Tikka",250,"paneertikka"],
["Soya Chaap",200,"soyachaap"],
["Peanut Chaat",180,"peanutchaat"]
]},

{
cat:"Starter Non Veg",
items:[
["Chicken Lollipop",230,"chickenlollipop"],
["Chilly Chicken",220,"chillychicken"],
["Chicken Pakora",200,"chickenpakora"],
["Fish Pakora",230,"fishpakora"],
["Tandoori Chicken",260,"tandoorichicken"]
]},

{
cat:"Noodles Veg & Non Veg",
items:[
["Veg Noodles",90,"vegnoodles"],
["Veg Hakka Noodles",150,"hakka"],
["Veg Schezwan Noodles",160,"schezwan"],
["Veg Singapuri Noodles",170,"singapuri"],
["Egg Noodles",140,"eggnoodles"],
["Chicken Noodles",180,"chickennoodles"]
]},

{
cat:"Rice / Biryani",
items:[
["Plain Rice",100,"plainrice"],
["Jeera Rice",120,"jeerarice"],
["Veg Fried Rice",160,"vegfriedrice"],
["Egg Fried Rice",170,"eggfriedrice"],
["Chicken Fried Rice",190,"chickenfriedrice"],
["Veg Biryani",210,"vegbiryani"],
["Chicken Biryani",260,"chickenbiryani"]
]},

{
cat:"Veg Main Course",
items:[
["Kadhai Paneer",190,"paneer"],
["Sahi Paneer",180,"paneer"],
["Paneer Butter Masala",190,"butterpaneer"],
["Muttar Paneer",180,"mutterpaneer"],
["Paneer Bhurji",220,"paneerbhurji"],
["Dal Fry",150,"dalfry"],
["Dal Yellow Tadka",160,"dal"],
["Dal Makhni",220,"dalmakhni"],
["Mushroom Masala",220,"mushroommasala"],
["Mix Veg",210,"mixveg"],
["Allu Jeera",150,"aloojeera"],
["Allu Gobhi Masala",180,"aloogobhi"]
]},

{
cat:"Non Veg Main Course",
items:[
["Butter Chicken",270,"butterchicken"],
["Kadhai Chicken",260,"kadhaichicken"],
["Chicken Masala",230,"chickenmasala"]
]},

{
cat:"Tawa Roti / Tandoor Roti",
items:[
["Tawa Roti",10,"roti"],
["Tawa Butter Roti",15,"butterroti"],
["Tandoori Roti",15,"tandooriroti"],
["Tandoori Butter Roti",20,"buttertandoori"],
["Butter Naan",40,"naan"]
]},

{
cat:"Salad / Papad",
items:[
["Green Salad",70,"salad"],
["Papad (2pcs)",40,"papad"],
["Mix Raita",80,"raita"]
]},

{
cat:"Desert",
items:[
["Vanila Ice Cream",50,"icecream"],
["Butter Scotch",60,"butterscotchice"]
]},

{
cat:"Manchurian",
items:[
["Veg. Manchurian",150,"vegmanchurian"],
["Non. Manchurian",180,"nonvegmanchurian"]
]}

];


/* =====================================================
   IMAGE SYSTEM
   Representative food images.
   Replace individual URLs later with your own photos.
===================================================== */

const images={

tea:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
blacktea:"https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=700&q=80",
lemontea:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",

hotcoffee:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
blackcoffee:"https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=700&q=80",
coldcoffee:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
icecreamcoffee:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",

limesoda:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
coldrink:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=700&q=80",
lassi:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
badamlassi:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",

mangoshake:"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80",
oreoshake:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
chocolateshake:"https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=700&q=80",
butterscotch:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",

vegburger:"https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80",
cheeseburger:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
vegsandwich:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
grilledsandwich:"https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=700&q=80",

vegmomos:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
friedmomos:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
chillimomos:"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=80",

maggi:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
vegmaggie:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
buttermaggi:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
eggmaggie:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
chickenmaggi:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",

aloo-paratha:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
onionparatha:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
aloo-pyaz:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
breadbutter:"https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=700&q=80",
mixparatha:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
paneerparatha:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
omelette:"https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=700&q=80",
breadomelette:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80",

aloo-pakora:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
aloo-pyaz-pakora:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
mixpakora:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
paneerpakora:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",

macroni:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
chickenmacroni:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",

vegsoup:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
manchowsoup:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
chickensoup:"https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=700&q=80",

springroll:"https://images.unsplash.com/photo-1548507200-3c9c3e4a9d8d?auto=format&fit=crop&w=700&q=80",
chillipotato:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
honeychillipotato:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
fries:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
paneerfinger:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
chillipaneer:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
chillymushroom:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80",
paneertikka:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80",
soyachaap:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
peanutchaat:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",

chickenlollipop:"https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=80",
chillychicken:"https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=80",
chickenpakora:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
fishpakora:"https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=700&q=80",
tandoorichicken:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",

vegnoodles:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80",
hakka:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80",
schezwan:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80",
singapuri:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80",
eggnoodles:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80",
chickennoodles:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80",

plainrice:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
jeerarice:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
vegfriedrice:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
eggfriedrice:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
chickenfriedrice:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
vegbiryani:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=700&q=80",
chickenbiryani:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=700&q=80",

paneer:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
butterpaneer:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
mutterpaneer:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
paneerbhurji:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
dalfry:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
dal:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
dalmakhni:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
mushroommasala:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80",
mixveg:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
aloojeera:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
aloogobhi:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",

butterchicken:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
kadhaichicken:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
chickenmasala:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",

roti:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
butterroti:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
tandooriroti:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
buttertandoori:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
naan:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",

salad:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
papad:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
raita:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",

icecream:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
butterscotchice:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",

vegmanchurian:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
nonvegmanchurian:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
};


/* =====================================================
   CART
===================================================== */

let cart={};
let activeCategory="All";


function getItems(){

    let result=[];

    menu.forEach(section=>{

        section.items.forEach(item=>{

            result.push({
                name:item[0],
                price:item[1],
                image:images[item[2]],
                category:section.cat
            });

        });

    });

    return result;
}

const allItems=getItems();


/* =====================================================
   CATEGORY BUTTONS
===================================================== */

const categoryBox=document.getElementById("categories");

categoryBox.innerHTML=
`<button class="active" onclick="setCategory('All',this)">All</button>`;

menu.forEach(section=>{

    categoryBox.innerHTML+=
    `<button onclick="setCategory('${section.cat}',this)">
        ${section.cat}
    </button>`;

});


function setCategory(category,button){

    activeCategory=category;

    document.querySelectorAll(".categories button")
        .forEach(b=>b.classList.remove("active"));

    button.classList.add("active");

    render();
}


/* =====================================================
   RENDER
===================================================== */

function render(){

    const search=
        document.getElementById("search")
        .value
        .toLowerCase()
        .trim();

    const container=document.getElementById("menu");

    container.innerHTML="";

    let found=false;

    menu.forEach(section=>{

        if(activeCategory!=="All" &&
           activeCategory!==section.cat){
            return;
        }

        let items=section.items.filter(item=>
            item[0].toLowerCase().includes(search)
        );

        if(items.length===0) return;

        found=true;

        const title=document.createElement("div");

        title.className="category-title";

        title.innerHTML=`<span>${section.cat}</span>`;

        container.appendChild(title);


        const grid=document.createElement("div");

        grid.className="grid";


        items.forEach(item=>{

            const name=item[0];
            const price=item[1];
            const image=images[item[2]];

            const quantity=cart[name]?.qty || 0;

            const card=document.createElement("div");

            card.className="card";

            card.innerHTML=`

                <img
                    class="food-img"
                    src="${image}"
                    alt="${name}"
                    loading="lazy"
                >

                <div class="info">

                    <h3>${name}</h3>

                    <div class="price">
                        ₹${price}
                    </div>

                    <div class="qty">

                        <button
                            onclick="changeQty('${name.replace(/'/g,"\\'")}',${price},-1)">
                            −
                        </button>

                        <span>${quantity}</span>

                        <button
                            onclick="changeQty('${name.replace(/'/g,"\\'")}',${price},1)">
                            +
                        </button>

                    </div>

                </div>
            `;

            grid.appendChild(card);

        });

        container.appendChild(grid);

    });


    if(!found){

        container.innerHTML=
        `<div class="no-result">
            😕 No food item found.
        </div>`;

    }

}


/* =====================================================
   QUANTITY
===================================================== */

function changeQty(name,price,change){

    if(!cart[name]){
        cart[name]={
            price:price,
            qty:0
        };
    }

    cart[name].qty+=change;

    if(cart[name].qty<=0){
        delete cart[name];
    }

    render();
    updateCart();
}


/* =====================================================
   CART
===================================================== */

function updateCart(){

    const box=document.getElementById("cartItems");

    box.innerHTML="";

    let total=0;
    let count=0;

    Object.keys(cart).forEach(name=>{

        const item=cart[name];

        const amount=item.price*item.qty;

        total+=amount;
        count+=item.qty;

        box.innerHTML+=`

            <div class="cart-item">

                <span>
                    ${name} × ${item.qty}
                </span>

                <span>
                    ₹${amount}

                    <button
                        class="remove"
                        onclick="removeItem('${name.replace(/'/g,"\\'")}')">
                        ✕
                    </button>

                </span>

            </div>
        `;

    });


    if(count===0){

        box.innerHTML=
        `<div style="color:#888;padding:10px 0">
            No items selected.
        </div>`;

    }


    document.getElementById("total").innerText=total;

    document.getElementById("cartCount").innerText=
        count+" item"+(count===1?"":"s");

}


function removeItem(name){

    delete cart[name];

    render();
    updateCart();
}


/* =====================================================
   CART OPEN/CLOSE
===================================================== */

function toggleCart(){

    document.getElementById("cart")
        .classList.toggle("open");

}


/* =====================================================
   WHATSAPP
===================================================== */

function placeOrder(){

    const table=
        document.getElementById("table").value;

    if(!table){

        alert("Please select your table number.");

        document.getElementById("cart")
            .classList.add("open");

        return;
    }


    if(Object.keys(cart).length===0){

        alert("Please select at least one food item.");

        return;
    }


    let message=
`🍽️ *THE TASTE RESTRO*

🪑 *Table:* ${table}

*ORDER:*
`;


    let total=0;


    Object.keys(cart).forEach(name=>{

        const item=cart[name];

        const amount=item.price*item.qty;

        total+=amount;

        message+=
`• ${name} × ${item.qty} = ₹${amount}
`;

    });


    message+=
`
💰 *TOTAL: ₹${total}*

Please prepare the order. 🙏`;


    const phone="919520951715";


    const whatsapp=
        "https://wa.me/"+
        phone+
        "?text="+
        encodeURIComponent(message);


    window.open(whatsapp,"_blank");

}


/* START */

render();
updateCart();

</script>

</body>
</html>
