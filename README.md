# KnowledgeData

First Milestone

Goal
Our application will provide information on the Second World War for kids in primary school to inform them of the events which happened in an important part of the history of their country. This application will be developed to part of the 4 and 5 May Remembrance of the Second World War and it will provide sufficient information to expand the knowledge of primary school kids. The web application will provide and visualise information about the locations, events and people who played a role in the Second World War. All of the information will be written in simplified Dutch to adjust to the target user base. 
Userbase
Our target users will be Dutch primary school kids whom desire information about the Second World War. These kids might come to our application to seek information for a school assignment but might also be sent here by their teacher. Because our main target group is primary school kids the language that will be used will be simplified and specialist jargon will be avoided. The application will therefore also hide inappropriate pictures if the topic might be offensive to some. Although our target group is primary school kids, the application will be appropriate for all potential users who are in search of information about the Second World War. To create engagement with the primary school kids, it is our aim to make the website as interactive as possible.
Design
 

The index page and an example of a page of an event has already been given. When a user clicks on the “Gebeurtenissen” on the navigation bar, he will navigate to a page with an alphabetically sorted list of events. If the user can not find an event, the search functionality is available. When he clicks on an event, a page like the one of the Battle of Nijmegen will be shown. This page shows the location and other trivial facts about the event. The same will be the case for the locations and persons. For a person, the nationality, the allegiance (although Adolf Hitler was Austrian, he was allied to Nazi Germany), the events the person was involved in, dates of birth and death and if available, a photo will be shown.

Most of the information will be shown in a table. That is because the information of a SPARQL-query is best shown in a table if it is just a short text. The information about an event is a longer text and is thus best shown as a text box. It is quite self-explanatory that the location is best represented on a map. The events a person was involved in will also be represented on a map. It is more intuitive to browse these events on a map instead of a list. The information will be gathered from the DBpedia database, the linked events ontology and will be linked by our own ontology. This way the web application will be working through different sets of data.


Interaction

Storyboard of a possible scenario


Timmy is a 5th grade student attending primary school. 
Normally he does not like the subject history and has a hard time learning about the themes of history. Today Timmy has history class again, but this time the teacher is covering world war 2 and it seems like that Timmy is finding the topic very interesting. At the end of the class Timmy goes to the teacher and explains that he is very much into the topic and would like to learn more about it. The teacher is taking that into consideration and tell the whole class about a website called www.degroteoorlog.nl . The teacher explains the kids how they can make use of the website and look things up regarding world War 2. After school is done, timmy goes home and looks up the website and navigates through the different pages. He is  spending a lot of time on there and learning about all the places, important events and known individuals of the war. The images, statistics and the text are very enjoyable and useful for Timmy, since he has a hard time learning in normal textbooks. After the day is over he goes back to school and tells his teacher and friends about everything he learned from the website. In class he sees his friends struggling with the topic of the world war and offers them help since he learned a the day before. After he is done he suggests his friends to also visit the website to learn more about world war 2.













Second Milestone
Domain and Scope
The ontology will revolve around the most significant Dutch historical events in the Second World War. There will also be information about the people and locations involved with those events.  The ontology will show the relationships between people, locations and events and to draw a picture of the situation. That would mean that the information about D-Day or the liberation of Berlin will not be covered in this ontology, as the ontology limits itself to events, locations and people important to Dutch History. This information will be displayed on the web application to educate  the main demographic which is primary school kids on the Second World War in the Netherlands.  Of the historical figures, locations and events, the details will be specified in this ontology. Part of this information will be inherited from ‘DBPedia’. Also, a part of the relationships between the three classes described above (Person, Event and Location) will be defined using the ‘Linked Events’  ontology linked in last week’s milestone.
Methodology
The ontology which will link DBPedia and the Linked Events ontology will be made in Protogé. First, the two external ontologies stated above will be imported and given a prefix.  Then the three main classes, Person, Event and Location,  will then be defined. These three classes are essential to the ontology because those will be the catalysts.  These  classes alone will not provide enough information to make an informative website with. The main classes are divided into subclasses. This is done to distinguish the objects from one another and respect the finer historical details.  After defining these subclasses, the properties of these catalysts and individuals will be created.  These properties are going to interpret the characteristics of the individuals used in the ontology. A small example in the ontology could be the clarification of the Battle of Nijmegen. That would in this case form the triple ‘Battle of Nijmegen’  ‘atplace’ ‘Nijmegen’, which will be then used in the web application. 
Conceptualization
In the domain the 3 catalysts classes all have subclasses.  The subclasses also have on their own subclasses. A Person could be a Militarian which could be made more specific to be a General.  While Person is a class from which a lot of subclasses are derived, Person is itself a subclass of Thing.  The reason this structure is implemented is to respect the finer details. The properties will show the relations between the classes and will provide information for the web application. An example of such properties would be: 
“Event” “TookPlaceIn” “Location”
The property here would be TookPlaceIn which states the relation between an event and the location. By representing it this way we create a clear distinction between the roles of a militarian, an event or a location. This distinction is currently not vital because the amount of data is foreseeable but as soon as the amount of data starts growing, the division of classes because more important. 



