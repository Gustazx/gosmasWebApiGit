import React, { useRef } from "react";
import { Animated } from "react-native";
import LottieView from "lottie-react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function Loading() {
  const animationProgress = useRef(new Animated.Value(0));

  return (
    <AnimatedLottieView
      style={{
        height: 100,
        width: 100,
        marginTop: 130,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
      source={require("../../../assets/loading.json")}
      progress={animationProgress.current}
      loop
      autoPlay
      speed={1} // Set loop prop to true for continuous looping
    />
  );
}
