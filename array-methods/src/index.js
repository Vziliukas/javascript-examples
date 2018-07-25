const imInGuestList = list =>
  list.some(person => person.name === 'Vytautas Žiliukas' && person.vip);

const AttendingPlusOne = list =>
  list.filter(person => person.attending).every(person => person.plusOne);

const AnyAttending = list => list.some(person => person.attending);

fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
  .then(response => response.json())
  .then((result) => {
    console.log(imInGuestList(result));
  })
  .catch(err => console.log(err));

fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
  .then(response => response.json())
  .then((result) => {
    console.log(AttendingPlusOne(result));
    console.log(AnyAttending(result));
  })
  .catch(err => console.log(err));

const getData = async () => {
  try {
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party');
    const data = await response.json();

    console.log(imInGuestList(data));
  } catch (err) {
    console.error(`Error ${err}`);
  }
};

getData();

const priceList = [
  {
    name: 'Gorgeous Cotton Gloves',
    id: 'GorgeousCottonGlovesffe600cc-efa8-4365-ba72-092eb5c0b6521531409691649',
    selected: false,
    description:
      'Sit mollitia dicta quasi officiis consectetur velit dolore aliquid. Est quam voluptatem non voluptas doloremque animi accusantium iste. Nostrum recusandae inventore tenetur suscipit sequi.',
    price: '$992.00',
    color: 'yellow',
    stock: 2,
  },
  {
    name: 'Handmade Frozen Chair',
    id: 'HandmadeFrozenChaire668f64c-6f10-4f20-9d8b-a292b1ce91981531409691650',
    selected: false,
    description:
      'Quis similique id ea esse repudiandae quis quia eum. Rerum ducimus tempore asperiores libero. Est fugit placeat nemo dolorum nulla quia quis. Et cumque consequatur sit fugiat. Delectus sit ab a voluptates ullam vel quia officia. Porro rerum consectetur minus officia fuga ut natus.',
    price: '$578.00',
    color: 'cyan',
    stock: 3,
  },
  {
    name: 'Sleek Fresh Computer',
    id: 'SleekFreshComputer52067123-8571-45e8-8070-9bb5e8a212f11531409691650',
    selected: true,
    description:
      'Deserunt qui sapiente rerum corrupti. Aliquid alias facere hic magni alias. Dolor quia possimus sint repellendus voluptas. Accusantium sit eligendi perspiciatis qui. Sint officiis voluptates at est et et facere enim. Recusandae nam nemo voluptas magni est tempore et.',
    price: '$673.00',
    color: 'pink',
    stock: 2,
  },
  {
    name: 'Handmade Rubber Shirt',
    id: 'HandmadeRubberShirt4f9a3830-8ac4-4a6f-bb64-6bc74700f3e11531409691650',
    selected: false,
    description:
      'Aut est praesentium. Quo et dolore nihil sapiente inventore dicta qui quia. Tempora est possimus ut dolorum eos odio qui at. Totam laudantium quae ipsa libero. Autem voluptatum omnis corrupti quae. Quis praesentium quisquam est recusandae iusto eos.',
    price: '$665.00',
    color: 'teal',
    stock: 1,
  },
  {
    name: 'Incredible Granite Sausages',
    id: 'IncredibleGraniteSausagesa9c91618-4fe9-4a07-9fed-3138f1057fa11531409691650',
    selected: true,
    description:
      'Distinctio ullam in optio dolorem necessitatibus in debitis dolore omnis. Corrupti in dignissimos nobis soluta. Dignissimos ab ab sint omnis. Odio dolor ut non doloribus ea nobis in maxime veritatis. Ullam rerum hic soluta.',
    price: '$751.00',
    color: 'violet',
    stock: 1,
  },
  {
    name: 'Tasty Cotton Chicken',
    id: 'TastyCottonChicken0b7387e3-13c3-46be-87ad-2dafb5d685521531409691650',
    selected: false,
    description:
      'Voluptas natus sint natus cupiditate distinctio itaque exercitationem mollitia illum. Rerum saepe officiis qui. Qui officiis non cumque animi at. Sit et velit quis placeat quo doloremque autem quidem in. Quaerat quae cum delectus velit molestias ut quibusdam.',
    price: '$695.00',
    color: 'salmon',
    stock: 3,
  },
  {
    name: 'Rustic Wooden Chips',
    id: 'RusticWoodenChips18948726-4b8d-47e1-aab0-47c1a3bdf8c81531409691650',
    selected: true,
    description:
      'Corporis totam sed sit rerum fugiat. Est pariatur dolore explicabo consequatur. Cupiditate cum odit placeat aspernatur et et voluptatum. Necessitatibus maxime at in rerum. Dignissimos blanditiis blanditiis.',
    price: '$964.00',
    color: 'indigo',
    stock: 1,
  },
  {
    name: 'Handcrafted Rubber Pants',
    id: 'HandcraftedRubberPantse8f3a137-7966-4d2b-9e14-4484f5b645df1531409691650',
    selected: false,
    description:
      'Qui nostrum cumque voluptas amet aut id temporibus sint et. Necessitatibus ut iusto iste minus. Voluptatibus dolore tempore. Itaque eaque ullam enim et. Beatae laborum earum temporibus tempora ex officiis. Eaque similique eum ipsum corrupti ipsum aliquid assumenda enim.',
    price: '$722.00',
    color: 'grey',
    stock: 2,
  },
  {
    name: 'Fantastic Plastic Table',
    id: 'FantasticPlasticTable79d0d9e8-819f-4081-9ce6-1674062dc8781531409691650',
    selected: false,
    description:
      'Facilis omnis et sed laboriosam nulla non. Et deserunt dignissimos reprehenderit qui et laborum dolor qui et. Dicta voluptatem nisi nisi quos recusandae sint aperiam nisi. Sunt facilis fugit magni aut nam fuga blanditiis magni quas.',
    price: '$648.00',
    color: 'blue',
    stock: 3,
  },
  {
    name: 'Generic Soft Computer',
    id: 'GenericSoftComputere8bbcc16-d867-41eb-91d3-e8d5cc77270b1531409691650',
    selected: false,
    description:
      'Quia repellendus qui voluptatem et atque delectus aut. Quo tempora tenetur aliquam odio. Nulla quam et veritatis reiciendis a alias eum neque. Est praesentium architecto. Ipsa aperiam et est qui repellat eum ducimus itaque. Nam distinctio qui voluptate ab illum.',
    price: '$24.00',
    color: 'pink',
    stock: 2,
  },
  {
    name: 'Sleek Plastic Fish',
    id: 'SleekPlasticFish7dc4d6af-7133-4644-b5de-96eb38ce4aea1531409691650',
    selected: true,
    description:
      'In aut quis sed. Dolores inventore iure quia cupiditate blanditiis. Quo iste veniam eveniet fuga voluptatem. Ipsa necessitatibus consectetur facilis aliquam odit et eaque nihil. Quos culpa earum nulla labore nihil eos error.',
    price: '$742.00',
    color: 'orange',
    stock: 1,
  },
  {
    name: 'Licensed Plastic Table',
    id: 'LicensedPlasticTable5858513d-910b-49c2-b454-ffcfa9590ab41531409691651',
    selected: true,
    description:
      'Quis sint reprehenderit accusamus inventore et commodi. Quia ex incidunt alias minima. Totam autem dignissimos doloribus porro tempora ab natus dolor.',
    price: '$172.00',
    color: 'sky blue',
    stock: 1,
  },
  {
    name: 'Gorgeous Granite Chips',
    id: 'GorgeousGraniteChips4d253494-6b95-47dd-ba1e-6ed3de5689961531409691651',
    selected: true,
    description:
      'Cumque quidem illo molestiae est. Excepturi sunt facilis est autem ratione id. Aut saepe praesentium soluta occaecati asperiores omnis praesentium dicta. Perferendis odio et cum assumenda non illum. Ab veritatis labore sint sit laudantium suscipit accusantium maxime.',
    price: '$167.00',
    color: 'pink',
    stock: 3,
  },
  {
    name: 'Licensed Steel Fish',
    id: 'LicensedSteelFish3f5366d5-d91c-4a4c-b272-3ff6d650df641531409691651',
    selected: false,
    description:
      'Qui et et nihil praesentium dolore. Alias sunt libero atque ea sed sed. Non qui in assumenda nulla. Explicabo voluptatem fugiat natus fugiat a cum enim.',
    price: '$741.00',
    color: 'black',
    stock: 0,
  },
  {
    name: 'Licensed Frozen Table',
    id: 'LicensedFrozenTablec247cb80-446b-4f21-8c4b-9cf3789b2e9b1531409691651',
    selected: true,
    description:
      'Qui animi nobis aut blanditiis veritatis distinctio incidunt. Qui nobis at deserunt harum amet dignissimos nam. Ipsam nam ipsa et aut molestiae magnam dolore quos. Facilis at unde nesciunt ut numquam. Qui dolorum nobis rerum.',
    price: '$937.00',
    color: 'fuchsia',
    stock: 1,
  },
  {
    name: 'Licensed Steel Table',
    id: 'LicensedSteelTable6deb6f31-012c-4c31-bf72-3d50290c35ef1531409691651',
    selected: true,
    description:
      'Vel atque nemo hic autem quis. Sed quae est. Aut qui laboriosam amet consequatur odit et. Sunt omnis distinctio natus et ex accusantium nulla voluptas rerum. Quos exercitationem alias eveniet minima provident odit aut.',
    price: '$284.00',
    color: 'maroon',
    stock: 2,
  },
  {
    name: 'Refined Plastic Pizza',
    id: 'RefinedPlasticPizzaef9b7da7-ac8a-442b-8006-3be296dda2451531409691651',
    selected: false,
    description:
      'Ea eos ut est velit. Hic incidunt cum neque quas nam corporis praesentium quis consequuntur. Qui totam adipisci voluptas cupiditate minus voluptatem.',
    price: '$168.00',
    color: 'maroon',
    stock: 1,
  },
  {
    name: 'Generic Concrete Towels',
    id: 'GenericConcreteTowelsda9bf860-5bfc-4ca1-8feb-837f00adb7091531409691651',
    selected: false,
    description:
      'Temporibus magnam ut aut et in. Facere magni et et temporibus. Voluptas id error incidunt ad earum. Eius distinctio aperiam omnis labore. Magni blanditiis et cum tempora repellendus repellendus voluptatum eveniet eligendi.',
    price: '$944.00',
    color: 'salmon',
    stock: 2,
  },
  {
    name: 'Gorgeous Granite Keyboard',
    id: 'GorgeousGraniteKeyboard8f5afdd5-902d-4414-acf4-62b2667f05e01531409691651',
    selected: false,
    description:
      'Quas id consequatur sit consequatur molestiae omnis. Quasi dolorum inventore laudantium placeat est tenetur. Quos esse tenetur. Animi ducimus nostrum ut accusamus provident. Exercitationem quae magni iste cumque.',
    price: '$902.00',
    color: 'plum',
    stock: 3,
  },
  {
    name: 'Practical Cotton Gloves',
    id: 'PracticalCottonGlovesc46e32d7-3d96-42ed-b5f5-f077de4c9b801531409691651',
    selected: false,
    description:
      'Minus magnam eius alias qui illo nemo. Saepe voluptates enim sequi necessitatibus dolor doloremque soluta sit magnam. Vel adipisci praesentium non beatae quod. Accusamus natus dolor.',
    price: '$807.00',
    color: 'plum',
    stock: 0,
  },
  {
    name: 'Rustic Granite Table',
    id: 'RusticGraniteTable938a4fce-0547-4b26-8ac6-34d844f9d6861531409691651',
    selected: false,
    description:
      'Vitae vitae alias in eos aut voluptatem. Totam cumque ipsa similique optio magnam dignissimos voluptates voluptatum. Sint ullam tempore nesciunt ut non dolorum. Similique error amet aut sint beatae quasi illo. Nesciunt vel voluptatem sint qui itaque. Qui voluptates occaecati saepe aspernatur culpa.',
    price: '$26.00',
    color: 'silver',
    stock: 3,
  },
  {
    name: 'Ergonomic Fresh Sausages',
    id: 'ErgonomicFreshSausages09e83caa-1429-41e0-b737-8e26649c96a11531409691651',
    selected: true,
    description:
      'Enim quibusdam nesciunt. Ad quis sed quis aut. Enim qui voluptates omnis dolor fugit. Quia sed in dolores quis voluptas. Vero qui qui ullam omnis perspiciatis.',
    price: '$208.00',
    color: 'gold',
    stock: 3,
  },
  {
    name: 'Ergonomic Metal Mouse',
    id: 'ErgonomicMetalMouseebfe7bb8-54ec-4c92-917c-411a37e249421531409691651',
    selected: true,
    description:
      'Voluptatem rerum cum quae nostrum earum doloremque natus ullam molestias. Iure ut vitae voluptas quia dolorem consequatur officiis. Saepe autem quas nam eos. Eos dignissimos qui delectus et quo.',
    price: '$859.00',
    color: 'gold',
    stock: 0,
  },
  {
    name: 'Practical Cotton Sausages',
    id: 'PracticalCottonSausages5892a79d-db57-4a70-adbc-d645e4ed159c1531409691651',
    selected: true,
    description:
      'Incidunt et debitis praesentium repellat ut quo commodi quia dolorum. Provident ut asperiores animi eum non cupiditate voluptatem eum. Deleniti eaque laboriosam rerum laborum facilis. Explicabo magni officiis vel rem veritatis exercitationem similique. Quae laboriosam qui. Suscipit dolorum voluptate error quis ut qui voluptatem.',
    price: '$543.00',
    color: 'mint green',
    stock: 1,
  },
  {
    name: 'Generic Soft Bacon',
    id: 'GenericSoftBacon5262bb8c-fba4-4334-b715-ed9e4503bfbf1531409691652',
    selected: false,
    description:
      'Aut commodi voluptate et id qui aperiam harum ullam quae. Nulla autem doloremque. Quo deleniti quasi facere sint dolorem sed et nemo.',
    price: '$405.00',
    color: 'mint green',
    stock: 0,
  },
  {
    name: 'Refined Rubber Hat',
    id: 'RefinedRubberHat80d32b55-4339-4b35-b937-cc6a0bdaa7991531409691652',
    selected: true,
    description:
      'Corrupti ipsum non impedit. Laboriosam ab rerum voluptatem. Et recusandae dolorum enim cupiditate nihil praesentium optio aut quae. Quos odio enim voluptas. Sunt possimus nesciunt officia aperiam consequatur.',
    price: '$905.00',
    color: 'turquoise',
    stock: 1,
  },
  {
    name: 'Gorgeous Concrete Salad',
    id: 'GorgeousConcreteSaladb095fad8-3aff-42b6-8730-a9870674d6f31531409691652',
    selected: false,
    description:
      'Fugiat ut deserunt molestias. Non quibusdam quod odio sit. Aut corporis deserunt omnis facilis.',
    price: '$332.00',
    color: 'lime',
    stock: 3,
  },
  {
    name: 'Ergonomic Metal Bacon',
    id: 'ErgonomicMetalBacon27301c09-8c80-4119-a4d7-75fc791fcd1e1531409691652',
    selected: false,
    description:
      'Veniam quae unde aspernatur ea molestias possimus laudantium. Dolor ut odit aperiam harum magnam et odit rerum. Unde porro magnam voluptatem magni excepturi. Hic similique aut. Iure est ut eius tempora veritatis at qui consequatur facilis. Porro architecto tempore harum.',
    price: '$819.00',
    color: 'tan',
    stock: 0,
  },
  {
    name: 'Handmade Cotton Cheese',
    id: 'HandmadeCottonCheese537886ef-df9b-45cd-8bd9-3ee56f9210ef1531409691652',
    selected: true,
    description:
      'Id delectus et in est voluptatibus ratione. Dignissimos quae at ex consectetur voluptas laborum quos unde. Incidunt laboriosam quod dolore. Recusandae consequuntur et recusandae fugiat dignissimos voluptatem nostrum.',
    price: '$514.00',
    color: 'cyan',
    stock: 2,
  },
  {
    name: 'Handcrafted Cotton Shirt',
    id: 'HandcraftedCottonShirt982f0b5d-12e2-4d1d-89cc-42d44d6e54651531409691652',
    selected: false,
    description:
      'Inventore velit quia nam placeat eos ut. Et est cum. Consequatur architecto quia odit sunt itaque natus earum placeat. Ab nisi eum voluptate molestiae voluptas.',
    price: '$65.00',
    color: 'grey',
    stock: 0,
  },
  {
    name: 'Awesome Fresh Ball',
    id: 'AwesomeFreshBall6931bf7b-b264-4d51-996b-1eaf42aaba2a1531409691652',
    selected: false,
    description:
      'Pariatur dolores quae maiores. Itaque enim et. Magni optio deserunt sint voluptatum reprehenderit esse enim animi rerum. Dolorem hic placeat sunt voluptatem quod quisquam.',
    price: '$925.00',
    color: 'orchid',
    stock: 3,
  },
  {
    name: 'Rustic Metal Shoes',
    id: 'RusticMetalShoes0cf49837-a97c-483c-8826-b47e857107ea1531409691652',
    selected: true,
    description:
      'Nobis odit architecto tempora aut facere. Nam laboriosam nulla necessitatibus. Vel incidunt temporibus quis voluptate.',
    price: '$220.00',
    color: 'red',
    stock: 2,
  },
  {
    name: 'Intelligent Steel Bacon',
    id: 'IntelligentSteelBaconf1a7bb8e-c94c-46ee-9fe5-9e84325780c61531409691652',
    selected: false,
    description:
      'Voluptatum maiores doloremque sint corrupti vel quam accusamus dolores. Consequatur officiis est quo aliquam tempore id. Omnis et officiis recusandae. Rerum possimus voluptatibus. Ipsa sit veniam temporibus nisi debitis cupiditate veritatis. Iusto dolor doloribus aut facere est quo eaque.',
    price: '$75.00',
    color: 'turquoise',
    stock: 1,
  },
  {
    name: 'Handcrafted Rubber Pizza',
    id: 'HandcraftedRubberPizza9ad750a5-1b2f-49cd-b957-8f88ecb35c481531409691652',
    selected: false,
    description:
      'Ut consequatur dolor eum id aliquam deleniti. Iure totam expedita sequi sit. Non mollitia aut non in quaerat. Animi alias nesciunt magnam.',
    price: '$482.00',
    color: 'yellow',
    stock: 2,
  },
  {
    name: 'Refined Fresh Chips',
    id: 'RefinedFreshChips69a4e78a-078f-48a8-a85f-a06f4c0a986b1531409691652',
    selected: false,
    description:
      'Esse necessitatibus et necessitatibus sint illum tenetur. Iusto commodi facilis dignissimos laboriosam deleniti. Ab sunt corrupti sunt nihil quia autem. Non iure sed est ut quia nam molestiae qui repellat.',
    price: '$723.00',
    color: 'yellow',
    stock: 2,
  },
  {
    name: 'Incredible Soft Ball',
    id: 'IncredibleSoftBall1cb962a0-eac2-4808-90d6-119085f057831531409691652',
    selected: false,
    description:
      'Libero quis soluta consequatur nemo quae molestiae et at quaerat. Est ex ratione ea natus voluptatem sit. Dolorem totam quam dolores voluptate eveniet voluptatem.',
    price: '$960.00',
    color: 'orchid',
    stock: 2,
  },
  {
    name: 'Handmade Soft Bike',
    id: 'HandmadeSoftBike27aae61d-5622-4c7f-bcdd-6a1afcd9fb8f1531409691652',
    selected: true,
    description:
      'Officia veniam quia quia beatae voluptatem. Cumque excepturi ut suscipit sed qui dicta soluta et. Recusandae sapiente recusandae laboriosam cum ut. Occaecati molestiae totam. Officiis molestiae itaque necessitatibus accusamus assumenda maxime. Autem saepe assumenda repudiandae a ut cupiditate.',
    price: '$775.00',
    color: 'ivory',
    stock: 3,
  },
  {
    name: 'Sleek Concrete Chair',
    id: 'SleekConcreteChairac65ccb8-7a32-4842-9c4c-a9e8cf919abe1531409691652',
    selected: false,
    description:
      'Dolorem possimus id. Consequatur totam culpa incidunt doloribus. Eligendi libero exercitationem minus quis aperiam. Voluptates vero quo incidunt quas laborum nesciunt. Fugiat molestiae quasi quisquam aut voluptas amet.',
    price: '$128.00',
    color: 'turquoise',
    stock: 0,
  },
  {
    name: 'Rustic Steel Tuna',
    id: 'RusticSteelTunaa7004765-a9dd-4836-ba60-de45f6d609501531409691652',
    selected: false,
    description:
      'Non minima tempore quasi ab ut veniam est sequi. Enim sit odit quia praesentium eos necessitatibus est corporis autem. Autem laudantium reiciendis ea in rerum veritatis. Aliquid commodi laborum nesciunt itaque asperiores doloribus sapiente. Expedita esse suscipit dolorem quo. Inventore dolorum est quis qui.',
    price: '$104.00',
    color: 'green',
    stock: 3,
  },
  {
    name: 'Refined Plastic Fish',
    id: 'RefinedPlasticFishe35aa154-cfbd-4335-ae6c-bf2c1b653efb1531409691652',
    selected: true,
    description:
      'Vitae ea nihil. Officiis in itaque a iste officiis. Molestiae sequi facere rerum et quisquam necessitatibus quia. Sint laborum quisquam quos quibusdam perspiciatis quas.',
    price: '$237.00',
    color: 'mint green',
    stock: 2,
  },
  {
    name: 'Fantastic Frozen Fish',
    id: 'FantasticFrozenFish1569e3e2-5dd9-4e35-9f29-910829d6b19f1531409691652',
    selected: false,
    description:
      'Nostrum dolores numquam. In dolorem ab quam. Aliquam non ex neque iusto repellendus. Doloremque impedit culpa minima et facilis excepturi est.',
    price: '$648.00',
    color: 'cyan',
    stock: 3,
  },
  {
    name: 'Ergonomic Metal Fish',
    id: 'ErgonomicMetalFishcd5e05b8-4bda-4f60-8e4c-b1adaeff45b61531409691652',
    selected: false,
    description:
      'Nam culpa voluptatem quisquam saepe et ea. Id ut est officia dicta laudantium nisi earum omnis illo. Libero veritatis ut nisi qui. Aspernatur nihil ipsa adipisci enim tenetur eius dolorum. Nam nostrum doloribus dicta voluptatibus laborum.',
    price: '$406.00',
    color: 'lavender',
    stock: 0,
  },
  {
    name: 'Sleek Granite Salad',
    id: 'SleekGraniteSalad19053a23-fe5f-464d-8005-efb7a485e7711531409691653',
    selected: false,
    description:
      'Nemo quia aspernatur inventore quibusdam nisi optio et suscipit molestiae. Eos eligendi dolor a necessitatibus excepturi odio quis non non. Praesentium eum cum atque provident voluptas consequatur. Dignissimos modi non ut fugiat deleniti autem omnis. Dignissimos rerum doloribus ut ex.',
    price: '$510.00',
    color: 'gold',
    stock: 0,
  },
  {
    name: 'Handcrafted Frozen Cheese',
    id: 'HandcraftedFrozenCheesef138dd87-a426-4ae8-9894-18ffa7e11d2c1531409691653',
    selected: false,
    description:
      'Nihil quia officiis aut est voluptates. Voluptas quia illum iure. Error a autem ea aut maxime. Possimus praesentium accusamus nisi aut quae dignissimos.',
    price: '$387.00',
    color: 'orchid',
    stock: 3,
  },
  {
    name: 'Small Steel Computer',
    id: 'SmallSteelComputer4b53ad1c-91c4-42b0-be6a-302fad139f001531409691653',
    selected: true,
    description:
      'Eius distinctio non. Tenetur et fuga asperiores accusantium qui. In quos recusandae saepe molestiae aut non. Harum ab deleniti quia facilis nihil.',
    price: '$706.00',
    color: 'maroon',
    stock: 1,
  },
  {
    name: 'Handcrafted Soft Hat',
    id: 'HandcraftedSoftHat2a5a351e-9d7d-455a-b29a-ffa942d9b33d1531409691653',
    selected: true,
    description:
      'Est expedita praesentium et illum et quis. Similique est provident perspiciatis asperiores vel cupiditate saepe sunt. Enim consequatur dignissimos accusantium debitis quibusdam exercitationem atque. Quia excepturi et ab et dolorem aut fuga veniam.',
    price: '$839.00',
    color: 'indigo',
    stock: 3,
  },
  {
    name: 'Intelligent Concrete Cheese',
    id: 'IntelligentConcreteCheese08f14c68-fb4f-4247-88de-95615f9342071531409691653',
    selected: false,
    description:
      'Quidem dolorem consequatur amet excepturi optio. Hic quos id ut deserunt numquam tempora pariatur et. Sequi qui sit deleniti et qui. Quis praesentium excepturi ipsam dolorum ipsam dolorum.',
    price: '$924.00',
    color: 'gold',
    stock: 3,
  },
  {
    name: 'Refined Fresh Chips',
    id: 'RefinedFreshChipsbb69866e-5144-4772-81b1-1930221791e51531409691653',
    selected: false,
    description:
      'Placeat aspernatur sed numquam similique voluptatem dolores nemo aut. Aliquid voluptate delectus. Eius vel voluptatibus magnam occaecati. Doloribus rerum eius voluptate.',
    price: '$851.00',
    color: 'silver',
    stock: 0,
  },
  {
    name: 'Ergonomic Rubber Shirt',
    id: 'ErgonomicRubberShirt3c1c3302-35fd-436a-8cb6-872df162e75e1531409691653',
    selected: false,
    description:
      'Aperiam optio explicabo repudiandae ullam culpa. Accusamus magni placeat aut quidem asperiores velit ea. Dignissimos aut omnis sit. Sit debitis repellat quae eveniet nihil unde molestiae consequatur. Quo sunt facere recusandae inventore. Nostrum dolorem numquam id nulla qui id corporis tempore.',
    price: '$801.00',
    color: 'maroon',
    stock: 1,
  },
  {
    name: 'Refined Cotton Table',
    id: 'RefinedCottonTable365b9ad6-8c5c-4318-8336-4b10ff38476a1531409691653',
    selected: false,
    description:
      'Aut consequuntur nisi voluptatem. Sit quis fuga. Qui accusamus error quas ullam. Est quis eum exercitationem est. Odio dolores aut est officia totam delectus delectus optio architecto.',
    price: '$785.00',
    color: 'ivory',
    stock: 1,
  },
];

const selected = priceList.filter(value => value.selected);
const filteredProducts = priceList.reduce((result, value) => {
  const newList = result;
  if (value.stock) {
    newList.inStock = newList.inStock ? newList.inStock.concat(value) : [value];
    if (value.stock <= 2) {
      newList.almostOutOfStock = newList.almostOutOfStock
        ? newList.almostOutOfStock.concat(value)
        : [value];
    }
  } else {
    newList.outOfStock = newList.outOfStock ? newList.outOfStock.concat(value) : [value];
  }
  return newList;
}, {});

console.log(selected);
console.log(filteredProducts);
