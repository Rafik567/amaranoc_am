import { useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase2 } from "../Data/DataBase";
import TopHeader from "../Header/TopHeader";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Post from "../Post/Post";
import Footer from "../Footer/Footer";
import Regular from "../RegularDetails/Regular";

const RegularDetails: React.FC = () => {
    const [minPrice, setMinPrice] = useState<string>("0");
    const [maxPrice, setMaxPrice] = useState<string>("999999");
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const { id } = useParams<{ id?: string }>();
    const [selectedDates, setSelectedDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    console.log("ID from URL:", id);

    const offer = dataBase2.find((el) => String(el.id) === String(id));

    if (!offer) {
        return <h2>Առաջարկը գտնված չէ:</h2>;
    }
    const handleSelect = (ranges) => {
        setSelectedDates([ranges.selection]);
    };

    const [mainImage, setMainImage] = useState(offer.image1 || "/fallback-image.jpg");

    const imageList = [offer.image1, offer.image2, offer.image3].filter(Boolean);

    return (
        <>
            <TopHeader />
            <div className="p-4">
                <div className="mt-4 flex justify-center items-start space-x-4">
                    <div className="w-[40vw]">
                        <img
                            src={mainImage}
                            className="rounded-lg object-cover w-full h-[60vh]"
                            alt={offer.title}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {imageList.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className={`rounded-lg object-cover w-[415px] h-full cursor-pointer border-2 ${mainImage === img ? "border-green-500" : "border-transparent"
                                    }`}
                                alt={`${offer.title}-${index}`}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex gap-[50px] justify-evenly">
                    <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-md w-[600px]">
                        <h2 className="text-lg font-semibold mb-4">Հայտարարության մասին</h2>
                        <p><strong>Կոդ:</strong> {offer.code}</p>
                        <p><strong>Հասցե:</strong> {offer.address}</p>
                        <p><strong>Գիշերակաց:</strong> {offer.overnight}</p>
                        <p><strong>Շինության մակերես:</strong> {offer.buildingArea}</p>
                        <p><strong>Ընդհանուր մակերես:</strong> {offer.totalArea}</p>
                        <p><strong>Մարդկանց թույլատրելի քանակ:</strong> {offer.peopleCount}</p>
                        <p><strong>Սենյակների քանակ:</strong> {offer.overnightCount}</p>
                        <p><strong>Սանհանգույցների քանակ:</strong> {offer.roomCount}</p>
                        <p><strong>Լողավազան:</strong> {offer.pool}</p>


                    </div>
                    <div className="mt-8 bg-gray-50  p-4 rounded-lg shadow-md w-[370px] h-full">
                        <h2 className="text-lg font-semibold mb-4">Նշեք Ձեր ցանկալի օրերը</h2>
                        <DateRange
                            editableDateInputs={true}
                            onChange={handleSelect}
                            moveRangeOnFirstSelection={false}
                            ranges={selectedDates}
                        />
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-md w-[1650px] ">
                        <h2 className="text-lg font-semibold mb-4">Ընդհանուր նկարագրություն</h2>
                        <div className="text-sm space-y-2">
                            <p>Ծաղկաձորում՝ օրավարձով է տրվում հարմարավետ և ընդարձակ քոթեջ ։</p>
                            <p>Բաղկացած է՝</p>
                            <ul className="list-disc list-inside pl-4">
                                <li>Հյուրասենյակ</li>
                                <li>Խոհանոց</li>
                                <li>3 ննջասենյակներ</li>
                                <li>1 սանհանգույց</li>
                                <li>Շոգեբաղնիք</li>
                                <li>Ջակուզի</li>
                                <li>Տաքացվող տակառ</li>
                                <li>Տաղավար նախատեսված 15 անձի համար</li>
                                <li>Սպասք</li>
                                <li>Wi-Fi</li>
                                <li>Խորովածի վառարան, շամփուրներ</li>
                                <li>Գամակ</li>
                                <li>Անկողնային պարագաներ</li>
                            </ul>
                            <p>Նախատեսված է 6-8 անձի համար:</p>
                            <p className="font-semibold">Տնակի մեկ օրվա արժեքը՝</p>
                            <ul className="list-disc list-inside pl-4">
                                <li>1-6 անձ - 65.000 դրամ</li>
                                <li>7-8 անձ - 90․000 դրամ</li>
                            </ul>
                            <p><strong>Մուտք:</strong> 14:00</p>
                            <p><strong>Ելք:</strong> 12:00</p>
                            <p>Տնակում առկա է ամեն ինչ, ձեր օրը հիշարժան և հնարավորինս հարմարավետ դարձնելու համար: Մենք երաշխավորում ենք ձեր հիասքանչ հանգիստն ու հարմարավետության զգացումը ողջ ընթացքում:</p>
                            <p>Ամրագրման կամ այլ մանրամասների համար գրեք կամ զանգահարեք նշված հեռախոսահամարով:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Regular
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    selectedRegions={selectedRegions}
                    count={count}
                    searchQuery={searchQuery}
                    selectedCategory={selectedCategory}
                />
            </div>
            <Post />
            <Footer/>
        </>
    );
};

export default RegularDetails;
