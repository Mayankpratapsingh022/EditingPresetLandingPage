"use client"
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';

const names: string[] = [
    'Saurabh', 'Prithviraj', 'Salf Khan', 'Shivam', 'MD Shahbaz', 'Himanshu', 'Kabir', 'Vishal Yadav', 
    'Shiva', 'Henry', 'Rishi Raj', 'Pranay Singh', 'Raajasravi', 'Atharv Nanekar', 'Akash C', 'Majid', 
    'Samy Studios', 'Pixel Ritesh', 'Lijo Johnson', 'Bhavesh', 'Prem Sharma', 'Abhishek', 'Harsh raj', 
    'Aditya yt', 'Adarsh Kumar', 'Aman Creations', 'Mipax', 'Mayank Kumar', 'Yasir', 'Varun Dhyani', 
    'Grg Editz', 'Habid.m', 'Ansh M', 'Mohammed Sadiq', 'Amit kumar', 'Anik J', 'Ajay Basfore', 
    'Rajeev M', 'Hoor Abdullah', 'Chris Axworthy', 'Daniel S', 'Roshan A', 'Harnoor Kaur', 'Bilal', 
    'Aaqib', 'Sunny', 'Uzair Hussain', 'Amar Visuals'
];

export default function Toast(): JSX.Element {
    const [shuffledNames, setShuffledNames] = useState<string[]>([]);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setShuffledNames([...shuffle(names)]);
    }, []);

    const getRandomTime = (): number => {
        const minTime: number = 10000; // 10 seconds in milliseconds
        const maxTime: number = 30000; // 30 seconds in milliseconds
        return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    };

    const displayToast = () => {
        if (shuffledNames.length === 0) {
            setShuffledNames([...shuffle(names)]);
        }

        const name: string | undefined = shuffledNames.pop();
        if (name) {
         
                toast.success(`${name} Purchased The Bundle Right now`);
            
        
        }
    };

    // Initial display after 6 seconds
    useEffect(() => {
        const id = setInterval(() => {
            displayToast();
            const time = getRandomTime();
            console.log(time)


            setTimeout(() => {
                displayToast();
            }, time);
        }, 15000); 
        setIntervalId(id);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [shuffledNames]);

    return (
        <>
            <div>
                <Toaster position="top-center" />
            </div>
        </>
    );
}

function shuffle(array: string[]): string[] {
    let currentIndex: number = array.length, randomIndex: number;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
