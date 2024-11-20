import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Assumes you are using React Router for navigation

const PayrollDetails = () => {
    const { payrollId } = useParams();  // Get the payroll ID from the URL params
    const [payroll, setPayroll] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch detailed payroll data by payrollId
        const fetchPayrollDetails = async () => {
            try {
                const response = await fetch(`/payrolls/${payrollId}`);
                const data = await response.json();
                setPayroll(data);
            } catch (error) {
                setError("Failed to fetch payroll details.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPayrollDetails();
    }, [payrollId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                Payroll Details
            </div>
            <div className="py-4 px-6">
                <div className="mb-4">
                    <p><strong>Employee ID:</strong> {payroll.employee_id}</p>
                    <p><strong>Basic Pay:</strong> {payroll.basic_pay}</p>
                    <p><strong>Loans:</strong> {payroll.loans}</p>
                    <p><strong>NHIF:</strong> {payroll.nhif}</p>
                    <p><strong>NSSF:</strong> {payroll.nssf}</p>
                    <p><strong>PAYE:</strong> {payroll.paye}</p>
                    <p><strong>Deductions:</strong> {payroll.deductions}</p>
                    <p><strong>Allowances:</strong> {payroll.allowances}</p>
                    <p><strong>Net Pay:</strong> {payroll.net_pay}</p>
                    <p><strong>Payment Date:</strong> {payroll.payment_date}</p>
                </div>
            </div>
        </div>
    );
};

export default PayrollDetails;
