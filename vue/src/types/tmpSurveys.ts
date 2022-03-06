export type question = {
    id: number;
    type: string;
    question: string;
    description: string | null;
    data: {
        options: Array<{ uuid: string; text: string }>;
    };
};

export type Surveys = {
    id: number;
    title: string;
    slug: string;
    status: string;
    image: string;
    description: string;
    created_at: string;
    updated_at: string;
    expire_date: string;
    questions: Array<question>;
};

export type tempSurveys = Array<Surveys>;