In the above figure we made a class diagram containing all classes and properties which will be used in the ontology. Properties are indicated by a + sign following with the name of the property and classes are shown as rectangular boxes with their name inside of it. Dashed lines are representing the properties between classes while solid arrows represent the subclasses and their parent classes. This clarifies how the classes are related to one another. It is important to know that this class diagram may be updated in the future, because during development there may occur difficulties which the class diagram has to adapt to.
Ontology
In order to have the classes function well, there ought to be some class restrictions which prevent the class from behaving in a way that it could affect the application in a negative way. Following will be a description of the restrictions to give an insight into how the ontology will look like.
Object property restrictions
The first restriction is that a city can only be found in a maximum of one country. A city is something unique to a country and can not be found in another country. Cities with exact the same names are still different, since they are still two separate cities. The difference there is in which country they can be found.
The second restriction is the amount of nationalities a person needs to have. There are no people in the world who do not have a nationality. So it is important to define the class restriction that the class nationality has at least 1 value in it.
The third restriction is for the country. A country can only be part of one allegiance at a time. If there is a change in the allegiance of a country, the old value has to be erased and the new allegiance entered in. 
The fourth restriction goes over the outcomes of the battles events classes. A battle can only be won by 1 group (Axis or Allies) unless there is a tie. However since a tie only occurs in rare cases we could introduce the restriction that always has a winner of a battle.
The fifth restriction is the restriction of the allegiance with a person. The motive here is the same as for the country, A person can in this case only be part of one allegiance at a time.
The sixth restriction is that events take place in a minimum of one location because there is no event taking place without a location.
 
Usage of external data sources
The historic facts about events, people and location will be retrieved from DBPedia such as nationality and place of birth of a person. The object property from the Linked Events ontology named atTime will be used to specify when an event took place.
Inferences
Now the link has been made between the classes in the ontology, there are going to be some inferences inside the ontology. Note that not all inferences created in the ontology is actually essential for the application. There are multiple inferences derived which would be seen as essential to the application. All the others are a great addition however are not important to achieve the goal of this web application. Down below is a screenshot of the reasoning results from an inferred object property assertion:




After reasoning has completed its run on the ontology, you are able to see the inferences which the reasoning created. Above screenshots illustrates which predicate and object consists in the inference. It shows that the Battle_of_Nijmegen took place in Nijmegen. This would be a meaningful inference inside the web application, because now the application is able to give a user output on this event. 









