import { BentoGridDemo } from "../../components/benefits/page";
import { SpotlightPreview } from "../../components/TitlePage/page";
import { InfiniteMovingCardsDemo } from "../../components/infiniteReview/page";
import Product from "../../components/Products/page";
import Testi from "../../components/Testimo/page";
import Title from "../../components/Title/page";

import Order from "../../components/orderToday/page";
import Blockquote from "../../components/Reviews/page";
import BlockReview from "../../components/BlockReview/page";
import Discount from "../../components/discount/page";
import { LayoutGridDemo } from "../../components/customer/page";
import List from "../../components/list/page";
import Faq from "../../components/faq/page";
import Step from "../../components/Step/page";
import HeroBottom from "../../components/Herobottom/page";
import Download from "../../components/downloadButton/page";
import Footer from "../../components/Footer/page";
import Toast from "../../components/Toast/page";



export default function Home() {
  return (
   <>
<Download/>
<SpotlightPreview/>
<Toast/>
<Discount/>
<Title title="Benefits"/>
<BentoGridDemo/>

<InfiniteMovingCardsDemo/>
<Title title="What's Inside?"/>

<Product/>
<Title title="What's Inside?"/>
<Order/>


<Title title="Read trusted reviews from our customers"/>
<BlockReview/> 

<Discount/>

<div className="relative">

<LayoutGridDemo/></div>
<List/>
<Faq/>
<Step/>
<Discount/>
<HeroBottom/>
<Footer/>
   </>
  );
}
