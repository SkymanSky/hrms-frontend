import { Formik,Form } from 'formik';
import React ,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CurriculumVitaeService from '../services/curriculumVitaeService';
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import { Button } from 'semantic-ui-react';

export default function CurriculumViteaUpdate() {
    let {jobSeekerId} = useParams();
    const [curriculumVitaes, setCurriculumVitaes] = useState([])

    useEffect(() => {
        let curriculumVitaeService = new CurriculumVitaeService();
        curriculumVitaeService.getCv(jobSeekerId).then((result) => setCurriculumVitaes(result.data.data));

      }, []);
      let initialValues={}
      curriculumVitaes.map((curriculumVitae)=>(
        initialValues={
        coverLetter:curriculumVitae.coverLetter,
        jobSeekerId:curriculumVitae.jobSeekerId,
        imagePath: curriculumVitae.imagePath,
        linkedinProfile:curriculumVitae.linkedinProfile,
        githubProfile:curriculumVitae.githubProfile
       } 
      ))

      

      console.log(initialValues)


    return (
        
            <Formik
            initialValues={initialValues}
            onSubmit={(values)=>{
                let curriculumVitaeService = new CurriculumVitaeService()
                curriculumVitaeService.updateCv(values).then()
            }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="coverLetter" placeholder="${curriculumVitae.coverLetter}" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>
            </Formik>
    )
}
