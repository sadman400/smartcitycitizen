import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import { Loader } from "../../components";
import "./support.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const { user } = useContext(AuthContext);
  const [support, setSupport] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(support);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_REACT_APP_URL_EXPRESS}/users?name=${
          user.name
        }&email=${user.email}`
      )
      .then((res) => {
        if (!res.data[0]) {
          navigate("/reports");
          setLoading(false);
        } else {
          setSupport(res.data[0]);
          setLoading(false);
        }
      })
      .catch((er) => console.log(er.message));
  }, [user]);

  if (loading) {
    return <Loader />;
  }
  return (
    <section>
      <div className="container">
        <div className="support_wrapper">
          <div className="support_box">
            <h1>Your issue reports</h1>
            <div className="qna">
              {support?.user_replies?.map((qna, idx) => (
                <div>
                  <p className="question_para">{qna.question}</p>

                  <div className="ans_box">
                    <i><h2>Answered by author</h2></i>
                    <div className="answer">
                      <p className="ans_para">{qna.ans}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
