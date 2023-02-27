import { useParams } from "react-router-dom";
const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description:
      "About the app description",
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description:
      'About the developer description',
  },
];

const SinglePage = () => {
  const {slug} = useParams();
  const aboutContent = aboutData.find(item => item.slug === slug);
  const {title, description} = aboutContent;
	return (
		<div className='main_content'>
			<h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
		</div>
	)
}
export default SinglePage;