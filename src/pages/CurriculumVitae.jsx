import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Divider, Header, Container, Segment } from "semantic-ui-react";
import CurriculumVitaeService from "../services/curriculumVitaeService";

export default function Cv() {
  let { jobSeekerId } = useParams();
  //let {id}=29
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);

  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCv(jobSeekerId)
      .then((result) => setCurriculumVitaes(result.data.data));
  }, []);

  return (
    <div>
      {curriculumVitaes.map((curriculumVitae) => (
        <Segment>
          <Header as="h3">Ön Yazı</Header>
          <Container>
            <p>{curriculumVitae.coverLetter}</p>
          </Container>
          <Divider section />

          <Header as="h3">Eğitim Bilgileri</Header>

          {curriculumVitae.jobSeekerCvSchools.map((jobSeekerCvSchool) => (
            <p>
              {jobSeekerCvSchool.name +
                " " +
                jobSeekerCvSchool.deparment +
                " " +
                jobSeekerCvSchool.startYear +
                " " +
                jobSeekerCvSchool.endYear}
            </p>
          ))}

          <Divider section />

          <Header as="h3">İş Deneyimleri</Header>
          {curriculumVitae.jobSeekerCvExperiences.map(
            (jobSeekerCvExperience) => (
              <p>
                {jobSeekerCvExperience.companyName +
                  " " +
                  jobSeekerCvExperience.positionDescription +
                  " " +
                  jobSeekerCvExperience.startYearExperience +
                  " " +
                  jobSeekerCvExperience.endYearExperience}
              </p>
            )
          )}
          <Divider section />

          <Header as="h3">Yabancı Dil</Header>

          {curriculumVitae.jobSeekerCvLanguages.map((jobSeekerCvLanguage) => (
            <p>
              {jobSeekerCvLanguage.name +
                " Seviye: " +
                jobSeekerCvLanguage.level}
            </p>
          ))}

          <Divider section />

          <Header as="h3">Sosyal Medya</Header>
          <p>{curriculumVitae.githubProfile}</p>
          <p>{curriculumVitae.linkedinProfile}</p>
          <Divider section />

          <Header as="h3">Yetenekler</Header>
          {curriculumVitae.jobSeekerCvSkills.map((jobSeekerCvSkill) => (
            <p>
              {jobSeekerCvSkill.programingLanguage +
                " " +
                jobSeekerCvSkill.technologyName}
            </p>
          ))}

          <Divider section />
        </Segment>
      ))}
    </div>
  );
}
