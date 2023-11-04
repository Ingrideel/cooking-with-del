import { Player } from "@lottiefiles/react-lottie-player";
import style from "./WalkingFriends.module.scss";

const FRIENDS_SRC = [
  "/walink_eggplant.json",
  "/walking_carrot.json",
  "/walking_garlic.json",
  "/walking_pumpkin.json",
];

interface WalkingFriendsProps {
  className?: string;
  friendHeight?: string | number;
  friendWidth?: string | number;
  flip?: boolean;
}

export const WalkingFriends: React.FC<WalkingFriendsProps> = ({
  className,
  flip,
  friendHeight = "24vw",
  friendWidth = "24vw",
}) => {
  const playerProps = (index: number) => ({
    autoplay: true,
    loop: true,
    style: {
      height: friendHeight,
      width: friendWidth,
      transform: `${index !== 0 ? `translateX(-${50 * index}%)` : ""}${
        flip ? " scaleX(-1)" : ""
      }`,
    },
  });

  return (
    <div className={`${style.container}${` ${className}` || ""}`}>
      {FRIENDS_SRC.map((src, index) => (
        <Player
          key={index}
          src={src}
          {...playerProps(index)}
          className={style.friend}
        />
      ))}
    </div>
  );
};
