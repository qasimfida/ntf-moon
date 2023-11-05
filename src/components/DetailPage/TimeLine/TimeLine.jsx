import { timelineList } from "@/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function TimeLine() {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const renderItem = (item, index) => {
    const isSeparator = index > 0 && index < 5;
    return (
      <TimelineItem key={index}>
        <TimelineSeparator style={{ width: 100, backgroundColor: "#E4DCFD" }}>
          <TimelineConnector />
          <Box
            height={92}
            width={92}
            border={"3px solid #7A52F4"}
            borderRadius={100}
            paddingTop={2.2}
            backgroundColor={"#fff"}
          >
            <Typography fontSize={30} fontWeight={"bold"} ml={3}>
              {item.title}
            </Typography>
          </Box>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box
            border={"1px solid gray"}
            padding={4}
            borderRadius={5}
            width={400}
          >
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontSize={10}
              color={themeMode == "light" ? "#000" : "#fff"}
            >
              {item.descriptionTitle}
            </Typography>
            <Typography
              variant="h2"
              mt={0.5}
              fontSize={10}
              color={themeMode == "light" ? "#000" : "#fff"}
            >
              {item.description}
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    );
  };
  return (
    <>
      <Timeline position="alternate">{timelineList.map(renderItem)}</Timeline>
    </>
  );
}
