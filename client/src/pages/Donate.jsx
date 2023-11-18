export default function Donate() {
    return (
        <>
            <div className="page">
                <h1 className="subtitle txt-ctr margin-top-bottom-20">Donation</h1>

                <div className="w-80 mg-a-a">
                    <p className="main-text">
                        There are several options to make a donation to Shree Siddhivinayak Ganapati Temple (Prabhadevi) Trust like Cheques & Demand Drafts, Cash Cards, Credit Cards, Debit Cards and Internet Banking (Net Banking).
                    </p>

                    <br />

                    <p className="main-text">
                        <b>Note: Do not hand over cash to any person.</b>
                    </p>

                    <br />

                    <p className="main-text">
                        Cheques, Demand Drafts and Pay Orders in ANY CURRENCY have to be made in favour of Jalaram Bhakt Mandal (Bhandup) and handed over at the Reciept Counter at the temple premises or at the Accounts Office (Donation Dept). The Office will issue a donation receipt.
                    </p>

                    <div className="flex donations-container">
                        <div>
                            <h2>Domestic Donations: </h2>
                            <div className="donations">

                                <div className="donation-line">
                                    <b>Bank Name:</b> Bank of Baroda
                                </div>
                                <div className="donation-line">
                                    <b>Branch:</b> Bhandup West, Mumbai
                                </div>
                                <div className="donation-line">
                                    <b>Account Number:</b> 07620100001402
                                </div>
                                <div className="donation-line">
                                    <b>IFSC Code:</b> BARB0BHABOM
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>International Donations: </h2>
                            {/* <div className="donations">
                                <div className="donation-line">
                                    <b>Bank Name:</b> Bank Name
                                </div>
                                <div className="donation-line">
                                    <b>Branch:</b> Branch Name
                                </div>
                                <div className="donation-line">
                                    <b>Account Number:</b> 123456789
                                </div>
                                <div className="donation-line">
                                    <b>IFSC Code:</b> ABCD123E45
                                </div>
                                <div className="donation-line">
                                    <b>Swift Code:</b> ABCD123E45
                                </div>
                                <div className="donation-line">
                                    <b>AD Code:</b> ABCD123E45
                                </div>
                            </div> */}
                            <div className="donations">

                                <div className="donation-line">
                                    <b>Bank Name:</b> Bank of Baroda
                                </div>
                                <div className="donation-line">
                                    <b>Branch:</b> Bhandup West, Mumbai
                                </div>
                                <div className="donation-line">
                                    <b>Account Number:</b> 07620100001402
                                </div>
                                <div className="donation-line">
                                    <b>IFSC Code:</b> BARB0BHABOM
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="margin-top-bottom-20">
                        Online Payment through Bank Account using Debit Cards and Credit Cards:
                    </h2>

                    <p className="main-text">
                        <b>Important: </b>Online payment for International donations are currently not available. You can still donate by transferring directly to above mentioned 07620100001402 Bank account.
                    </p>
                </div>
            </div>
        </>
    );
};
