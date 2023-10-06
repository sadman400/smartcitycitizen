import { Loader, NewsCard, Page } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";

const Parksandgreenspaces = () => {
  // batteriesrenewables
  const { data: parksandgreenspaces, isLoading } = useFetch(
    "/parksandgreenspaces?sort[0]=date:desc&populate=*"
  );
  const { data: windpowers } = useFetch(
    "/windpowers?sort[0]=date:desc&populate=*"
  );
  const { data: solarpowers } = useFetch("/solarpowers?populate=*");

  const { data: airqualities } = useFetch(
    "/airqualities?sort[0]=date:desc&populate=*"
  );

  const { data: smartbuildings } = useFetch(
    "/smartbuildings?sort[0]=date:desc&populate=*"
  );
  const { data: batteriesrenewables } = useFetch(
    "/batteriesrenewables?sort[0]=date:desc&populate=*"
  );
  const { data: smartindustries } = useFetch(
    "/smartindustries?sort[0]=date:desc&populate=*"
  );


  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Batteries And Renewable - Smart City Citizen</title>
        <meta name="description" content="Batteries and renewable" />
      </Helmet>
      <section className="park">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.parksgreenspaces_title}
          pagePara={
            headerparagraphs?.[0]?.attributes.parksgreenspaces_paragraph
          }
          parksandgreenspaces={parksandgreenspaces}
        />

        <div className="container">
          <div className="wrapper2">
            <div className="commercial_building">
              <h1>Smart buildings</h1>
              <div className="newses">
                <div className="news">
                  {smartbuildings?.map((smartbuilding) => (
                    <NewsCard
                      key={smartbuilding.id}
                      allnews={smartbuilding}
                      collection="smartbuildings"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/smart-buildings">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="smart_residence">
              <h1>Smart residence</h1>
              <div className="newses">
                <div className="news">
                  {batteriesrenewables?.map((batteriesrenewable) => (
                    <NewsCard
                      key={batteriesrenewable.id}
                      allnews={batteriesrenewable}
                      collection="batteriesrenewables"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/smart-residence">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="retail">
              <h1>Retail & recreational spaces</h1>
              <div className="newses">
                <div className="news">
                  {solarpowers?.map((solarpower) => (
                    <NewsCard
                      key={solarpower.id}
                      allnews={solarpower}
                      collection="solarpowers"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/retail-recreational-spaces">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="municipals">
              <h1>Commercial Building</h1>
              <div className="newses">
                <div className="news">
                  {airqualities?.map((airqualitie) => (
                    <NewsCard
                      key={airqualitie.id}
                      allnews={airqualitie}
                      collection="airqualities"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/municipal-buildings">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="park">
              <h1>Municipal Buildings</h1>
              <div className="newses">
                <div className="news">
                  {windpowers?.map((windpower) => (
                    <NewsCard
                      key={windpower.id}
                      allnews={windpower}
                      collection="windpowers"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/parks-greenspaces">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="industries">
              <h1>Smart industries</h1>
              <div className="newses">
                <div className="news">
                  {smartindustries?.map((smartindustrie) => (
                    <NewsCard
                      key={smartindustrie.id}
                      allnews={smartindustrie}
                      collection="smartindustries"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/smart-industries">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Parksandgreenspaces;
