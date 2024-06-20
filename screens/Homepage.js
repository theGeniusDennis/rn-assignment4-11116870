import * as React from "react";
import { FlatList, ScrollView, View, StyleSheet, Image, Text, Pressable, TextInput, ImageBackground } from "react-native";

type UserProps = {
  name: string;
  email: string;
  profileImage: any; // Updated to handle local image
};

type JobProps = {
  title: string;
  company: string;
  salary: string;
  location: string;
  jobImage: any; // Updated to handle local image
  isFeatured?: boolean;
  backgroundImage?: any; // Added for background image
};

const UserProfile: React.FC<UserProps> = ({ name, email, profileImage }) => (
  <View style={styles.userProfileContainer}>
    <View>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userEmail}>{email}</Text>
    </View>
    <Image resizeMode="cover" source={profileImage} style={styles.profileImage} />
  </View>
);

const JobCard: React.FC<JobProps> = ({ title, company, salary, location, jobImage, isFeatured, backgroundImage }) => (
  <Pressable
    style={isFeatured ? styles.featuredJobCardContainer : styles.popularJobCardContainer}
    onPress={() => console.log(`Pressed on ${title}`)}
  >
    {isFeatured ? (
      <ImageBackground source={backgroundImage} style={styles.featuredJobCardBackground} imageStyle={styles.featuredJobCardImage}>
        <View style={styles.featuredJobCardOverlay}>
          <View style={styles.jobCardHeader}>
            <Image resizeMode="cover" source={jobImage} style={styles.jobImage} />
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{title}</Text>
              <Text style={styles.jobCompany}>{company}</Text>
            </View>
          </View>
        </View>
        <View style={styles.featuredJobDetails}>
          <Text style={styles.jobSalary}>{salary}</Text>
          <Text style={styles.jobLocation}>{location}</Text>
        </View>
      </ImageBackground>
    ) : (
      <View>
        <View style={styles.jobCardHeader}>
          <Image resizeMode="cover" source={jobImage} style={styles.jobImage} />
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>{title}</Text>
            <Text style={styles.jobCompany}>{company}</Text>
          </View>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.jobSalary}>{salary}</Text>
          <Text style={styles.jobLocation}>{location}</Text>
        </View>
      </View>
    )}
  </Pressable>
);

