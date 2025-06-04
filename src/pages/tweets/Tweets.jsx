import React, { useEffect, useState } from "react";
import "./tweets.css";
import { ChevronDown } from "lucide-react";

function Tweets() {
  const [expanded, setExpanded] = useState({
    latest: false,
    popular: false,
    insightful: false,
  });

  const tweetData = [
    {
      key: "latest",
      title: "🔥 Latest Tweet",
      url: "https://twitter.com/gerald_okothKE/status/1929829663439728804",
    },
    {
      key: "popular",
      title: "💭 Popular Tweet",
      url: "https://twitter.com/gerald_okothKE/status/1633713542363840514",
    },
    {
      key: "insightful",
      title: "💡 Insightful Tweet",
      url: "https://twitter.com/GDGoC_MksU/status/1800534406882603054",
    },
  ];

  useEffect(() => {
    const hasExpanded = Object.values(expanded).some(Boolean);
    if (hasExpanded) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      script.setAttribute("charSet", "utf-8");
      script.async = true;
      document.body.appendChild(script);
    }
  }, [expanded]);

  const toggleTweet = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const areAllExpanded = Object.values(expanded).every(Boolean);
  const handleToggleAll = () => {
    const newState = tweetData.reduce((acc, item) => {
      acc[item.key] = !areAllExpanded;
      return acc;
    }, {});
    setExpanded(newState);
  };

  return (
    <section className="tweets" id="tweets">
      <h2 className="tweets-heading">Tweet Highlights</h2>
      <p className="tweets-subtext">
        Follow me on Twitter for insights, updates, and community moments.
      </p>
      <button className="toggle-all-btn" onClick={handleToggleAll}>
        {areAllExpanded ? "Collapse All" : "Show All"}
      </button>

      <div className="tweets-container">
        {tweetData.map(({ key, title, url }) => (
          <div className="tweet-box" key={key}>
            <div className="tweet-header" onClick={() => toggleTweet(key)}>
              <h3 className="tweet-title">{title}</h3>
              <ChevronDown
                className={`chevron ${expanded[key] ? "rotate" : ""}`}
                size={20}
              />
            </div>
            <div className={`collapsible ${expanded[key] ? "open" : ""}`}>
              {expanded[key] && (
                <div className="tweet-wrapper">
                  <blockquote className="twitter-tweet" data-theme="dark">
                    <a href={url}>View Tweet</a>
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tweets;