Third Milestone
External sources and the use of data in the application
Currently, this application makes use of two external endpoints whereas both are being accessed by a SPARQL-endpoint. The practical use of both datasets are as follows:
Verrijkt Koninkrijk is a dataset hosted by de Vrije Universiteit. This dataset holds considerable amounts of data related to the Second World War in the Netherlands, this is relevant for our target audience as it is directly related with the chosen subject (Second World War in the Netherlands) and target group (children in primary school). This dataset is accessed by making use of a SPARQL-endpoint. The dataset is fairly up-to-date, as it was last updated in July 2016.
A database of historical events during the Second World War in the Netherlands is queried from the SPARQL endpoint from DBpedia. This database will be linked by our own ontology as it would make it possible to link the three classes: Person, Event and Location. This database contains information about the Second World War, in which the values are in both English and Dutch. The values consists of several persons, events and locations who are related to the Second World War.
Fictional database is a database that is obviously self-made. This database serves the purpose to fill classes, such as persons and/or events. Eventually the total dataset will be enriched if combined with the other two datasets. This data will in turn be used by the application to extract relevant information (such as that of a person who had a big impact on the war) for the user. 
Motivation for the choice of specified external sources
Verrijkt Koninkrijk is chosen due to the lack of detailed datasets available that are related to the Second World War in the Netherlands, this dataset would be the only one that is mainly used for populating the instances and possibly adding several classes (if found needed). Furthermore, this particular SPARQL-endpoint has an extensive amount of information available in the form of 2,908,140 triples, therefore our application will benefit from the size of data available. We choose to only include information from classes we already had present as this database will be used to fill our classes. 
A database of historical events during the Second World War in the Netherlands is chosen because this database contains a lot of information about the Second World War and makes it easily possible to link the existing three classes (Person, Event and Location). 
Fictional database As the abovementioned datasets are both SPARQL-endpoints, it was essential that a third external database was used, but not in the form of a SPARQL-endpoint. As mentioned before we found a lack of existing datasets related to our subjects and due to the time restraints and the scope of the assignment it was in our best interest to make one dataset ourselves. 
Data integration with the current ontology
We integrated the data with our current ontology by making use of SPARQL queries. This is the case with the datasets Verrijkt Koninkrijk and the database of historical events from DBpedia. The data is used to retrieve instances, in the form of historical events, persons and places. These instances will in turn be imported in their rightful class, and receiving relevant attributes, such as “nationality” or “location” for example.  
By means of SPARQL queries we retrieve desired results from the SPARQL endpoints of the datasets, subsequently combined with the classes and relationships within our ontology. So in this way the data will ultimately be integrated with the current ontology. However, in the case of our fictional database we will fill it in our ontology by ourselves and afterwards join it with the support of Protege.
In all stages we will also use inferencing. By using inferencing, the load of managing the relationship between entities, classes and properties will be heavily reduced. Furthermore, the number of returned results will be much higher than don’t using inferencing while the results are still discreet enough to work with. This is because the query can still being executed in a shortened version of the full dataset, which contains a large number of instances. It is also possible to add the full dataset as instances of our ontology, but in this way the number of instances and inferred relationships between the classes can be expected to increase enormously which makes it harder for us to work with. 

Description of multiple complex SPARQL Queries
For our web application we make use of two SPARQL queries. Our first query is focusing on retrieving relevant images related to the subject. This subject can take various forms, such as “event”, “location” or “person”. In order to retrieve relevant images our SPARQL-query makes use of the service function and is focusing on the dbo:thumbnail of selected subject. With the use of SPARQL-querying and the example for the web-application given, our goal for this milestone was to retrieve the images only. This worked as seen in the figure below. 
The second query serves the purpose of retrieving a small abstract of a subject. This procedure will again be processed by using the template and altering it slightly. An example can be seen below, again by using subject “German_bombing_of_Rotterdam”. Although it works, a small remark can be made about the usefulness of this query. This query was made for the sake of having multiple queries, in the final milestone this specific query can be altered or removed. 
Furthermore the only issue found, that is design-related, was that subject querying need to go more dynamically, looking a the time and scope constraints, we only used the template given for the web-application. A possible solution was to make a dropdown menu of possible subject retrieved from the current ontology. Therefore some extra features of this webapp need to be implemented in the coming future. 

Inferences
Description
In order to show inferences, our ontology consists of various classes. Take the class diagram made for milestone 2 for example. It says “if an event is won by an allegiance, and country is part of an allegiance, then can be inferred: event is won by allegiance.” At the moment of writing our ontology is relatively small at the “events” class. Even though the size of the ontology is small, this would not alter the fact that the same logic remains, meaning that it would follow the same process no matter the size of the ontology. In the first figure to be seen under the title “Evidence” can be seen that the amount of results without inferencing only returns: “United Kingdom” and “United States”. When looking at the second picture, the United Kingdom and/or the United States are both part of the Allied Forces, meaning the Allied Forces has won as well. This result is returned in the second figure.  
Like said before, the results returned are measly at the time of writing but will definitely increase as time progresses and with the integration of the three datasets used. As the total results are increasing and consistent with inferencing turned on, it can be said that inferencing is indeed working. 
Evidence




