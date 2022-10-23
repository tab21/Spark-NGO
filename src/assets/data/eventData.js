const Data = [
	{
		name: "Winter Drive",
		date: new Date(2021, 1, 17),
		intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames. Quis hendrerit dolor magna eget est lorem. At augue eget arcu dictum varius duis. Quam pellentesque nec nam aliquam. ",
	},
	{
		name: "Children's Day Celebration",
		date: new Date(2022, 10, 25),
		intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames. Quis hendrerit dolor magna eget est lorem. At augue eget arcu dictum varius duis. Quam pellentesque nec nam aliquam. ",
	},
	{
		name: "Covid Helper",
		date: new Date(2022, 3, 16),
		intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames. Quis hendrerit dolor magna eget est lorem. At augue eget arcu dictum varius duis. Quam pellentesque nec nam aliquam. ",
	},
];

export const eventData = Data.sort((a, b) => {
	return b.date - a.date;
});
