import React, { useState } from "react";

const Collapsable_card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <h1>Heading section </h1>
      <button
        onClick={() => {
          setIsOpen((prev) => {
            return !prev;
          });
        }}
      >
        click
      </button>
      <p>Some info</p>
      <section style={{ height: isOpen ? "200px" : "0px" }} className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio et
        velit, dolorem perspiciatis adipisci facere dolores ex iste natus
        accusantium quo animi expedita, quasi dignissimos minima nulla,
        accusamus sapiente! Sint ratione dicta labore. Sit quis dicta officiis
        quas ea provident voluptatum, perspiciatis dolorum non odio iste ut
        saepe at nesciunt architecto voluptate rerum vitae dolor alias nulla
        laborum asperiores. Suscipit ut dolores blanditiis aliquid rem,
        architecto autem non consequatur commodi veritatis voluptate minus
        soluta, mollitia doloribus atque in, dolore tempore praesentium illo
        perferendis ipsa repellat reprehenderit? Eligendi, laboriosam ex.
        Repudiandae saepe sint temporibus fuga quo repellendus. Animi veniam
        rerum dicta maiores ab veritatis quis odit blanditiis dolor? Quod porro
        molestiae, error ratione tempore similique repudiandae sint possimus
        nemo sapiente. Esse eum magni laborum quasi reiciendis non vel,
        laboriosam sapiente quae eveniet modi repellat at amet natus vero!
        Accusamus veritatis ducimus doloremque sequi sint delectus eos officiis
        dolores vel maiores.
      </section>
    </section>
  );
};

export default Collapsable_card;