const Homepage: React.FC = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    {
      title: "Senior Developer",
      company: "Facebook",
      salary: "$150,000/y",
      location: "San Francisco, US",
      jobImage: require('../assets/facebook_icon.png'),
      backgroundImage: require('../assets/blue4.jpeg'),
    },
    {
      title: "Backend Engineer",
      company: "Microsoft",
      salary: "$120,000/y",
      location: "Seattle, US",
      jobImage: require('../assets/microsoft.png'),
      backgroundImage: require('../assets/blue5.jpeg'),
    },
    {
      title: "Product Designer",
      company: "Instagram",
      salary: "$110,000/y",
      location: "New York, US",
      jobImage: require('../assets/instagram.png'),
      backgroundImage: require('../assets/blue2.jpeg'),
    },
    {
      title: "Product Designer",
      company: "Nvidia",
      salary: "$110,000/y",
      location: "New York, US",
      jobImage: require('../assets/nvidia.jpg'),
      backgroundImage: require('../assets/blue4.jpeg'),
    },
    {
      title: "Branch Manager",
      company: "DoorDash",
      salary: "$120,000/y",
      location: "Seattle, US",
      jobImage: require('../assets/doordash.png'),
      backgroundImage: require('../assets/blue6.jpeg'),
    },
  
    {
      title: "Network Engineer",
      company: "Oracle",
      salary: "$130,000/y",
      location: "Los Angeles, US",
      jobImage: require('../assets/oracle.jpg'),
      backgroundImage: require('../assets/blue3.jpeg'),
   },
     {
      title: "Backend Engineer",
      company: "Google",
      salary: "$120,000/y",
      location: "Seattle, US",
      jobImage: require('../assets/google_icon.png'),
      backgroundImage: require('../assets/blue6.jpeg'),
    },
    {
      title: "Backend Engineer",
      company: "Apple",
      salary: "$120,000/y",
      location: "Seattle, US",
      jobImage: require('../assets/apple_icon.png'),
      backgroundImage: require('../assets/blue5.jpeg'),    
    },
  ];

  const popularJobs = [
    {
      title: "Jr Executive",
      company: "Burger King",
      salary: "$96,000/y",
      location: "Los Angeles, US",
      jobImage: require('../assets/burgerking.png'),
    },
    {
      title: "Product Manager",
      company: "Beats",
      salary: "$84,000/y",
      location: "Florida, US",
      jobImage: require('../assets/image-8.png'),
    },
    {
      title: "Data Analyst",
      company: "Facebook",
      salary: "$86,000/y",
      location: "New York, US",
      jobImage: require('../assets/facebook_icon.png'),
    },
    {
      title: "Software Engineer",
      company: "Tesla",
      salary: "$130,000/y",
      location: "San Jose, US",
      jobImage: require('../assets/sign.png'),
    },
    {
      title: "Frontend Developer",
      company: "Apple",
      salary: "$125,000/y",
      location: "Cupertino, US",
      jobImage: require('../assets/apple_icon.png'),
    },
    {
      title: "Frontend Developer",
      company: "Bolt",
      salary: "$125,000/y",
      location: "Cupertino, US",
      jobImage: require('../assets/bolt.jpeg'),
    },
    {
      title: "Graphic Designer",
      company: "Canva",
      salary: "$88,000/y",
      location: "San Francisco, US",
      jobImage: require('../assets/canva.jpg'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.timeIconContainer}>
        <Text style={styles.timeText}>9:41</Text>
        <Image resizeMode="cover" source={require('../assets/ellipse-798.png')} style={styles.timeIconImage} />
      </View>
      <UserProfile name={name} email={email} profileImage={require('../assets/ellipse.png')} />
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image resizeMode="cover" source={require('../assets/search1-1.png')} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search a job or position" />
        </View>
        <Pressable onPress={() => console.log('Filter pressed')}>
          <Image resizeMode="cover" source={require('../assets/filter5.png')} style={styles.filterIcon} />
        </Pressable>
      </View>
      <View style={styles.sectionHeadingContainer}>
        <Text style={styles.sectionHeadingText}>Featured Jobs</Text>
        <Pressable onPress={() => console.log('See all featured jobs pressed')}>
          <Text style={styles.seeAllText}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        data={featuredJobs}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <JobCard
            title={item.title}
            company={item.company}
            salary={item.salary}
            location={item.location}
            jobImage={item.jobImage}
            isFeatured
            backgroundImage={item.backgroundImage}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}
      />
      <View style={styles.sectionHeadingContainer}>
        <Text style={styles.sectionHeadingText}>Popular Jobs</Text>
        <Pressable onPress={() => console.log('See all popular jobs pressed')}>
          <Text style={styles.seeAllText}>See all</Text>
        </Pressable>
      </View>
      {popularJobs.map((job) => (
        <JobCard
          key={job.title}
          title={job.title}
          company={job.company}
          salary={job.salary}
          location={job.location}
          jobImage={job.jobImage}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  timeIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  timeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeIconImage: {
    width: 24,
    height: 24,
  },
  userProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    padding: 8,
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  sectionHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionHeadingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 16,
    color: "#007BFF",
  },
  horizontalScrollContainer: {
    paddingBottom: 16,
  },
  featuredJobCardContainer: {
    marginBottom: 16,
    marginRight: 16,
    width: 290,
    height: 190,
  },
  featuredJobCardBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  featuredJobCardImage: {
    borderRadius: 8,
  },
  featuredJobCardOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // semi-transparent overlay
    borderRadius: 8,
    padding: 16,
  },
  popularJobCardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginRight: 0,
    width: "100%",
  },
  jobCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  jobImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 14,
    color: "#666",
  },
  jobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  popularJobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featuredJobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  jobSalary: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", 
  },
  jobLocation: {
    fontSize: 14,
    color: "black", 
  },
});

export default Homepage;

