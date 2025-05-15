import { useState } from "react";
import "./_tabs.scss";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <>
            <p>
              This podcast was born out of a shared passion for addressing
              social issues that stir strong emotions within us. Rather than
              letting that anger sit idle, we decided to channel it into
              something meaningful. One topic that immediately stood out was the
              ongoing struggle against gender inequality.
              <br />
              <br />
              While we recognize that such a complex issue cannot be solved
              through a single podcast, we firmly believe that open and honest
              conversation is a crucial step forward. Gender inequality affects
              all genders, and it’s a topic that deserves attention.
              <br />
              <br />
              In this episode, we bring together perspectives from Italy,
              Greece, and Spain, sharing personal stories and reflections that
              highlight both cultural differences and shared experiences. The
              subject is incredibly broad, and while we had to narrow our focus,
              there is so much more to explore.
              <br />
              <br />
              Our hope is that you find this episode not only engaging and
              thought-provoking, but also inspiring. And above all, we want to
              encourage you to speak up — because using your voice is always
              more powerful than accepting silence.
            </p>
          </>
        );
      case "transcript":
        return (
          <>
            Vaia: Hello everyone I want to thank you for being here. We’re going
            to discuss the gender stigma and social standards: that's our topic.
            I really want you to introduce yourself, say a little bit about
            yourself and your nationalities.
            <br />
            <br />
            Sarah: So, Hi everyone I'm Sarah with the H from Italy.
            <br />
            <br />
            Francesca: I'm Francesca and I'm from Italy too.
            <br />
            <br />
            Felix: I'm Felix, from Spain.
            <br />
            <br />
            Ippocratis : I’m Ippokratis, from Greece.
            <br />
            <br />
            Vaia: Yours truly is Vaia from Greece. Ok now that we introduced our
            speakers, I really want you to say your opinion about the oppression
            that you feel from the social stereotypes that are based on your
            gender. This is something that we live daily, so I guess you have
            many experiences, unfortunately, on that topic.
            <br />
            <br />
            Sarah: So personally for what is concerning work I feel like women
            has to do every time so much more than men. It is like society is
            expecting us to do every time so much more and it's just
            frustrating.
            <br />
            <br />
            Francesca: I think that's staying in the working topic women are
            discriminated in many ways for example beginning from the working
            interview they get asked illegal questions such as “would you like
            to have kids?” which is illegal and sometimes if you're desperate
            looking for a job you have to answer you have no choice. Also like
            other gender gaps regarding payments and such things for example in
            northern Italy women are paid 12% less than men.
            <br />
            <br />
            Sarah: I think we have to say that we are from Greece and Italy so
            we can just talk about our situation and the reality we know but we
            hope that in other countries may be the situation is better.
            <br />
            <br />
            Vaia: Internationally there is a gap in privileges between the two
            genders. What about Spain?
            <br />
            <br />
            Felix: I will be changing the topic a little bit because as a man I
            do feel like sometimes you know there are things that are expected
            from you but it's not nearly as you know about or repressive as
            indication of my female friends for example whenever I'm with them I
            see all the time they're caring about things and being careful and
            you know. Sometimes I feel like we live in two parallel universes
            like they're just experiencing stuff that I wouldn't even think that
            I have to worry about but it's there are daily lives on their daily
            routines.
            <br />
            <br />
            Vaia: So, socially there are many gaps in between the genders as you
            can see from there your daily experiences, but it got more important
            and it's what's happening inside the households. You separate the
            roles in the workplace everywhere but in the household it's really
            important because that's how you raise even your own kids. I don't
            know how your parents divide the roles.
            <br />
            <br />
            Felix: Sadly, in my case I can say it was really not done fairly,
            just because my mom takes care most of it and I try to help her as
            much as I can but of course now I'm not at home so, not anymore, but
            the problem is that when she tries to make my dad actually
            collaborate in the house and you know too to actually get him
            engaged she spends so much energy actually getting him to do
            something that it is easier for her to just go do, so it was and it
            is still really unfair for her and I tried to help her as much as I
            can.
            <br />
            <br />
            Vaia: So it’s like how men are being taught to grow up as well, like
            women are being taught that they have to help do things, but for men
            you have to persuade them to do the basics.
            <br />
            <br />
            Sarah: Yeah, for example my mother is Romanian and she's from a very
            traditional family and since I was a child she takes care of the
            house and the children of course, but she also taught me to clean
            the house, for example, make the dishes, but now that I have 3
            little brothers she says that “no, but they’re boys, boys don’t have
            to learn it” and now I'm like okay, but I mean we're in 2025 I think
            they can also learn how to do things because someday they will grow
            up and they're gonna have their own house so if I think they should
            learn it too.
            <br />
            <br />
            Francesca: yes I agree with what you said: sadly in my family it's
            like that too because my mom used to work then she was fired and she
            never looked for another job to take care of me and my sister and
            she does all the work at home since my dad works. I think that is
            fair on one side, but only if my mother had to work: would my dad do
            the house things? I don't know. She grew up in a family where her
            dad used to work and her mother used to do everything at home so
            when we have family dinners every time they say but why are women
            sitting here? The kitchen is closer here so they have to go the
            kitchen and cook, so I think this is something really rooted it in
            Italian cultures, but I am kind of happy because I see a change for
            example with my partner who is doing everything at home so I see
            that the new generation is kind of changing something and I’m happy
            about it.
            <br />
            <br />
            Vaia: OK, so, in hypothetical scenario where the man has to stay
            inside the household, I want to ask my male peers and speakers. How
            would you feel to do that? Like if the woman went to work and you
            had to stay at home staying with the kids or even just do their
            house chores.
            <br />
            <br />
            Felix: To be honest I enjoy some household jobs like cooking and
            sometimes even cleaning, definitely not ironing: I hate ironing with
            all my soul. In my household you know I'm fine doing them and I do
            them but of course I would be lacking,like, some side of me would
            feel like I'm missing out and actually having a career and
            developing myself in that regard. I mean, I do like children and all
            that stuff but there's a part of the human experience that I think
            you're missing out if you don't have a job and actually develop a
            professional career.
            <br />
            <br />
            Vaia: But that's not a personal level, it's not about the social
            standards that men have to go to work you don't have that in your
            mind when you're thinking about staying home.
            <br />
            <br />
            Felix: I mean that's true: I'd try to come out of the motive, of
            course 5 things about my parents or my grandparents yeah they
            wouldn't have been happy at all to do what was supposed to be the
            woman's role, I don't think I would have accepted to do it in any
            way.
            <br />
            <br />
            Vaia: Because that's the social stereotype that anybody knows.
            <br />
            <br />
            Felix: Actually my grandad was pretty modern and I regard
            considering the situation like in Spain. There used to be a
            dictatorship where women couldn't even have a Bank Account or get
            divorced, but my grandad wanted my grandma to work but she actually
            chose not to and consider to adapt to Social stereotypes and social
            standards of the time. Women working was being frowned upon, because
            that meant that was interpreted as the man not making enough money,
            to provide for the family and so my Grandma actually stayed at home
            and she knew that if she had to work he would do twice a workload
            that I'd had the home because my granddad wouldn't take care of it
            <br />
            <br />
            Sarah: Can I ask you guys a question? A personal question, I mean,
            do you feel like you have some kind of pressure from society to
            provide for your family with money? As a man, I mean.
            <br />
            <br />
            Ippokratis: I mean this is an idea that is deeply rooted in partly
            all of us probably a little bit and this urge to provide exists in
            some form in everyone.
            <br />
            <br />
            Fransceca: Maybe you have that kind of inner instinct to protect
            your family.
            <br />
            <br />
            Ippokratis: Yeah, you feel otherwise you’re not doing something
            adequately and you know you have to try more than but I don't think
            that this a bad thing.
            <br />
            <br />
            Vaia: It gives motivation to you.
            <br />
            <br />
            Ippokratis: Yeah and it could be beneficial for your end goals, so
            for example when you have your existential crisis, like why am I
            doing this, the answer to provide for your family gives reason to
            whatever you are being through at the moment.
            <br />
            <br />
            Felix: I think actually my mom we could say she's the provider
            actually for the family: she earns as much of no more than my dad,
            so I wasn't raised in an environment where the demand is seen as a
            provider, but still I feel somehow whenever I'm with friends whether
            they're male or female I want to treat them and I want to provide
            for them, wanna be nice and actually you know if I can do so I'm
            gonna go ahead and do it. Actually, you know, approve lives for
            people I think that's a really wholesome value and I think it's more
            traditionally regarded as the masculine thing may also have many
            female friends who actually could have the same behavior who'd like
            treating people like a provider.
            <br />
            <br />
            Vaia: Okay, we have set many standards many social expectations that
            are being upon us. Have you ever felt limited by them though? That’s
            for both genders. In your everyday life have you felt that you're
            being the limited, either in the workplace or else.
            <br />
            <br />
            Sarah: For example I can say that I felt and sometimes I feel
            limited in doing normal things like taking the bus and this is maybe
            another kind of topic but there are so many normal things that I
            feel like women are scared to do alone, because this machist society
            make us feel like victims as preys and it's something that is not
            really regarding social stigma but it's rooted in our society and
            create so many problems. For example the fact that we're not feeling
            safe in going out at night alone or at dressing as we want. For
            example, yesterday we were talking about the fact that men get naked
            so easily for example they just, for tanning, even if we're not at
            the beach. They just took off their shirts as It is normal, but for
            women is not the same, because as a woman just take off my shirt
            maybe….
            <br />
            <br />
            Vaia: It’s illegal.
            <br />
            <br />
            Francesca: I agree with my with my colleague here like there are
            many ways in which women feel like pressured by these social
            standards and I feel that as a young woman who is not still working,
            so I'm not experiencing the working field the part in which I feel
            more oppressed by this is just not having the freedom to do whatever
            I'd like to do, not having the freedom to go around whenever I'd
            like to do it or not having the freedom to wear whatever I'd like to
            wear. And so this thing of not feeling safe enough to do things just
            by yourself.
            <br />
            <br />
            Vaia: From what we discussed until now, what I have seen and heard
            from you guys is that the social expectations for women is about
            appearance and for men it is about economic support.
            <br />
            <br />
            Felix: Me, I've been on a tangent but I'll get to it: for example
            when I was a kid I'm no good at football at all, and in Spain
            standard are really high and if you don't play football and you’re
            in high school, you're pretty much left out of the group or end of
            being forced to, you know, socialize with the girls and you're like
            one of the girls that you didn't know a man like Golden Corral in
            that regards to people who actually shit and shame you and make fun
            of you. But yeah on the economic topic I don't think I'm so young
            enough that that hasn't been an issue but I do think when you get
            older you are expected to have a successful career to be you know
            rich and to put it simply. Because you're seen as a provider, one
            who should provide people.
            <br />
            <br />
            Francesca: I think that as a young girl the thing that I experienced
            the most was in middle school and the first years of high school so
            you talked about appearance I feel that girls really, I'm speaking
            for Italy they do put a lot of effort in the way they appear the way
            they look so we have really high standards so all the girls use
            makeup they're all pretty so if you aren't, if you have acne or
            something like that you really feel pressured by it and I think that
            the thing that worsens these are social media, of course, for
            example if you have TikTok or if you have Instagram you see all
            those young girls that are the same age as you and they look better
            than you maybe because they're using filters or something like that
            and you feel pressured and if you look up for suicide rates based on
            this topic they're really high in Italy among young girls so this is
            really an issue and I think that it's really felt by girls.
            <br />
            <br />
            Vaia: You know guys, even at this topic about the appearance, it
            touches men also, because now you see that everybody goes to the gym
            and everybody does anything to look at their best. So the oppression
            is from so many categories.
            <br />
            <br />
            Felix: Yes, I feel that it's a really easy thing to fall for you
            know when you're at least I was 16 when my friends are going to the
            gym and yeah I saw them doing things that aren't necessarily healthy
            or you know I'm speaking from every side mentally and physically
            just for the sake of an ideal that is not reasonable to reach I
            think they're harming themselves.
            <br />
            <br />
            Vaia: Just to touch the standards.
            <br />
            <br />
            Felix: Exactly just because social media present some jacked people
            and they think that it's what's normal and it’s not.
            <br />
            <br />
            Vaia: Okay but after we discuss about the issues from society, I
            want to get a little bit more personal and more psychological I
            would say. How do you feel about crime in public? Like there are
            some societies that seeing men crying it's weak, it's feminine, so
            how do you feel about it?
            <br />
            <br />
            Sarah: As a woman, I don't feel so much this kind of pressure, it's
            more of a social thing, I don't like crying in public, but not
            because I'm a woman, not because I have to seem strong, just because
            I don't like it, but I do it a lot.
            <br />
            <br />
            Francesca: Actually I don't think I've ever seen like a boy crying
            in my life, like just once. And I've talked to a lot of my friends
            and they said “oh no, no we don't do that it's just for girls”.
            <br />
            <br />
            Felix: I swear I don't cry. Like, I am a sensitive person and I
            don't get really emotional but just it's not the way it's showing
            emotion.
            <br />
            <br />
            Vaia: Before we go to our male speakers, there is a really important
            matter to discuss, I want to ask my female peers here, did you feel
            like if you see a man crying it is repulsive? Like you would not
            like it or you don't care.
            <br />
            <br />
            Sarah: Not at all, It’s the opposite for me, when I see a man
            showing his emotion naturally without making problems or complaining
            about it I find it more attractive.
            <br />
            <br />
            Francesca: Yeah, I mean I do not find it attractive but I feel like
            oh my god this person is opening up, he's showing his feelings and I
            think that's natural, I like it.
            <br />
            <br />
            Vaia: They are in touch with their own feelings.
            <br />
            <br />
            Sarah: When they’re not scared about showing weakness.
            <br />
            <br />
            Francesca: They’re not insecure
            <br />
            <br />
            Vaia: Okay my male peers, it’s your time to shine.
            <br />
            <br />
            Ippokratis: I think I don't remember the last time I felt the urge
            to cry in public, it's not that I wanted to cry and felt oppressed
            not to do so, like if something dramatic happens, I will go in a
            fight or flight response, where crying doesn't have a place, so
            yeah…
            <br />
            <br />
            Felix: I have friends who as I said my response is also not crying
            most of the time it's just I've never felt like “oh I shouldn't cry
            here” like maybe with movies I get pretty like it's really funny
            because when actually like real stuff happens to me it's not the
            way, but with movies I do but still I do have some friends who you
            know are more sensitive for showing in that way and I think it's
            beautiful, I think it's expressive and we shouldn't hold ourselves
            back. We also have to take in mind that, you know, sometimes it's
            better to have a cold mind and actually you know if there’s a side
            for emotion in crying and all that and there’s also a side for
            rational thought I'm dealing with issues just a bit more you know
            with a mind but side for both and we have to take both into account.
            <br />
            <br />
            Vaia: Before we close this podcast I have another question I want to
            ask, it's about: what's your expectations and let's say how you
            imagine your manager to be in your work. Let's talk about the
            workplace, how do you imagine your manager would be like?
            <br />
            <br />
            Francesca: So, I'm studying economics and I'd like to study
            management, so I'd like to be a manager myself: I imagine a manager
            as someone who is able to run a business, to make the hardest
            decisions and to manage money and stuff like that. I don't actually
            have an expectation on him or her being a man or a woman, I just
            imagine a gender fluid figure who is able to run a business, either
            man or a woman. Yeah, I actually they're wrong because they may be
            right, but there are many studies that show that women
            <br />
            <br />
            Vaia: So you do don't have in mind something specific about the
            gender, because usually when you say about a position that it's in
            authority mostly we think about male figures. I think these
            generation things are going to change a bit, I hope so.
            <br />
            <br />
            Ippokratis : I believe that when someone hears the word boss or
            manager, we subconsciously have a male figure in our minds. I also
            want to share my experience with the workplace. So I study medicine
            and I have a spent countless hours in hospital so far and in many of
            the departments I have trained, the head was a woman, a woman
            physician, and I saw something really interesting and really warning
            at the same time. The woman physicians they had to try doubles as
            hard to be taken seriously to even persuade the patients and the the
            families that they are the doctors in charge and that they're not
            nurses or helping personal of the hospital, and I even remember once
            I was on I was standing next to practically the head of a at the
            Department of the time and of even though she was the manager, she
            was the boss at that time, one of the patients approached me and
            asked me how to manage the situation, and I was 22 years and it was
            visible, and she was running the whole thing, but I was approached
            and I was asked to give a solution to a situation actually couldn't.
            <br />
            <br />
            Vaia: Experience is something that is not being considered in the
            female in male fields. When you see a man you think that, he has
            more experience he's better at it. As you can see in many events
            that they call the CEO's they invite, engineers etc are all men.
            Everything in the STEM field is mostly male.
            <br />
            <br />
            Sarah: Another thing that I noticed is when we realize that a
            manager or someone who is invited is a woman we remain a little
            shocked. Like “oh wow, there is a woman here” or for example the
            pilots of an airplane: when we hear a woman voice we just think
            about “Oh, she's a woman” but we don't think “Oh, he’s a man” when
            he's a man piloting a plane. So, I think it's something really
            radicated in us and the fact that now women are getting more
            “important”, we can say, or authority in jobs is something new, it’s
            something that shocks us, but maybe it's part of the process, maybe
            it's right that for now we notice this, because we notice a change.
            <br />
            <br />
            Vaia: There are many male figures mostly think that having women in
            the “man field” let’s say, it's meant to use more diversity. They
            don't think that women are capable, they think they are diverse now,
            so they give more opportunities.
            <br />
            <br />
            Francesca: Yeah, I actually they're wrong because they may be right,
            but there are many studies that show that women in CEO and managing
            positions are better than men just in the managing stuff and ,yeah,
            I think we should give them the opportunity to show who they are.
            <br />
            <br />
            Vaia: We are too emotional we cant CEOs. I want to thank everyone,
            thank you for sharing your perspectives I was really glad to have
            you here. I hope it was a good experience for you as well, guys.
            <br />
            <br />
            Sarah: For sure there's a lot to say because the problem is really
            deep, but I think we did a pretty good job, we don't have enough
            time to speak a lot, but I really enjoyed this talk guys, really,
            thank you so much.
            <br />
            <br />
            Vaia: I want to thank our listeners as well and everybody has their
            own opinion and thinks about these matters. See you on the next one
            maybe. Thank you.
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="tabs-wrapper">
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === "about" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About the podcast
          </button>
          <button
            className={`tab-btn ${
              activeTab === "transcript" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("transcript")}
          >
            Transcript
          </button>
        </div>

        <div className="context-container">{renderContent()}</div>
      </div>
    </>
  );
};
