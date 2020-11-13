import {
  Book,
  Description,
  Image,
  Room,
  SearchOutlined,
  ShowChart,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { useStateValue } from "../contextapi/StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
// import data from "../development/result";
import "./SearchPage.css";
function SearchPage() {
  const [{ term = "Testla" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPageLogo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hidButtons />
          <div className="searchPage_options">
            <div className="searchPage_options_left">
              <div className="searchPage_option">
                <SearchOutlined />
                <Link to="/search">All</Link>
              </div>
              <div className="searchPage_option">
                <Description />
                <a
                  href={`https://www.google.com/search?q=${term}&source=lmns&tbm=nws&bih=868&biw=507&hl=en&sa=X&ved=2ahUKEwi6pZ645P_sAhWbDLcAHdroDjYQ_AUoAnoECAEQAg`}
                >
                  News
                </a>
              </div>
              <div className="searchPage_option">
                <Image />
                <a
                  href={`https://www.google.com/search?q=${term}&hl=en&tbm=isch&sxsrf=ALeKk027ph-WDHLFdbt06HsYSegjAwQ4tg:1605279588011&source=lnms&sa=X&ved=0ahUKEwja2-685P_sAhX0meYKHV1dBJ8Q_AUIDygB&biw=507&bih=868&dpr=1`}
                >
                  Images
                </a>
              </div>
              <div className="searchPage_option">
                <Room />
                <a
                  href={`https://www.google.com/maps?q=${term}&source=lmns&bih=868&biw=507&hl=en&sa=X&ved=2ahUKEwjP2LXa5P_sAhWFwnMBHWlzBbUQ_AUoBHoECAEQBA
                  `}
                >
                  Maps
                </a>
              </div>
              <div className="searchPage_option">
                <Book />
                <a
                  href={`https://www.google.com/search?q=${term}&bih=868&biw=507&hl=en&sxsrf=ALeKk01l6kwZDFUSUWlIAVbxquIAyWfwvA:1605280034520&source=lnms&tbm=bks&sa=X&ved=2ahUKEwjdw-OR5v_sAhVIXSsKHaauDoUQ_AUoAHoECDoQCg`}
                >
                  Books
                </a>
              </div>
              <div className="searchPage_option">
                <ShowChart />
                <a
                  href={`https://www.google.com/search?q=${term}&bih=868&biw=507&hl=en&sxsrf=ALeKk01l6kwZDFUSUWlIAVbxquIAyWfwvA:1605280034520&source=lnms&tbm=fin&sa=X&ved=2ahUKEwjdw-OR5v_sAhVIXSsKHaauDoUQ_AUoAXoECDoQCw
                  `}
                >
                  Finance
                </a>
              </div>
            </div>
            <div className="searchPage_options_right">
              <div className="searchPage_option">
                <a href="https://www.google.com/preferences">Settings</a>
              </div>
              <div className="searchPage_option">
                <a href="https://www.google.com/preferences">Tools</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage_resultCount">
            <b>
              About {data?.searchInformation?.formattedTotalResults} results
              were found in ({data?.searchInformation.formattedSearchTime})
              seconds for {term}.
            </b>
          </p>
          {data?.items?.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>
                <img src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} className="searchPage_resultImage" />
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnipped">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
