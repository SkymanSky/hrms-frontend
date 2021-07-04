import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Label } from "semantic-ui-react";
import JobPostService from "../services/jobPostService";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function JobPostAdd() {
  const initialValues = {
    applicationDeadline: "",
    cityId: "",
    employer: {
      id: "",
    },
    position: { id: "" },
    //positionId:"",
    jobDescription: "",
    openPositionQuantity: "",
    salaryMax: "",
    salaryMin: "",
    jobPostingStatus: false,
    jobPostDate: "",
    workStyle: { id: "" },
    jobType: { id: "" },
  };

  const schema = Yup.object({
    cityId: Yup.number().required("Şehir bilgisi zorunludur."),
    employer: Yup.object().shape({
      id: Yup.number().required("Firma id zorunludur."),
    }),
    position: Yup.object().shape({
      id: Yup.number().required("Pozisyon id zorunludur."),
    }),
    //positionId: Yup.number().required("Pozisyon id zorunludur."),
    jobDescription: Yup.string().required("Pozisyon tanımı zorunludur."),
    openPositionQuantity: Yup.number().required(
      "İş alınacak kişi sayısı zorunludur"
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);

        let jobPostService = new JobPostService();
        jobPostService.addJobPost(values).then();
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="position.id" placeholder="Pozisyon Id" />
        <KodlamaIoTextInput name="jobDescription" placeholder="İş Tanımı" />
        <KodlamaIoTextInput name="openPositionQuantity" placeholder="Açık Pozisyon"/>
        <KodlamaIoTextInput name="applicationDeadline"placeholder="Son Başvuru Tarihi"/>
        <KodlamaIoTextInput name="jobPostDate" placeholder="İlan Tarihi" />
        <KodlamaIoTextInput name="employer.id" placeholder="Şirket Id" />
        <KodlamaIoTextInput name="cityId" placeholder="Şehir Id" />
        <KodlamaIoTextInput name="salaryMax" placeholder="Maksimum Maaş" />
        <KodlamaIoTextInput name="salaryMin" placeholder="Minimum Maaş" />
        <Field type="radio" name="jobType.id" value="1" />
        <Label horizontal size="big">
          Tam Zamanlı
        </Label>
        &nbsp; &nbsp;
        <Label horizontal size="big">
          Yarı Zamanlı
        </Label>
        <Field type="radio" name="jobType.id" value="2" />
        <br />
        <br />
        <Field type="radio" name="workStyle.id" value="1" />
        <Label horizontal size="big">
          Uzaktan
        </Label>
        &nbsp; &nbsp;
        <Label horizontal size="big">
          Ofisten
        </Label>
        <Field type="radio" name="workStyle.id" value="2" />
        <br />
        <br />

        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
