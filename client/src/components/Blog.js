import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BlogHeader from "./BlogHeader";
import Comments from "./Comments";
function Blog() {

	return (
		<div>
        <ErrorBoundary>
			<BlogHeader />
			<div style={styles.description} className="blog-description">
				This Is an Professional Blog Written By Gal Moshkovitz
				<div style={styles.mainArticle} className="mainArticle">
					<h2 style={styles.articleHeader} className="articleHeader">
						What is Cyber Security? Definition, Best Practices & More
					</h2>
					<span style={styles.text}>
						Cyber security refers to the body of technologies, processes, and
						practices designed to protect networks, devices, programs, and data
						from attack, damage, or unauthorized access. Cyber security may also
						be referred to as information technology security.
					</span>
					<br></br>
					<h4 style={styles.articleHeader}>THE IMPORTANCE OF CYBER SECURITY</h4>
					<span style={styles.text}>
						Cyber security is important because government, military, corporate,
						financial, and medical organizations collect, process, and store
						unprecedented amounts of data on computers and other devices. A
						significant portion of that data can be sensitive information,
						whether that be intellectual property, financial data, personal
						information, or other types of data for which unauthorized access or
						exposure could have negative consequences. Organizations transmit
						sensitive data across networks and to other devices in the course of
						doing businesses, and cyber security describes the discipline
						dedicated to protecting that information and the systems used to
						process or store it. As the volume and sophistication of cyber
						attacks grow, companies and organizations, especially those that are
						tasked with safeguarding information relating to national security,
						health, or financial records, need to take steps to protect their
						sensitive business and personnel information. As early as March
						2013, the nation’s top intelligence officials cautioned that cyber
						attacks and digital spying are the top threat to national security,
						eclipsing even terrorism.
					</span>
					<br></br>

					<h4 style={styles.articleHeader}>CHALLENGES OF CYBER SECURITY</h4>
					<span style={styles.text}>
						For an effective cyber security, an organization needs to coordinate
						its efforts throughout its entire information system. Elements of
						cyber encompass all of the following: Network security: The process
						of protecting the network from unwanted users, attacks and
						intrusions. Application security: Apps require constant updates and
						testing to ensure these programs are secure from attacks. Endpoint
						security: Remote access is a necessary part of business, but can
						also be a weak point for data. Endpoint security is the process of
						protecting remote access to a company’s network. Data security:
						Inside of networks and applications is data. Protecting company and
						customer information is a separate layer of security. Identity
						management: Essentially, this is a process of understanding the
						access every individual has in an organization. Database and
						infrastructure security: Everything in a network involves databases
						and physical equipment. Protecting these devices is equally
						important. Cloud security: Many files are in digital environments or
						“the cloud”. Protecting data in a 100% online environment presents a
						large amount of challenges. Mobile security: Cell phones and tablets
						involve virtually every type of security challenge in and of
						themselves. Disaster recovery/business continuity planning: In the
						event of a breach, natural disaster or other event data must be
						protected and business must go on. For this, you’ll need a
						plan.End-user education: Users may be employees accessing the
						network or customers logging on to a company app. Educating good
						habits (password changes, 2-factor authentication, etc.) is an
						important part of cybersecurity. The most difficult challenge in
						cyber security is the ever-evolving nature of security risks
						themselves. Traditionally, organizations and the government have
						focused most of their cyber security resources on perimeter security
						to protect only their most crucial system components and defend
						against known treats. Today, this approach is insufficient, as the
						threats advance and change more quickly than organizations can keep
						up with. As a result, advisory organizations promote more proactive
						and adaptive approaches to cyber security. Similarly, the National
						Institute of Standards and Technology (NIST) issued guidelines in
						its risk assessment framework that recommend a shift toward
						continuous monitoring and real-time assessments, a data-focused
						approach to security as opposed to the traditional perimeter-based
						model.
					</span>
				</div>
			</div>
            <Comments />
        </ErrorBoundary>
        </div>
	);
}

const styles = {
	description: {
		color: "darkblue",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "lightgrey",
		padding: 0,
		margin: 0,
	},
	text: {
		color: "black",
		fontWeight: "normal",
	},
	mainArticle: {
		backgroundColor: "darkgrey",
	},
	articleHeader: {
		color: "darkred",
	},
	subArticleHeader: {
		color: "darkgreen",
		fontWeight: "normal",
	},
};

export default Blog;
