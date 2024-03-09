import { BentoGridDemo } from "../../components/benefits/page";
import { SpotlightPreview } from "../../components/TitlePage/page";
import { InfiniteMovingCardsDemo } from "../../components/infiniteReview/page";
import Product from "../../components/Products/page";
import Testi from "../../components/Testimo/page";
import Title from "../../components/Title/page";
import { HeroParallaxDemo } from "../../components/Hero/page";
import Order from "../../components/orderToday/page";
import Blockquote from "../../components/Reviews/page";
import BlockReview from "../../components/BlockReview/page";
import Discount from "../../components/discount/page";
import { LayoutGridDemo } from "../../components/customer/page";
import List from "../../components/list/page";
import Faq from "../../components/faq/page";



export default function Home() {
  return (
   <>


<SpotlightPreview/>
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
   </>
  );
}
