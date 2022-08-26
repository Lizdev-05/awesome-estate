import React from 'react';
import Back from '../general/Back';
import RecentCard from '../recent/RecentCard';
import '../recent/Recent.css';
import img from '../assets/images/about.jpg';

const Blog = () => (
  <>
    <section className="blog-out mb">
      <Back name="Blog" title="Blog Grid - Our Blogs" cover={img} />
      <div className="container recent">
        <RecentCard />
      </div>
    </section>
  </>
);

export default Blog;
