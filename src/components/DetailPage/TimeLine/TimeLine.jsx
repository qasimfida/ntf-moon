import { timelineList } from "@/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { NumberConatiner, TimeLineItemNoText } from "./style";

export default function TimeLine() {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const renderItem = (item, index) => {
    return (
      <>
        <TimelineItem key={index}>
          <TimelineSeparator style={{ width: 100, backgroundColor: "#E4DCFD" }}>
            <NumberConatiner>
              <TimeLineItemNoText>{item.title}</TimeLineItemNoText>
            </NumberConatiner>
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
                color={themeMode === "light" ? "#000" : "#fff"}
              >
                {item.descriptionTitle}
              </Typography>
              <Typography
                variant="h2"
                mt={0.5}
                fontSize={10}
                color={themeMode === "light" ? "#000" : "#fff"}
              >
                {item.description}
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </>
    );
  };
  return (
    <>
      <Timeline
        sx={{
          width: "85%",
        }}
        position="alternate"
      >
        {timelineList.map(renderItem)}
      </Timeline>
    </>
  );
}
