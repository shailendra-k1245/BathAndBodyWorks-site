import React from "react";
import "./Gifts.css";
import giftsImg from "../assets/gifts.jpg";
import mothersDay from "../assets/mothersDay.jpg";
import giftsShop from "../assets/giftsShop.jpg";
import gifts30 from "../assets/gifts30.jpg";
import gifts50 from "../assets/gifts50.jpg";
import giftCard from "../assets/giftcard.jpg";

export const Gift = () => {
  const giftdata = [
    { title: "FEATURED", subtitle: ["Mother Day Gifts", "Gift Sets"] },
    {
      title: "GIFTS BY PRICE",
      subtitle: [
        "$15 and Under Gifts",
        "$30 and Under Gifts",
        "$50 and Under Gifts",
      ],
    },
    {
      title: "GIFTS BY RECIPIENT",
      subtitle: [
        "Gift For Her",
        "Gift For Him",
        "Gift For Everyone",
        "Gift For Hostess",
      ],
    },
    { title: "COLLECTIONS", subtitle: ["Gift Boxes And Bag", "Accessories"] },
    { title: "GIFT CARDS", subtitle: ["E-Gift Card", "Gift Card"] },
  ];
  return (
    <>
      <div className="gift-main-div">
        <div className="gift-left-div">
          <span className="sub-title">Home /</span>
          <span className="sub-title"> Gifts</span>
          {giftdata.map((e) => {
            return (
              <div className="line">
                <h5>{e.title}</h5>
                <p>
                  {e.subtitle.map((s) => (
                    <p className="sub-title">{s}</p>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
        <div className="gift-right-div">
          <div className="gift-right-text-div1">
            <p>Gift</p>
            <hr className="onlyhr" />
          </div>
          <div>
            <img
              className="gift-img"
              src={giftsImg}
              alt=""
            />
            <img
              className="gift-img"
              src={mothersDay}
              alt=""
            />
          </div>
          <div className="flex-div">
            <img
              src={giftsShop}
              alt=""
            />
            <img
              src={gifts30}
              alt=""
            />
            <img
              src={gifts50}
              alt=""
            />
          </div>
          <img
            className="gift-img"
            src={giftCard}
            alt=""
          />
          <div className="box-div">
            <button className="box-div-but">Shop Gift Card</button>
            <button className="box-div-but">Shop E-Gift Card</button>
          </div>
          <div>
            <p className="text-div-p">Gifts From Bath & Body Works</p>
            <p className="text-div-p1">
              Bath & Body Works is here to help you find the perfect gift for
              every occasion. Gifts for her, gifts for him—we’ve got the gifting
              goodies that will make them feel extra-special all year long. Need
              a birthday gift? Here’s a bright idea. After the cake, give your
              fragrance-loving birthday gal or guy the candles they REALLY
              want—their favorite 3-wicks! Cupid is always in our building! Take
              aim for our Valentine’s Day gifts & get most-loved fragrances for
              the special gals (“galentines”) & special guys you hold nearest &
              dearest. Looking for Mother’s Day gifts? Our DIY gift baskets &
              fragrance gift sets are a great place to start. Combine Mom’s
              favorite home fragrances with some skin-nourishing body care, and
              she’s sure to feel appreciated. Time to freshen up your annual
              Father’s Day gift! How? Trade that Father’s Day tie for Father’s
              Day fragrances. Dad has neckwear to spare—he deserves to enjoy his
              favorite scents, too! Shop gifts for men via our C.O. Bigelow or
              Bath & Body Works Men’s collections. Merry Christmas to you &
              yours! The most wonderful time of the year wouldn’t be the same
              without seasonal scents from Bath & Body Works. Stuff their
              stockings with jolly-good faves and place our best in body care &
              home fragrance next to the tree. Get more inspiration for the
              holiday in our Christmas Gift Guide. Speaking of magical holidays,
              our Easter gifts are just as festive! Fill their baskets with all
              of the above & they’ll be hopping, skipping & jumping for joy.
              Wedding gifts? Of course! Here come the bride’s favorite
              fragrances! Anniversary gifts? We’ve got those, too! Either way,
              we have housewarming scents—hint, hint, Wallflowers!—that will
              keep every house feeling like home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
