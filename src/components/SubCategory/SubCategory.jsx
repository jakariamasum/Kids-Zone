import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from '../SubCategoryCard/SubCategoryCard';

const SubCategory = () => {
  const [toys, setToys] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Truck');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/myToys?category=${selectedTab}`);
        const data = await response.json();
        setToys(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [selectedTab]);


  return (
    <div className='lg:mx-28'>
      <h1 className="text-center text-3xl font-bol my-8">Shop by Sub-category</h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => setSelectedTab('Truck')}>Truck</Tab>
          <Tab onClick={() => setSelectedTab('Cycle')}>Cycle</Tab>
          <Tab onClick={() => setSelectedTab('Car')}>Car</Tab>
        </TabList>

        <TabPanel>
          {toys
            .filter((toy) => toy.subcategory === 'Truck')
            .map((toy) => (
              <SubCategoryCard key={toy._id} toy={toy} />
            ))}
        </TabPanel>
        <TabPanel>
          {toys
            .filter((toy) => toy.subcategory === 'Cycle')
            .map((toy) => (
              <SubCategoryCard key={toy._id} toy={toy} />
            ))}
        </TabPanel>
        <TabPanel className='grid grid-cols-3 gap-3 bg-red-300'>
          {toys
            .filter((toy) => toy.subcategory === 'Car')
            .map((toy) => (
              <SubCategoryCard key={toy._id} toy={toy} />
            ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategory;
