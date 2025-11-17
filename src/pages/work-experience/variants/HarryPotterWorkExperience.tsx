import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundWorkExperience from "../../../assets/work-without-text.png";
import {
  potterWorkExperienceBulletItem,
  potterWorkExperienceCompanyTitle,
  potterWorkExperienceDateText,
  potterWorkExperienceRoleSubtitle,
  potterWorkExperienceTitle,
} from "../../../styles/potter-typography";

import { HarryPotterConstants } from "../../../constants/HarryPotterConstants";

export const HarryPotterWorkExperience: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      {/* Fixed “poster” scene */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${backgroundWorkExperience})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            ...potterWorkExperienceTitle,
            position: "absolute",
            top: "6%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          Work Experience
        </Typography>

        {/* 3 scroll columns */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "57%",
            transform: "translateX(-50%)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // always 3 columns
            width: "85%",
          }}
        >
          {HarryPotterConstants.WORK_EXPERIENCE.map((exp) => (
            <Box key={exp.id} sx={{ px: 3 }}>
              <Typography
                sx={{
                  ...potterWorkExperienceCompanyTitle,
                  textAlign: "center",
                }}
              >
                {exp.company}
              </Typography>

              <Typography
                sx={{
                  ...potterWorkExperienceRoleSubtitle,
                  fontSize: "1.5vw",
                  mt: 1,
                  textAlign: "center",
                }}
              >
                {exp.role}
              </Typography>

              <Typography
                sx={{
                  ...potterWorkExperienceDateText,
                  fontSize: "14px",
                  mt: 1,
                  textAlign: "center",
                }}
              >
                {exp.dates}
              </Typography>

              <Typography
                sx={{
                  ...potterWorkExperienceBulletItem,
                  fontSize: "14px",
                  mt: 2,
                  p: exp.id == 3 ? "2vw" : 0,
                }}
              >
                {exp.bullets.map((line, index) => (
                  <React.Fragment key={index}>
                    {"\u2022"} {line}
                    {index !== exp.bullets.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
