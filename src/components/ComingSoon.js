import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import Links from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
import logo from "../images/Wheel.png";
import xmark from "../images/x-mark.svg";
import check from "../images/check-mark.svg";
import facebook from "../images/fbookicon.svg";
import instagram from "../images/instaicon.svg";
import youtube from "../images/youtubeicon.svg";
import twitter from "../images/twittericon.svg";
import "../styles/ComingSoon.css";


class ComingSoon extends Component {
  state = {
    countdown: {
      countdownDate: "2023-02-02 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow"
    },
    title: {
      text: "Wir sind bald!"
    },
    description: {
      text:
        "Landheld ist bald für Sie verfügbar. Melde dich bei unserem Newsletter an um keine Neuigkeiten zu verpassen!"
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    },
    links: [
      {
        url: "https://www.facebook.com/groups/CodingFromNull",
        logo: facebook,
        text: "Join"
      },
      {
        url: "https://www.instagram.com/codingfromnull",
        logo: instagram,
        text: "Follow"
      },
      {
        url: "https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w",
        logo: youtube,
        text: "Watch"
      },
      {
        url: "https://www.twitter.com/CodingFromNull",
        logo: twitter,
        text: "Tweet"
      }
    ],
    notification: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: ""
    }
  };

  configureNotification = obj => {
    const notification = { ...this.state.notification };
    notification.message = obj.body.msg;
    if (obj.status === 200) {
      notification.src = check
      notification.alt = "Check Mark"
      notification.level = "success"
    } else {
      notification.src = xmark
      notification.alt = "X Mark"
      notification.level = "error"
    }
    this.setState({ notification });
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000);
    });
  };

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    const {
      title,
      description,
      logo,
      subscribe,
      links,
      countdown,
      notification
    } = this.state;

    return (
      <div className="background">
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <Title text={title.text} />
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          changeLogoSpeed={this.changeLogoSpeed}
          configureNotification={this.configureNotification}
          showNotification={this.showNotification}
        />
        
      </div>
    );
  }
}
//<Links links={lis} nk/> (für Social Media einfach einfügen)
//<Countdown countdownDate={countdown.countdownDate} /> (für Countdown einfügen)

export default ComingSoon;
