// importing library

export default function JalaramBappa() {
    return (
        <>
            <div className="page">
                <h1 className="subtitle txt-ctr margin-top-bottom-20">
                    Jalaram Bappa
                </h1>

                <div className="about-grid">
                    <div>
                        <img
                            className="about-img"
                            src={
                                process.env.PUBLIC_URL +
                                "/Assets/about-img-1.png"
                            }
                            alt="about image 1"
                        />
                        {/* <img
                            className="about-img"
                            srcset={
                                process.env.PUBLIC_URL +
                                "/Assets/about-img-1.png 800w"}
                            alt=""
                        /> */}
                    </div>

                    <div className="txt-jstfy main-text">
                        <p>Shree Jalaram Bapa was born in the year 1799 (i.e. 4-11-1799) in the village Virpur, Gujarat. His mother, Rajbai was very fond of serving sadhus and saints. No sadhu and saint could go from Virpur without receiving the hospitality from Rajbai. Shree Jalaram Bapa's father's name was Pradhan Thakkar, who was engaged in business. At the tender age of 16, Jalaram Bapa married Virbai, daughter of Thakkar Pragji Somaiya. Jalaram Bapa was however not inclined to live household life and to continue to do business with his father. He was mostly engaged in serving sadhus and saints. He separated himself from his father's business and stayed with his uncle, Valjibhai, who was very fond of Jalaram.</p>

                        <br />

                        <p>It was obvious that Jalaram Bapa was inclined to completely withdraw from marital life. Fortunately his wife, Virbaima decided to follow the path of Jalaram. So, when Jalaram decided to go for a pilgrimage for holy places, Virbaima followed him. At the age of 18, Jalaram Bapa accepted Shree Bhojalram from Fatehpur as guru and was given a "Guru Mala and Mantra" in the name of Shree Ram. With blessings of his guru, he started "Sadavrat" a feeding center, a place where all sadhus and saints as well as the needy could have food any time during 24 hours. Nobody returned from that place without having food. All this he did single handed with Virbaima assisting him. Soon his fame spread as an incarnation of the divine. Whoever came to Virpur, whether Hindu or Muslim was fed by Bapa.</p>

                        <br />

                        <p>Once, four Arabs in the service of Thakore of Rajkot demanded an increase in wages by four rupees in a month. Being refused, the Arabs resigned and set out to Junagadh. On their way, they hunted few birds and kept them in their hamcha (shoulder bag). When they reached Virpur, Bapa asked them to have their meals and then go. When they protested that they were Muslims, Bapa said that in the court of God there was no distinction in caste and creed and they were welcome. The four Arabs had their meals in the temple but they were embarrassed that they were carrying dead birds in their bag. The Bapa touched the bag and said that the birds were feeling suffocated. The Arabs opened the bag and found that the birds were alive. They flew away to a nearby tree. The Arabs were amazed and understood that they were in the presence of divine person. They fell at his feet and asked whether they would get a job in Junagadh. Bapa said "What was the need to have a job in Junagadh? The Arabs serve only one master." Just at that time, a camel man sent by Thakore of Rajkot arrived there. He took back the Arabs with him saying that Thakore has sanctioned an increment of seven rupees in their wages.</p>

                        <br />

                        <p>There are many stories about the greatness of the saint of Virpur. Remembering the stories, we can fill the heart with devotion and gratitude. In 1881 (i.e. 23-2-1881) Jalaram Bapa left his body in his prayers. This is the story of the great saint of Virpur.</p>
                    </div>

                    <img
                        className="about-img"
                        src={
                            process.env.PUBLIC_URL +
                            "/Assets/about-img-2.png"
                        }
                        alt="about image 2"
                    />
                </div>
            </div>
        </>
    );
};
