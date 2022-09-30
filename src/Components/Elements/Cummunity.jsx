import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";

const Cummunity = () => {
  return (
    <div className="container cummunity">
      <div className="row">
        <div className="col-md-4">
          <div>
            <h4>
              <HiUserGroup size={45} className="icon" />
              Community Focused
              <p className="para">
                Community Focused and fair launch. The dev team burned all of
                their tokens and participated with everyone else.
              </p>
              <a className="link" href="#">
                Join us <AiOutlineArrowRight />
              </a>
            </h4>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h4>
              <HiUserGroup size={45} className="icon" />
              Automatic LP
              <p className="para">
                Every trade contributes towards auto-generating liquidity that
                goes into multiple pools used by exchanges
              </p>
              <a className="link" href="#">
                View BscScan <AiOutlineArrowRight />
              </a>
            </h4>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h4>
              <HiUserGroup size={45} className="icon" />
              RFI Static Rewards
              <p className="para">
                Holders earn passive rewards through static reflection as they
                watch their balance of SafeMoon grow indefinitely.
              </p>
              <a className="link" href="#">
                Check your Wallet
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cummunity;
