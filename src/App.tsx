import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const onChange = () => {
    setGame({ ...game, player: { name: "reddy" } });
  };
  return (
    <ExpandableText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum
      a repellendus dolorum eligendi facilis odit expedita hic amet qui
      reiciendis non, accusantium deserunt quos sed? Repellat architecto
      similique recusandae? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Eius vitae distinctio itaque exercitationem corporis neque fuga
      mollitia voluptas earum cum praesentium exarum, saepe. Ea cumque fuga
      aliquam cum consectetur maxime facilis officiis excepturi, vitae, fugiat
      veniam blanditiis hic itaque asperiores, consequatur provident doloribus
      commodi delectus porro unde eum! Aliquid, enim autem. Incidunt, enim. In
      reiciendis ex ducimus sit rem, fugiat aspernatur nobis, est numquam saepe
      perferendis vero nihil maxime ea fugit harum accusamus dolores facere?
      Assumenda pariatur, iure illo animi commodi aut aliquam? Quidem, culpa
      dolor doloribus architect nam, ea, ipsam delectus nihil odio deserunt eum
      neque reprehenderit eligendi, quo alias? Delectus, ipsam! Iusto ipsum
      quisquam magnam vitae esse ullam distinctio alias exercitationem, possimus
      ipsam autem, consectetur voluptate beatae earum commodi maxime nostrum
      voluptatum nisi totam dicta ex. Quod nam id numquam officia! Facilis esse
      iure illo asperiores magnam officia explicabo dolor sequi dignissimos,
      dolores quaerat temporibus labore iusto quidem, aut non ullam reiciendis
      neque velit incidunt earum voluptatibus. Sit tempore mollitia itaque.
      Aliquid molestiae quibusdam ipsum facere. Sequi, delectus! Aliquam, dicta
      esse obcaecati repellendus assumenda ex voluptates dolorem perspiciatis
      porro quod, quidem molestias tempore blanditiis suscipit officiis harum
      eaque magnam consectetur tempora! Pariatur incidunt minus excepturi nam
      nesciunt eius, tempora aliquid dolorum quisquam earum nobis qui maiores
      repellendus, odit quo odio fugiat quos corporis cupiditate. Ex, dicta rem
      est ad tempora eius. Laudantium repellat possimus quo reprehenderit
      libero, ipsam tempora non laboriosam esse consequuntur? Aliquid temporibus
      amet quia consequuntur, sit laborum ducimus accusamus repellat, impedit a
      repudiandae nostrum enim laudantium non possimus? Eos nam soluta modi
      velit quis laudantium minus dolorem iure eligendi impedit mollitia
      suscipit consectetur assumenda repellat quos accusantium, necessitatibus
      magnam aliquam temporibus officia earum, nostrum veritatis explicabo
      dolores. Dolore? Sint nulla non quas quos commodi, ducimus amet itaque
      iure placeat autem optio vero saepe officiis eligendi tenetur ullam omnis
      natus officia quaerat sed rerum eos id soluta rem. Beatae? Deserunt nemo
      asperiores eius similique iste veniam qui quisquam doloribus possimus
      perspiciatis rerum accusantium labore quibusdam suscipit aliquid quod, et,
      illo obcaecati aut officia inventore. Illum libero sit consequuntur nemo?
      In nam, illo iure, tenetur tempore exercitationem quae adipisci ex vero
      natus sint necessitatibus, veritatis ab. Modi magni ratione repudiandae
      quisquam laudantium autem quod eaque eligendi, molestiae pariatur nemo
      nam. Culpa recusandae pariatur reprehenderit tenetur velit quis ullam,
      iure magnam enim exercitationem consequuntur officia voluptas provident?
      Ullam illum dignissimos, delectus iste similique facilis at cumque ipsam
      corporis, molestiae odio blanditiis!
    </ExpandableText>
  );
}

export default App;
