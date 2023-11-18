import React from "react";
import "../style/bill.css";
import { ToWords } from 'to-words';
const toWords = new ToWords();

export default function Bill(props) {
    return (
        <>
            <div className="bill-page margin-top-bottom-20">
                <div className="bill">
                    <div className="bill-title">
                        <div className="title-logo">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/Assets/jbm-logo.png"
                                }
                                alt="logo"
                            />
                        </div>
                        <div className="title-text">
                            <p className="text1">|| Jai Jalaram ||</p>
                            <h1 className="text2">Shri Jalaram Bhakt Mandal (Bhandup)</h1>
                            <p className="text3">7/8, Neelkanth, Uttar Bharti Road, Bhandup West, Mumbai - 78</p>
                            <p className="text4">This Mandal is Registered with Income Tax Under Sec 80G</p>
                        </div>
                    </div>
                    <hr className="bill-hr" />
                    <div className="details-block block1">
                        <div className="detail first-child">Name &emsp;&emsp;&emsp;&emsp;: &ensp;<b>{props.donorName}</b></div>
                        <div className="detail">Reciept No&emsp;&emsp;: &ensp;<b>{props.recieptNo}</b></div>
                    </div>
                    <div className="details-block block2">
                        <div className="detail first-child">Address &emsp;&emsp;&emsp;: &ensp;<b>{props.address}</b></div>
                        <div className="detail">Date&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;: &ensp;<b>{props.date}</b></div>
                    </div>
                    <hr className="bill-hr" />
                    <div className="word-details">
                        <p>Purpose of Donation&emsp;&emsp;&ensp;: &ensp;<b>Shri Jalaram Jayanti Utsav - 2023</b></p>
                        <p>Amount in Figure (Rs.)&emsp;&ensp;: &ensp;<b>₹{props.amount}</b></p>
                        <p>Amount in Words (Rs.)&nbsp;&emsp;&nbsp;: &ensp;<b>{toWords.convert(props.amount || 0, { currency: true })}</b></p>
                    </div>
                    <div className="extra-contents">
                        <div className="ext-content">
                            P.T. Regn No. F 8291
                            Dt. 4.7.1983
                            SOC Regn no. BOM-288/83 |
                            PAN NO: AABTS8693Q
                        </div>

                        <div className="ext-content">
                            I.T EXEMPTION NO
                            DIT(E) MC/80G/439 w.e.f.
                            25.6.10 Onwards
                        </div>

                    </div>

                    <div className="thank-you">
                        <h1>Thank You For Your Donation</h1>
                        <h2 className="quote">|| રામ નામ મેં લીન હૈ દેખત સબમે રામ ||<br />|| તાકે પદ વંદન કરે જય જય જલારામ ||</h2>
                    </div>
                    <hr />
                    <div className="gift-section">
                        <div className="">
                            Note: Gifts will be given against receipt only
                        </div>
                        <div className="gift-qty">
                            Gift Qty: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
};
